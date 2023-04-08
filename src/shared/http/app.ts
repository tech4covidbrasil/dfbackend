import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import routes from '../routes';

import ApiErrors from '../errors/ApiErrors';
import { errors } from 'celebrate';

const app = express();

dotenv.config();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rotas
app.get('/', (request, response) => {
	return response.status(200).json({
		message: 'Hello World',
	});
});

app.use(routes);

//Validação de Erros Joi
app.use(errors());

//Middleware de Erros
app.use(
	(
		error: Error,
		request: Request,
		response: Response,
		next: NextFunction,
	) => {
		if (error instanceof ApiErrors) {
			return response.json(error.statusCode).json({
				status: 'error',
				message: error.message,
			});
		}

		console.log(error.message)
	},
);

export default app;
