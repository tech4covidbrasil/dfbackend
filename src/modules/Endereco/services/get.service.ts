import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

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
};

export const getEnderecoById = async (
	id: string,
): Promise<IEndereco> => {
	const documento = await prisma.endereco.findUnique({
		where: {
			id,
		},
	});

	if(!documento) throw new ApiErrors("Endereço não encontrado")

	return documento
};
