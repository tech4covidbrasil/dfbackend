
import prisma from '@config/prisma'
import {NextFunction, Request, Response} from 'express'
import ApiErrors from 'src/shared/errors/ApiErrors'
import { ErrorResponse } from 'src/shared/utils/ApiResponse'

export const isAdmin = async (request: Request, response: Response, next: NextFunction) => {
	console.log(`AdminID: ${request.id}`)
	try {
		const userRole = await prisma.usuarioRole.findFirst({
			where: {
				usuarioId: request.id
			},
			select: {
				roles:{
					select: {
						nome: true
					}
				},
				usuario: {
					select: {
						nome: true
					}
				}
			}
		})

		if(userRole?.roles.nome !== "ADMIN"){
			throw new ApiErrors(`Usuario: ${userRole?.usuario?.nome} - Permissão: ${userRole?.roles.nome} não autorizado`,403 )
		}

		next()
	} catch (error: any) {
		ErrorResponse(response,400,`AdminValidation`, `${error.message}`)
	}
}