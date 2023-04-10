import prisma from '../../../config/prisma';
import { ILandingPage } from '../../../shared/interfaces';

export const listLead = async (): Promise<ILandingPage[]> => {
	return await prisma.landingPageLeads.findMany()
};
