import Handlebars from 'handlebars';
import fs from 'fs'

interface ITemplateVariaveis {
	[key: string]: string | number;
}

interface IParseMailTemplate {
	file: string;
	variaveis: ITemplateVariaveis;
}

export default class handlebarsMailTemplate {
	public async parse({
		file,
		variaveis,
	}: IParseMailTemplate): Promise<string> {
		const templateFileContent = await fs.promises.readFile(file, {
			encoding: "utf-8"
		})
		const parseTemplate = Handlebars.compile(templateFileContent)

		return parseTemplate(variaveis)
	}
}
