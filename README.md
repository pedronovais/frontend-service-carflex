# Carflex - Locadora de Veículos

Soluções em frota corporativa com foco em continuidade, previsibilidade e redução de risco.

## Tecnologias

Este projeto é construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Como executar localmente

### Pré-requisitos

- Node.js 20.19+ ou 22.12+
- npm

### Instalação

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:8080`

## Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run build:dev` - Cria build em modo desenvolvimento
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza o build de produção
- `npm run test` - Executa os testes
- `npm run test:watch` - Executa os testes em modo watch

## Estrutura do projeto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── lib/           # Utilitários
└── assets/        # Imagens e recursos estáticos
```

## Desenvolvimento

Para trabalhar neste projeto:

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute `npm run dev` para iniciar o servidor de desenvolvimento
4. Faça suas alterações e veja o hot-reload em ação

## Build de produção

Para criar um build de produção:

```sh
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## Configuração de Envio de Email

O formulário de orçamento está configurado para enviar emails diretamente para `administrativo@carflexlocadora.com.br` usando **FormSubmit**, um serviço gratuito e simples que não requer configuração.

### Como funciona:

- **FormSubmit**: Envia o email automaticamente para `contato@carflex.com.br`
- **Fallback**: Se houver erro, abre o cliente de email padrão com os dados preenchidos

**Nota:** O FormSubmit é gratuito e funciona automaticamente, sem necessidade de criar conta ou configurar credenciais.
