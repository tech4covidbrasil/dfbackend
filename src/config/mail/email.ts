interface IMailConfig {
	driver: 'ethereal' | 'ses',
	defaults: {
		from: {
			email: string,
			nome: string,
		}
	}
}

export default {
	driver: process.env.EMAIL_DRIVER || 'ethereal',
	defaults: {
		from: {
			email: 'contato@doarbem.com.br',
			nome: 'Suporte Doarbem'
		}
	}
} as IMailConfig