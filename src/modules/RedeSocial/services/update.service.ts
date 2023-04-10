import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IRedeSocial } from '../../../shared/interfaces';

type IRedeSocialOmitId = Omit<IRedeSocial, 'id'>;

export const updateRedeSocial = async ({
	nome
}: IRedeSocialOmitId, id: number, ): Promise<IRedeSocial> => {

	const redeSocial = await prisma.redeSocial.findUnique({
		where: {
			id,
		}
	})

	if(!redeSocial) throw new ApiErrors("Rede Social não encontrado")

	const redeSocialExists = await prisma.redeSocial.findUnique({
		where: {
			nome
		}
	})

	if(redeSocialExists && nome !== redeSocial.nome) throw new ApiErrors("Rede Social já cadastrado com esse nome.")

	return await prisma.redeSocial.update({
		where: {
			id,
		},
		data: {
			nome
		},
	});
};
