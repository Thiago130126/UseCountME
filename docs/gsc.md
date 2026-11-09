# Plano de Gerência de Configuração de Software (GCS)

## Identificação e controle do documento

| Campo | Valor |
|---|---|
| Projeto | Use Count Me |
| Repositório | https://github.com/Thiago130126/UseCountME |
| Responsável pelo projeto | Thiago Canal |
| Responsável pela GCS | Thiago Canal |
| Versão deste plano | 1.0 — proposta inicial |
| Data | 9 de novembro de 2026 |
| Situação | Proposta para revisão e aprovação |
| Revisor do plano | Thiago Canal |

> Este plano registra o estado conhecido do projeto e define o processo de configuração pretendido. A publicação deste arquivo, por si só, não altera as configurações de proteção, permissões, ambientes ou implantação no GitHub. Os itens identificados como “a configurar” só serão considerados implementados depois de configurados e verificados na plataforma.

## 1. Objetivo

Este plano define como os arquivos, versões, mudanças, revisões e liberações do Use Count Me serão identificados, controlados e registrados. Seu objetivo é manter o histórico do projeto rastreável e reduzir mudanças não revisadas, especialmente na branch `main` e no ambiente de produção.

## 2. Escopo e produto

O Use Count Me é uma aplicação web de contagem e manipulação de texto. O repositório contém uma aplicação Next.js com TypeScript, internacionalização com `next-intl`, arquivos de mensagens em português, inglês e espanhol, componentes e recursos estáticos. Também contém configuração de build e execução com Docker, Docker Compose e Nginx.

Este plano abrange o código-fonte, as dependências, a documentação, as traduções, os recursos estáticos, as configurações de build e implantação e os registros de mudanças e releases. Não abrange credenciais, dados pessoais de usuários ou infraestrutura de terceiros que não esteja sob controle do projeto.

## 3. Ferramentas e repositório oficial

O repositório GitHub indicado acima é a fonte oficial dos itens de configuração versionados. Git é usado para histórico de versões e branches. GitHub é usado para hospedar o código, registrar issues e pull requests e, após configuração, aplicar as regras de revisão e implantação. `package-lock.json` registra as versões resolvidas das dependências npm. Dockerfile, `docker-compose.yml` e `nginx/nginx.conf` registram parte da configuração de build e execução.

Os scripts atualmente declarados em `package.json` incluem `npm run lint`, `npm run build`, `npm run dev` e `npm run start`. Não há um script `test` no arquivo consultado. Portanto, testes automatizados devem ser adicionados antes de serem tratados como uma verificação existente ou obrigatória.

## 4. Organização e itens de configuração

Os itens de configuração (IC) são os arquivos ou conjuntos de arquivos que precisam ser identificados e controlados. A estrutura observada e os principais ICs são:

| Código | Item de configuração | Exemplos no repositório |
|---|---|---|
| IC-01 | Aplicação e rotas | `app/`, incluindo páginas e layouts |
| IC-02 | Componentes reutilizáveis e lógica auxiliar | `components/` |
| IC-03 | Internacionalização | `i18n/`, `messages/`, `middleware.ts` |
| IC-04 | Recursos e metadados da aplicação | `public/`, `app/robots.ts`, `app/sitemap.ts` |
| IC-05 | Dependências e comandos npm | `package.json`, `package-lock.json` |
| IC-06 | Build e implantação em contêiner | `Dockerfile`, `docker-compose.yml`, `nginx/nginx.conf`, `.dockerignore` |
| IC-07 | Configuração de compilação e qualidade | `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` |
| IC-08 | Documentação do projeto e da GCS | `README.md`, este plano e documentos futuros em `docs/` |
| IC-09 | Automação de CI/CD | Workflows futuros em `.github/workflows/` |
| IC-10 | Configuração dos ambientes | `staging`, `production`, variáveis e segredos guardados na plataforma, não no Git |

