import { Response } from 'express';

export const ErrorResponse = (
	res: Response,
	code: number,
	errorMessage:string,
	e: any = null
): Response => {
	return res.status(code).send({
		status: 'error',
		error: errorMessage,
		e: e?.toString(),
	});
};

export const SuccessResponse = (
	res: Response,
	code: number,
	message: string,
	successMessage?: object,
): Response => {
	return res.status(code).send({
		status: 'success',
		message: message,
		data: successMessage,
	});
};
