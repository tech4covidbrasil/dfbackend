import prisma from '@config/prisma';
import ApiErrors from 'src/shared/errors/ApiErrors';

interface ILandingPage {
	id: string;
	nome: string;
	email: string,
	telefone: string;
	cidade: string;
	estado: string;
	tipoLead: string;
	termosAceitos: boolean;
}

type LandingPageOmitId = Omit<ILandingPage, 'id'>;

export const createLead = async ({
	nome,
	email,
	telefone,
	cidade,
	estado,
	tipoLead,
	termosAceitos,
}: LandingPageOmitId): Promise<ILandingPage> => {
	const leadExists = await prisma.landingPageLeads.findUnique({
		where: {
			nome,
		},
	});

	if (leadExists) throw new ApiErrors('Lead já cadastrado', 400);

	return prisma.landingPageLeads.create({
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
