import prisma from '@config/prisma';

interface IEndereco {
	ddd: string;
	telefone: string;
	cep: string;
	endereco: string;
	numero: number;
	complemento?: string | null;
	bairro: string;
	cidade: string;
	estado: string;
	usuarioId: string;
}
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
