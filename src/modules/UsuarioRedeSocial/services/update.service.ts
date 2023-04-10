import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IUsuarioRedeSocial } from '../../../shared/interfaces';

type IUsuarioRedeSocialOmitId = Omit<IUsuarioRedeSocial, 'id'>;

export const updateUsuarioRedeSocial = async ({
	descricao, usuarioId, redeSocialId
}: IUsuarioRedeSocialOmitId, id: number, ): Promise<IUsuarioRedeSocial> => {

	const redeSocial = await prisma.usuarioRedeSocial.findUnique({
		where: {
			id,
		}
	})

	if(!redeSocial) throw new ApiErrors("Cadastro não encontrado")

	return await prisma.usuarioRedeSocial.update({
		where: {
			id,
		},
		data: {
			descricao, redeSocialId
		},
	});
};
