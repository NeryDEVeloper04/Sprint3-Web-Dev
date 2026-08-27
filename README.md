# LensFlow — Câmera Adaptativa (versão React)

Migração do protótipo estático (HTML/CSS/JS puro, Sprints 1 e 2) para
React com componentes funcionais, estrutura pai → filho, `localStorage`
e operações com `Math`.

## Tecnologias utilizadas

- React 19 (componentes funcionais + Hooks: `useState`, `useEffect`, `useRef`)
- Vite (build e dev server)
- CSS puro (arquivo único `src/index.css`, portado do protótipo original)
- `localStorage` (sessão de login, contador/histórico de disparos simulados, visitante já cumprimentado)
- `Math.random`, `Math.round`, `Math.floor` (sorteio de modo e cálculo de ISO/abertura/nitidez simulados)
- oxlint (lint)

## Como instalar as dependências

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento (com hot reload):

```bash
npm run dev
```

Acesse o endereço mostrado no terminal (por padrão `http://localhost:5173`).

Build de produção:

```bash
npm run build
npm run preview
```

## Usuários e senhas para teste

Não há autenticação real contra um backend. O formulário "Acesse sua
conta" valida os campos no próprio front-end e salva a sessão no
`localStorage` do navegador. Para testar, use qualquer nome, um e-mail
em formato válido (ex: `teste@teste.com`) e uma senha com 6+ caracteres.

## Estrutura de componentes

```
App (raiz)
├── BoasVindas       -> modal de boas-vindas (localStorage: lensflow_visitante)
├── Header           -> navegação fixa
├── Hero             -> recebe `modos` via props, faz o slideshow
├── Modes            -> recebe `modos` via props
│   └── ModeRow      -> um card por modo (props: modo, index)
├── DisparoSimulado  -> Math.random/round + localStorage (contador e histórico)
├── SpecItem (x5)    -> um item por especificação (props: spec)
├── CTA
├── FormularioLogin  -> localStorage: lensflow_usuario
├── Footer
└── BotaoTopo
```

Os dados de modos e especificações ficam centralizados em
`src/data/modes.js` e `src/data/specs.js`, e são passados de `App` para
os componentes filhos via props — em vez de repetir o mesmo JSX seis
vezes como no protótipo original em HTML.

## Onde e como a IA foi utilizada

Pessoal, gostaria de compartilhar uma atualização importante sobre a nossa migração para o React.Para acelerar o processo e garantir a qualidade das entregas, utilizei inteligência artificial como assistente de desenvolvimento em várias frentes estratégicas:Migração para React: Refatoração e conversão de telas antigas em componentes reutilizáveis e modernos.Documentação Completa: Escrita do arquivo README do projeto, detalhando a nova arquitetura e estrutura de pastas.Instruções de Configuração: Criação de guias passo a passo claros para inicializar o projeto com npm. Resolução de Bugs: Identificação precisa e correção de erros comuns de ciclo de vida, renderização e estado.Brainstorming: Geração de ideias para a estrutura de componentes, gerenciamento de estado global e boas práticas.

## Link do Deploy na Vercel

`[ADICIONAR AQUI após o deploy — ainda não publicado]`

## Repositório Git

`[ADICIONAR AQUI o link do repositório após o push]`
