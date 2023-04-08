import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface ILandingPage {
	id: string;
	nome: string;
	email: string;
	telefone: string;
	cidade: string;
	estado: string;
	tipoLead: string;
	termosAceitos: boolean;
}

type ILandingPageOmitId = Omit<ILandingPage, 'id'>;

export const updateLead = async (
	{
		nome,
		email,
		telefone,
		cidade,
		estado,
		tipoLead,
		termosAceitos,
	}: ILandingPageOmitId,
	id: string,
): Promise<ILandingPage> => {
	const lead = await prisma.landingPageLeads.findUnique({
		where: {
			id,
		},
	});

	if (!lead) throw new ApiErrors('Lead não encontrado');

	const leadExist = await prisma.landingPageLeads.findUnique({
		where: {
			nome,
		},
	});

	if (leadExist && nome !== lead.nome)
		throw new ApiErrors('Lead já cadastrado com esse nome.');

	return prisma.landingPageLeads.update({
		where: {
			id,
		},
		data: {
			nome,
			email,
			telefone,
			cidade,
			estado,
			tipoLead,
			termosAceitos,
		},
	});
};
