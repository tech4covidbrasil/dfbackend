import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ILandingPage } from '../../../shared/interfaces';

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
