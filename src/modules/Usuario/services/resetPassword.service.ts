import prisma from '../../../config/prisma';
import crypto from 'crypto';

import path from 'path';

import { cryptPwd } from '../utils/password';
import { getUsuarioById } from './get.service';
import ApiErrors from '../../../shared/errors/ApiErrors';
import EtherealMail from '../../../config/mail/EtherealMail';
import SESMail from '../../../config/mail/SESMail';
import mailConfig from '../../../config/mail/email'

/**
 * method: POST
 * route: ./password-reset?u={usuarioId}&t={resetTokenId}
 */

export const resetarSenhaWeb = async (
	usuarioId: any, //doar
	resetTokenId: any, //bem
): Promise<void> => {
	//validação do usuarioId/tokenId será feito no Joi direto na rota.

	const usuario = await getUsuarioById(usuarioId);

	if (resetTokenId !== usuario.senhaResetToken)
		throw new ApiErrors('Token Inválido');

	//Validando o tempo do token
	const horarioAtual = new Date();

	if (!usuario.senhaResetExpires || usuario.senhaResetExpires === null)
		throw new ApiErrors(
			'Não é possivel verificar data de expiração do token informado.',
		);

	if (horarioAtual > usuario.senhaResetExpires)
		throw new ApiErrors(
			'Token Expirado, por favor tente resetar a senha novamente.',
		);

	const novaSenha = crypto.randomBytes(8).toString('hex')
	const pwdHash = await cryptPwd(novaSenha)

	await prisma.usuario.update({
		where: {
			id: usuarioId,
		},
		data: {
			senha: pwdHash,
			senhaResetToken: null,
			senhaResetExpires: null,
		},
	});

	const templateEsqueciMinhaSenha = path.resolve(
		__dirname,
		'..',
		'views',
		'senhaAlteradaSucesso.hbs',
	);

	if(mailConfig.driver === 'ses'){
		//Ambiente Produção
		await SESMail.sendMail({
			to: {
				nome: usuario.nome,
				email: usuario.email,
			},
			subject: '[DoarBem] - Sua senha foi Alterada!',
			templateMail: {
				file: templateEsqueciMinhaSenha, //deve ser colocado os valores das variaveis enviadas (abaixo)
				variaveis: {
					nome: usuario.nome,
					senha: novaSenha,
					link: `http://localhost:3000/api/auth/login`
				},
			},
		});

		return
	}

	//Ambiente de Desenvolvimento
	await EtherealMail.sendMail({
		to: {
			nome: usuario.nome,
			email: usuario.email,
		},
		subject: '[DoarBem] - Sua senha foi Alterada!',
		templateMail: {
			file: templateEsqueciMinhaSenha, //deve ser colocado os valores das variaveis enviadas (abaixo)
			variaveis: {
				nome: usuario.nome,
				senha: novaSenha,
				link: `http://localhost:3000/api/auth/login`
			},
		},
	});
};
