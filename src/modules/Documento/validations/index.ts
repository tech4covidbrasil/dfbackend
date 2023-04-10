import {Joi} from 'celebrate';

const documentPattern =
	/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
/*
	[0-9]{2} Faixa de caracteres: 0 a 9, quantidade: 2 caracteres;
	[0-9]{3} Faixa de caracteres: 0 a 9, quantidade: 3 caracteres;
	[0-9]{4} Faixa de caracteres: 0 a 9, quantidade: 4 caracteres;
	[\.]?Um ponto, opcional. Foi usado \ no ponto, pois ele sozinho é caractere especial;
	[-]? Um traço, opcional (se acrescentar outros caracteres, comece pelo - sempre);
	[\/]? Uma barra, opcional. Tambem "escapada" com \ pra agradar o PCRE;
	(grupo1)|(grupo2) Se um dos grupos validar, a expressão é válida.
*/

export const bodySchema = Joi.object()
	.keys({
		dataNascimento: Joi.string().min(3),
		tipoDocumentoId: Joi.number(),
		documentoValor: Joi.string().regex(documentPattern),
		usuarioId: Joi.string().guid(),
	})
	.options({ abortEarly: false });

export const paramsSchema = Joi.object().keys({
	id: Joi.string().uuid(),
})
.options({ abortEarly: false });
