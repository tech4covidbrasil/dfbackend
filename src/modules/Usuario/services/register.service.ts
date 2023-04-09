import EtherealMail from '@config/mail/EtherealMail';
import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IUsuario } from 'src/shared/interfaces';
import { cryptPwd } from '../utils/password';
import { validaEmail, validaNome } from '../utils/validaUsuario';
import path from 'path';
import SESMail from '@config/mail/SESMail';
import mailConfig from '@config/mail/email';

type IUsuarioOmitId = Omit<
	IUsuario,
	'id' | 'senhaResetToken' | 'senhaResetExpires' | 'isValidated'
>;

export const cadastrar = async ({
	nome,
	email,
	senha,
	tipoUsuario,
	termos,
	lgpd,
}: IUsuarioOmitId): Promise<void> => {
	if ((await validaEmail(email)) || (await validaNome(nome)))
		throw new ApiErrors('Usuário/Email já cadastrados');

	const hashPwd = await cryptPwd(senha);

	const novoUsuario = await prisma.usuario.create({
		data: {
			nome,
			email,
			senha: hashPwd,
			tipoUsuario,
			termos,
			lgpd,
		},
	});

	const templateEsqueciMinhaSenha = path.resolve(
		__dirname,
		'..',
		'views',
		'novoCadastro.hbs',
	);

	if (mailConfig.driver === 'ses') {
		//Ambiente Produção
		try {
			await SESMail.sendMail({
				to: {
					nome: novoUsuario.nome,
					email: novoUsuario.email,
				},
				subject: '[DoarBem] - Novo Cadastro',
				templateMail: {
					file: templateEsqueciMinhaSenha, //deve ser colocado os valores das variaveis enviadas (abaixo)
					variaveis: {
						nome: novoUsuario.nome,
						link: `http://localhost:3000/api/auth/login`,
					},
				},
			});
		} catch (error) {
			throw new ApiErrors('Ocorreu um erro, tente novamente.');
		}

		return;
	}

	await EtherealMail.sendMail({
		to: {
			nome: novoUsuario.nome,
			email: novoUsuario.email,
		},
		subject: '[DoarBem] - Novo Cadastro',
		templateMail: {
			file: templateEsqueciMinhaSenha, //deve ser colocado os valores das variaveis enviadas (abaixo)
			variaveis: {
				nome: novoUsuario.nome,
				link: `http://localhost:3000/api/auth/login`,
			},
		},
	});

	// return novoUsuario;
};
