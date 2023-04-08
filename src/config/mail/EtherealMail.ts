import nodemailer from 'nodemailer';
import handlebarsMailTemplate from './HandlebarsMailTemplate';

interface IMailContato {
	nome: string;
	email: string;
}

interface ITemplateVariaveis {
	[key: string]: string | number;
}

interface IParseMailTemplate {
	file: string;
	variaveis: ITemplateVariaveis;
}

interface ISendMail {
	to: IMailContato;
	from?: IMailContato;
	subject: string;
	templateMail: IParseMailTemplate;
}

export default class EtherealMail {
	static async sendMail({
		to,
		from,
		subject,
		templateMail,
	}: ISendMail): Promise<void> {
		const account = await nodemailer.createTestAccount();

		const emailTemplate = new handlebarsMailTemplate()

		const transporter = nodemailer.createTransport({
			host: account.smtp.host,
			port: account.smtp.port,
			secure: account.smtp.secure,
			auth: {
				user: account.user,
				pass: account.pass,
			},
		});

		const message = await transporter.sendMail({
			from: {
				name: from?.nome || 'ONG Doarbem',
				address: from?.email || 'teste@teste.com.br', //email = interface criada acima - address é do nodemailer
			},
			to: {
				name: to.nome,
				address: to.email,
			},
			subject,
			html: await emailTemplate.parse(templateMail),
		});

		//Capturar no log o ID de reset do token
		console.log(`ID ${message.messageId}`);
		console.log(`URL ${nodemailer.getTestMessageUrl(message)}`);
	}
}
