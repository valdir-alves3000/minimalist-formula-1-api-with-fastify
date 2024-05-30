# API de Fórmula 1

Esta é uma API simples construída com Fastify para obter informações sobre equipes e pilotos da Fórmula 1.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/valdir-alves3000/minimalist-formula-1-api-with-fastify.git
```

2. Instale as dependências:

```bash
npm install
```

## Uso

Inicie o servidor:

```bash
npm start:dev
```

O servidor começará a ouvir na porta especificada (por padrão é 3000).

## Endpoints

### Obter Todas as Equipes

- **URL:** `/teams`
- **Método:** `GET`
- **Descrição:** Recupera informações sobre todas as equipes da Fórmula 1.
- **Resposta:**
  - `200 OK`: Retorna um array JSON de objetos de equipe.

### Obter Todos os Pilotos

- **URL:** `/drivers`
- **Método:** `GET`
- **Descrição:** Recupera informações sobre todos os pilotos da Fórmula 1.
- **Resposta:**
  - `200 OK`: Retorna um array JSON de objetos de piloto.

### Obter Piloto por ID

- **URL:** `/drivers/:id`
- **Método:** `GET`
- **Descrição:** Recupera informações sobre um piloto específico da Fórmula 1 pelo seu ID.
- **Parâmetros:**
  - `id`: ID do piloto a ser recuperado.
- **Resposta:**
  - `200 OK`: Retorna o objeto do piloto.
  - `404 Not Found`: Se o ID do piloto especificado não for encontrado.

## Dependências

- [Fastify](https://www.fastify.io/) - Framework web rápido e com pouca sobrecarga para Node.js.
- [@fastify/cors](https://github.com/fastify/fastify-cors) - Plugin Fastify CORS.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
