import { NextFunction, Request } from 'express';

import ApiErrors from 'src/shared/errors/ApiErrors';
import jwt from 'jsonwebtoken';

export const geradorToken = (params = {}): string => {
	if (typeof process.env.SECRET !== 'string') {
		throw new ApiErrors('Secret não informado/cadastrado');
	} else {
		return jwt.sign({ params }, process.env.SECRET as string, {
			expiresIn: Number(process.env.EXPIRESIN),
		});
	}
};