Cada mudança em um IC deve ser rastreável a uma issue, tarefa ou justificativa registrada no pull request. Arquivos gerados, dependências e configurações necessárias à reprodução do build devem permanecer versionados conforme a função de cada ferramenta. Segredos, tokens, senhas, chaves privadas e arquivos locais de ambiente nunca devem ser commitados.

## 5. Papéis e responsabilidades

| Papel | Responsabilidade | Responsável atual |
|---|---|---|
| Responsável pelo projeto e pela GCS | Manter este plano, definir baselines, organizar releases e garantir os registros de mudança | Thiago Canal |
| Desenvolvedor | Criar branches de trabalho, implementar mudanças, executar verificações e abrir pull requests | Thiago Canal |
| Par de revisão | Revisar mudanças e aprovar ou solicitar alterações nos pull requests | A definir: nome e usuário GitHub; deve ter acesso de escrita ao repositório |
| Revisor obrigatório de produção | Aprovar a implantação no ambiente `production` | A definir: conta GitHub de uma pessoa real com acesso apropriado |
| Usuário/professor avaliador | Consultar o repositório e os registros entregues para a avaliação | A definir, se aplicável |

Uma pessoa pode ocupar mais de um papel, mas o autor de um pull request não deve ser contado como seu próprio revisor. O revisor obrigatório de produção precisa ser uma conta ou equipe real configurada no GitHub.

## 6. Convenção de branches e controle de mudanças

A branch `main` representa a linha estável do projeto. Mudanças devem ser feitas em branches de trabalho, por exemplo `feature/descricao`, `fix/descricao` ou `docs/descricao`, e integradas por pull request. Não se deve desenvolver diretamente em `main`.

Todo pull request deve descrever o objetivo da mudança, apontar a issue ou tarefa relacionada quando houver, listar os ICs afetados e informar as verificações realizadas. Mudanças que alterem comportamento, dependências, traduções, build, configuração de contêiner ou implantação exigem revisão antes da integração.

A configuração desejada para `main` é:

1. exigir pull request para integrar mudanças;
2. exigir pelo menos uma aprovação de outra pessoa;
3. exigir aprovação de verificações automatizadas obrigatórias, quando o workflow de CI estiver implantado;
4. invalidar ou exigir nova aprovação quando novas alterações forem adicionadas ao PR, conforme a configuração disponível;
5. impedir force push e exclusão da branch;
6. impedir bypass administrativo da regra, se essa opção estiver disponível e for compatível com o trabalho.

Um pull request pode ser integrado quando as verificações obrigatórias passarem, as observações do revisor forem resolvidas e a aprovação exigida estiver registrada. Alterações urgentes não devem contornar o processo sem justificativa documentada no histórico do repositório.

## 7. Revisão de código e qualidade

Antes de abrir ou atualizar um pull request, o desenvolvedor deve instalar as dependências usando `npm ci` e executar `npm run lint` e `npm run build`. Deve também verificar manualmente as páginas e idiomas afetados. Se a mudança alterar configuração Docker, deve validar o build da imagem e o comportamento da aplicação no contêiner antes da implantação, quando o ambiente local permitir.

A revisão deve considerar correção funcional, regressões, acessibilidade e responsividade quando aplicável, consistência das traduções, segurança de dependências e presença acidental de segredos. A existência de uma verificação neste plano não significa que ela já esteja automatizada; os checks só serão bloqueantes depois de implementados e configurados nas regras da branch.

## 8. Identificação de versões e baselines

O histórico de commits da branch `main` é a referência do estado integrado do código. Uma baseline é um estado identificado do projeto que foi revisado e considerado apto para servir de referência, como uma versão de entrega. Cada baseline deve apontar para um commit e, quando houver release, para uma tag Git.

Como convenção proposta, releases usarão versões semânticas no formato `MAJOR.MINOR.PATCH` e tags no formato `vMAJOR.MINOR.PATCH`. A atualização da versão deve ser consistente entre `package.json`, `README.md` e a tag ou release correspondente, quando esses itens forem aplicáveis.

