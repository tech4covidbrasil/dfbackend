import prisma from "@config/prisma";
import ApiErrors from "src/shared/errors/ApiErrors";
import { getUsuarioById } from "../services";

export const validaConta = async (userId: string): Promise<void> => {

	console.log(`userId pela URL: ${userId}`)

	const usuario = await getUsuarioById(userId)

	if(!usuario) throw new ApiErrors('Usuário não encontrado.');

	await prisma.usuario.update({
		where: {
			id: usuario.id
		},
		data: {
			isValidated: true
		}
	})
}