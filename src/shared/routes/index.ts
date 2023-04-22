import { Router } from "express";

//OK
import campanha from "../../modules/Campanha/routes/campanha.routes";
import campanhaFavorita from "../../modules/CampanhaFavorita/routes/campanha.routes";
import cidade from "../../modules/Cidade/routes/cidade.routes";
import doacao from "../../modules/Doacao/routes/doacao.routes";
import documento from "../../modules/Documento/routes/documento.routes";
import endereco from "../../modules/Endereco/routes/endereco.routes";
import estado from "../../modules/Estado/routes/estado.routes";
import historicoUsuario from "../../modules/HistoricoUsuario/routes/historicoUsuario.routes";

//EM REV
import landingPage from "../../modules/LandingPage/routes/landingPage.routes";
import produto from "../../modules/Produto/routes/produto.routes";
import prodUndMedida from "../../modules/ProdutoMedida/routes/produtomedida.routes";
import redeSocial from "../../modules/RedeSocial/routes/redesocial.routes";
import tipoDocumento from "../../modules/TipoDocumento/routes/tipoDocumento.routes";
import unidadeMedida from "../../modules/UnidadeMedida/routes/unidademedida.routes";
import usuario from "../../modules/Usuario/routes/usuario.routes";

//Aguardando Desenvolvimento
import foto from "../../modules/Foto/routes/foto.routes";

// Rota de Autenticação - Separado
import autenticacao from "../../modules/Usuario/routes/user.auth.routes";

const routes = Router()

//OK
routes.use('/campanha', campanha)
routes.use('/campanha-favorita', campanhaFavorita)
routes.use('/cidade', cidade)
routes.use('/doacao', doacao)
routes.use('/documento', documento)
routes.use('/endereco', endereco)
routes.use('/estado', estado)
routes.use('/historico', historicoUsuario)

//EM REV
routes.use('/foto', foto)
routes.use('/landing-page', landingPage)
routes.use('/produto', produto)
routes.use('/produto-medida', prodUndMedida)
routes.use('/rede-social', redeSocial)
routes.use('/tipo-documento', tipoDocumento)
routes.use('/unidade-medida', unidadeMedida)
routes.use('/usuario', usuario)

// Rota de Autenticação - Separado
routes.use('/auth', autenticacao)

export default routes
