import nodemailer from 'nodemailer';
import aws from 'aws-sdk';
import handlebarsMailTemplate from './HandlebarsMailTemplate';
import mailConfig from '@config/mail/email'

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

export default class SESMail {
	static async sendMail({
		to,
		from,
		subject,
		templateMail,
	}: ISendMail): Promise<void> {
		// const account = await nodemailer.createTestAccount();

		const emailTemplate = new handlebarsMailTemplate()

		const transporter = nodemailer.createTransport({
			SES: new aws.SES({
				apiVersion: '2010-12-01'
			})
		});

		const { email, nome } = mailConfig.defaults.from

		const message = await transporter.sendMail({
			from: {
				//parametros vindo do arquivo de configuração email (padrão)
				name: from?.nome || nome,
				address: from?.email || email,
			},
			to: {
				name: to.nome,
				address: to.email,
			},
			subject,
			html: await emailTemplate.parse(templateMail),
		});
	}
}
