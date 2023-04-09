import { Router } from "express";

import unidadeMedida from "src/modules/UnidadeMedida/routes/unidademedida.routes";
import landingPage from "src/modules/LandingPage/routes/landingPage.routes";
import documento from "src/modules/Documento/routes/documento.routes";
import endereco from "src/modules/Endereco/routes/endereco.routes";
import produto from "src/modules/Produto/routes/produto.routes";
import foto from "src/modules/Foto/routes/foto.routes";
import campanha from "src/modules/Campanha/routes/campanha.routes";
import campanhaFavorita from "src/modules/CampanhaFavorita/routes/campanha.routes";
import doacao from "src/modules/Doacao/routes/doacao.routes";
import historicoUsuario from "src/modules/HistoricoUsuario/routes/historicoUsuario.routes";
import produtoDoacaoCampanha from "src/modules/ProdutoCampanhaDoacao/routes/ProdCampDoacao.routes";
import prodUndMedida from "src/modules/ProdutoMedida/routes/produtomedida.routes";
import usuario from "src/modules/Usuario/routes/usuario.routes";
import autenticacao from "src/modules/Usuario/routes/user.auth.routes";
import tipoDocumento from "src/modules/TipoDocumento/routes/tipoDocumento.routes";

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
routes.use('/doacao-campanha', produtoDoacaoCampanha)
routes.use('/produto-medida', prodUndMedida)
routes.use('/usuario', usuario)
routes.use('/auth', autenticacao)
routes.use('/tipo-documento', tipoDocumento)
// routes.use('/cidade', )
// routes.use('/estado', )

export default routes