**Ponto de reconciliação antes da primeira release controlada:** no estado consultado, `package.json` declara `0.1.0`, enquanto o `README.md` registra `1.1.8` como versão atual. O responsável deve decidir qual valor representa a versão válida e alinhá-los antes de criar a próxima baseline ou release.

Cada release deve registrar, no mínimo, a versão, o commit correspondente, as mudanças relevantes, o resultado das verificações, o responsável pela publicação e o ambiente de destino. Uma implantação em produção deve ainda registrar a aprovação exigida pelo ambiente.

## 9. Ambientes e implantação

O fluxo-alvo é manter ambientes separados para validação e produção:

- **`staging`:** receber uma versão candidata para verificação funcional antes da publicação final. O procedimento de implantação e a origem exata da versão devem ser documentados quando a plataforma de hospedagem for definida.
- **`production`:** receber somente uma versão aprovada, após a aprovação obrigatória de uma pessoa designada e a confirmação das verificações aplicáveis.

As variáveis específicas de cada ambiente devem ser guardadas nas configurações protegidas da plataforma de implantação. Valores não secretos podem ser registrados como variáveis de ambiente apropriadas. Segredos nunca devem aparecer em arquivos versionados, issues, comentários ou logs públicos.

Em caso de falha após uma implantação, o responsável deve interromper novas publicações, registrar o incidente e retornar à última versão estável identificada por tag ou commit. A causa e a ação corretiva devem ser registradas em issue ou pull request.

## 10. Registros, rastreabilidade e auditoria

O histórico de commits, issues, pull requests, aprovações, execuções de CI e registros de implantação deve permitir responder: o que mudou, por que mudou, quem alterou, quem revisou, quais verificações passaram e qual versão foi publicada em cada ambiente.

O responsável pela GCS deve revisar este plano no início de cada nova etapa relevante do trabalho e sempre que mudar o processo de branches, revisão, build, implantação ou composição da equipe. Alterações no próprio plano devem ser feitas por pull request e aprovadas pelo responsável pelo projeto ou por um revisor designado.

## 11. Estado inicial observado e ações para tornar o processo efetivo

Na inspeção pública do repositório em 9 de novembro de 2026, o projeto estava público e a branch padrão era `main`. A API do GitHub indicava `main` como não protegida. Foi encontrado o ambiente `Production`, sem regras de proteção, e não foi encontrado um ambiente `staging`. Também não foram identificados workflows em `.github/workflows/` na árvore de arquivos consultada. O repositório continha somente a branch `main` na listagem pública observada.

Esses pontos são o estado inicial observado, não configurações implementadas por este documento. Antes de declarar os requisitos de governança atendidos, o responsável deve:

- publicar este plano como `docs/plano-gcs.md` e vinculá-lo no `README.md`;
- adicionar o par de revisão como colaborador com permissão de escrita e registrar sua identificação neste plano;
- configurar a proteção de `main` para exigir PR e aprovação, além dos checks selecionados;
- configurar `staging` e adicionar uma regra de aprovação obrigatória em `production` com uma conta real;
- definir a hospedagem e implementar ou documentar os procedimentos de deploy;
- guardar evidências das configurações e realizar um teste seguro que demonstre a recusa de push direto em `main`;
- reconciliar a versão indicada no `README.md` com a versão em `package.json`.

## 12. Aprovação deste plano

| Aprovação | Nome | Identificação GitHub | Data |
|---|---|---|---|
| Responsável pelo projeto | Thiago Canal | `Thiago130126` | 09/11/2026 |
| Revisor do plano | Thiago Canal | `Thiago130126` | 09/11/2026 |

Este plano passa a ser a baseline aprovada de GCS depois de revisado, atualizado nos campos pendentes que forem necessários e integrado ao repositório por pull request.
