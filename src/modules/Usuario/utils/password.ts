import bcrypt from 'bcryptjs'

export const cryptPwd = async (password: string) =>{
	const SALT: number = Number(process.env.SALT) || 10

	return bcrypt.hashSync(password, SALT)
}

export const decryptPwd = async (senhaUsuario: string, senhaCriptografada: string) => {
	return bcrypt.compareSync(senhaUsuario, senhaCriptografada)
}