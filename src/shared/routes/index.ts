import { Router } from "express";

import unidadeMedida from "../../modules/UnidadeMedida/routes/unidademedida.routes";
import landingPage from "../../modules/LandingPage/routes/landingPage.routes";
import documento from "../../modules/Documento/routes/documento.routes";
import endereco from "../../modules/Endereco/routes/endereco.routes";
import produto from "../../modules/Produto/routes/produto.routes";
import foto from "../../modules/Foto/routes/foto.routes";
import campanha from "../../modules/Campanha/routes/campanha.routes";
import campanhaFavorita from "../../modules/CampanhaFavorita/routes/campanha.routes";
import doacao from "../../modules/Doacao/routes/doacao.routes";
import historicoUsuario from "../../modules/HistoricoUsuario/routes/historicoUsuario.routes";
import prodUndMedida from "../../modules/ProdutoMedida/routes/produtomedida.routes";
import usuario from "../../modules/Usuario/routes/usuario.routes";
import autenticacao from "../../modules/Usuario/routes/user.auth.routes";
import tipoDocumento from "../../modules/TipoDocumento/routes/tipoDocumento.routes";
import cidade from "../../modules/Cidade/routes/cidade.routes";
import estado from "../../modules/Estado/routes/estado.routes";
import redeSocial from "../../modules/RedeSocial/routes/redesocial.routes";

const routes = Router()

routes.use('/unidade-medida', unidadeMedida)
routes.use('/landing-page', landingPage)
routes.use('/documento', documento)
routes.use('/endereco', endereco)
routes.use('/produto', produto)
routes.use('/foto', foto)
routes.use('/campanha', campanha)
routes.use('/campanha-favorita', campanhaFavorita)
routes.use('/doacao', doacao)
routes.use('/historico', historicoUsuario)
routes.use('/produto-medida', prodUndMedida)
routes.use('/usuario', usuario)
routes.use('/auth', autenticacao)
routes.use('/tipo-documento', tipoDocumento)
routes.use('/cidade', cidade)
routes.use('/estado', estado)
routes.use('/rede-social', redeSocial)

export default routes
