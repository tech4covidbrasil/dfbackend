import prisma from '../../../config/prisma';
import { IEndereco } from '../../../shared/interfaces';

type IEnderecoOmitId = Omit<IEndereco, 'id'>;

export const createEndereco = async ({
	ddd,
	telefone,
	cep,
	endereco,
	numero,
	complemento,
	bairro,
	cidade,
	estado,
	usuarioId,
}: IEnderecoOmitId): Promise<IEndereco> => {
	return prisma.endereco.create({
		data: {
			ddd,
			telefone,
			cep,
			endereco,
			numero,
			complemento,
			bairro,
			cidade,
			estado,
			usuarioId,
		},
	});
};
