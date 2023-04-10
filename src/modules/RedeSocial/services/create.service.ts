import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { IRedeSocial } from '../../../shared/interfaces';

type IRedeSocialOmitId = Omit<IRedeSocial, 'id'>;

export const createRedeSocial = async ({
	nome
}: IRedeSocialOmitId): Promise<IRedeSocial> => {

	const redeSocial = await prisma.redeSocial.findUnique({
		where: {
			nome
		}
	})

	if(redeSocial) throw new ApiErrors("Rede Social já cadastrado", 400)

	return await prisma.redeSocial.create({
		data: {
			nome
		},
	});
};
