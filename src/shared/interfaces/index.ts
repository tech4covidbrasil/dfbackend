export interface IUsuario {
	id: string;
	nome: string;
	email: string;
	senha: string;
	senhaResetToken?: string | null;
	senhaResetExpires?: Date | null;
	tipoUsuario: string;
	termos: boolean;
	lgpd: boolean;
	isValidated?: boolean | null;
}

export interface IDocumento {
	id: string;
	dataNascimento: string;
	documentoValor: string;
	usuarioId: string;
	tipoDocumentoId: number;
}

export interface ITipoDocumento {
	id: number;
	docNome: string;
}

export interface IFoto {
	//revisar
	id: string;
	foto_nome: string;
	foto_path: string;
	usuarioId: string;
}

export interface IEndereco {
	id: string;
	ddd: string;
	telefone: string;
	cep: string;
	endereco: string;
	numero: number;
	complemento?: string | null;
	bairro: string;
	cidade: string;
	estado: string;
	usuarioId: string;
}

export interface ILandingPage {
	id: string;
	nome: string;
	email: string;
	telefone: string;
	cidade: string;
	estado: string;
	tipoLead: string;
	termosAceitos: boolean;
}

export interface IDoacao {
	id: string;
	usuarioId: string;
	campanhaId: string;
	produtoId: number;
	quantidadeDoada: number;
	isValidated: boolean;
}

export interface ICampanha {
	id: string;
	nome: string;
	cidadeCampanha: string;
	estadoCampanha: string;
    tipoArrecadacao: string;
	descricao: string;
	dataCriacaoCampanha?: Date;
	dataTerminoCampanha: Date;
	isValidated: boolean;
	isActive: boolean;
	usuarioId: string;
}

export interface IUnidadeMedida {
	id: number;
	nome: string;
	abreviacao: string;
}

export interface IProduto {
	id: number;
	nome: string;
}

export interface IHistoricoUsuario {
	id: string;
	usuarioId: string;
	descricao: string;
}

export interface IProdutoMedida {
	id: string;
	produtoId: number;
	unidadeMedidaId: number;
}


export interface IEstados {
	id: number,
	nome: string,
	abreviacao: string;
}

export interface ICidade {
	id: number;
	nome: string;
};

export interface ICampanhaFavorita {
	id: string;
	usuarioId: string;
	campanhaId: string;
}

export interface IRedeSocial {
	id: number;
	nome: string;
};

export interface IUsuarioRedeSocial {
	id: number;
	descricao: string;
	usuarioId: string;
	redeSocialId: number
};

export interface ILogin {
	email: string;
	senha: string;
}

export interface IPasswordRecover {
	email: string;
}

export interface IUsuarioRoles {
	id: string;
	usuarioId: string;
	rolesId: string;
}






