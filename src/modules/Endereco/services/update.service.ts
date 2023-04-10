import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';

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

export const updateEndereco = async (
	{
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
	}: IEnderecoOmitId,
	id: string,
): Promise<IEndereco> => {
	const address = await prisma.endereco.findUnique({
		where: {
			id,
		},
	});

	if (!address) throw new ApiErrors('Endereço não encontrado');

	return prisma.endereco.update({
		where: {
			id,
		},
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

