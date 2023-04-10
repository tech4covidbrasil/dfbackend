import ApiErrors from '../../../shared/errors/ApiErrors';
import { IUsuario } from '../../../shared/interfaces';
import { validaEmail } from '../utils/validaUsuario';
import { getUsuarioByEmail, getUsuarioById } from './get.service';

import path from 'path';

import prisma from '../../../config/prisma';
import crypto from 'crypto';
import { cryptPwd } from '../utils/password';
import EtherealMail from '../../../config/mail/EtherealMail';
// import { decodeToken } from '../utils/token';
import SESMail from '../../../config/mail/SESMail';
import mailConfig from '../../../config/mail/email';

export const esqueciSenha = async (email: string): Promise<void> => {
	const userEmailExist = await getUsuarioByEmail(email);

	if (!userEmailExist)
		throw new ApiErrors('Email não cadastrado / encontrado.');

	//Irá gerar uma string de 20 caracteres para compor a url de redefinição de senha
	const pwdToken = crypto.randomBytes(20).toString('hex');

	//Gerando o tempo que o usuário tem para resetar a senha
	const tokenExpiresIn = new Date();

	//1h de duração para reset de senha
	tokenExpiresIn.setHours(tokenExpiresIn.getHours() + 1);

	//Se tudo correu bem até esse ponto eu atualizo os dados do usuário
	await prisma.usuario.update({
		where: {
			email,
		},
		data: {
			senhaResetToken: pwdToken,
			senhaResetExpires: tokenExpiresIn,
		},
	});

	const templateEsqueciMinhaSenha = path.resolve(
		__dirname,
		'..',
		'views',
		'esqueciMinhaSenha.hbs',
	);

	if (mailConfig.driver === 'ses') {
		//Ambiente Produção
		try {
			await SESMail.sendMail({
				to: {
					nome: userEmailExist.nome,
					email: userEmailExist.email,
				},
				subject: '[DoarBem] - Esqueceu sua senha?',
				templateMail: {
					file: templateEsqueciMinhaSenha, //deve ser colocado os valores das variaveis enviadas (abaixo)
					variaveis: {
						nome: userEmailExist.nome,
						link: `http://localhost:3000/api/auth/resetar-senha?doar=${userEmailExist.id}&bem=${pwdToken}`,
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
			nome: userEmailExist.nome,
			email: userEmailExist.email,
		},
		subject: '[DoarBem] - Esqueceu sua senha?',
		templateMail: {
			file: templateEsqueciMinhaSenha, //deve ser colocado os valores das variaveis enviadas (abaixo)
			variaveis: {
				nome: userEmailExist.nome,
				link: `http://localhost:3000/api/auth/resetar-senha?doar=${userEmailExist.id}&bem=${pwdToken}`,
			},
		},
	});
};
