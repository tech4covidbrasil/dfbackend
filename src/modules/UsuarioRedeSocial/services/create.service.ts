import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';
import { IUsuarioRedeSocial } from 'src/shared/interfaces';

type IUsuarioRedeSocialOmitId = Omit<IUsuarioRedeSocial, 'id'>;

export const createUsuarioRedeSocial = async ({
	descricao, usuarioId, redeSocialId
}: IUsuarioRedeSocialOmitId): Promise<IUsuarioRedeSocial> => {

	const redeSocial = await prisma.usuarioRedeSocial.findUnique({
		where: {
			redeSocialId
		}
	})

	if(redeSocial) throw new ApiErrors("Apenas uma rede social por perfil.", 400)

	return await prisma.usuarioRedeSocial.create({
		data: {
			descricao, usuarioId, redeSocialId
		},
	});
};
