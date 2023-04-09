import prisma from '@config/prisma';

export const deleteLead = async (
	id: string,
): Promise<void> => {

	await prisma.landingPageLeads.delete({
		where: {
			id
		}
	})
};
