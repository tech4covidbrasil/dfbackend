import { Joi } from 'celebrate';

// const passwordPattern

// Criar 2 Validações? Uma para registro e uma para UPDATE?

export const bodySchema = Joi.object().keys({
	nome: Joi.string().min(3),
	email: Joi.string().email(),
	senha: Joi.string().min(6),
	senhaResetToken: Joi.string(),
	senhaResetExpires: Joi.string(),
	tipoUsuario: Joi.string(),
	termos: Joi.boolean(),
	lgpd: Joi.boolean(),
	isValidated: Joi.boolean(),
})
.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid()
})
.options({ abortEarly: false });

// Projetar validações para querystrings com joi

const loginSchema = Joi.object().keys({
	email: Joi.string().email().required(),
	senha: Joi.string().min(6).required(),
})
.options({ abortEarly: false });

const resetPasswordSchema = Joi.object().keys({
	email: Joi.string().email().required(),
	senha: Joi.string().min(6).required(),
	senhaConfirmacao: Joi.string().required().valid(Joi.ref('senha'))
})
.options({ abortEarly: false });
