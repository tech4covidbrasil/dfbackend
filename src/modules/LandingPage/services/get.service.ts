import prisma from '../../../config/prisma';
import ApiErrors from '../../../shared/errors/ApiErrors';
import { ILandingPage } from '../../../shared/interfaces';

export const getLeadById = async (
	id: string,
): Promise<ILandingPage> => {
	const leads = await prisma.landingPageLeads.findUnique({
		where: {
			id,
		},
	});

	if(!leads) throw new ApiErrors("Lead não encontrado")

	return leads
};
