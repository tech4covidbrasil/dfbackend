import { celebrate, Segments } from 'celebrate';
import { bodySchema, paramsSchema } from '../validations';

import UserAuthController from '../controller/UserAuthController';
import { Router } from 'express';

const autenticacao = Router();

autenticacao.get('/ok', (req, res) => {
	res.status(200).json({
		message: 'autenticacao OK',
	});
});

autenticacao.post('/ativar', UserAuthController.ativarContaUsuario);

autenticacao.post('/login', UserAuthController.login); //request: {login, password}
autenticacao.post('/cadastrar', UserAuthController.register);

autenticacao.post('/esqueci-senha', UserAuthController.forgotPassword); //request: {password}
autenticacao.post('/resetar-senha', UserAuthController.resetPassword);

/*
userAuth.get('/', UserAuthController.index);
userAuth.get(
	'/:id',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UserAuthController.showById,
);

userAuth.put(
	'/:id/editar',
	celebrate({
		[Segments.BODY]: bodySchema,
		[Segments.PARAMS]: paramsSchema,
	}),
	UserAuthController.update,
);

userAuth.delete(
	'/:id/deletar',
	celebrate({
		[Segments.PARAMS]: paramsSchema,
	}),
	UserAuthController.delete,
);*/

export default autenticacao;
