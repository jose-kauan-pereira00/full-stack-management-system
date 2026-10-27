# Cash API

## Visão Geral (Overview)

O **Cash API** é um serviço backend desenvolvido em Java com Spring Boot para gerenciamento financeiro completo. O sistema engloba o controle de categorias, pessoas/clientes, lançamentos financeiros (receitas e despesas) e conta com um robusto sistema de autenticação e autorização baseado em **OAuth2**, além de controle de CORS e migrações de banco de dados via Flyway.

---

## Tecnologias Utilizadas (Tech Stack)

- **Java 21**
- **Spring Boot 4.0**
  - Spring Security & OAuth2 Authorization/Resource Server
  - Spring Data JPA
  - Spring WebMVC
- **Flyway** (Gerenciamento e migração de banco de dados SQL)
- **MariaDB / MySQL** (Banco de dados relacional)
- **Docker & Docker Compose** (Containerização)
- **Maven** (Gerenciador de dependências)

---

## Estrutura do Projeto

```text
├── docker-compose.yml
├── Dockerfile
├── mvnw
├── mvnw.cmd
├── pom.xml
├── README-BACKEND.md
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── invict
    │   │           └── cash_api
    │   │               └── cash_api
    │   │                   ├── CashApiApplication.java
    │   │                   ├── config/           # Configurações de segurança (OAuth2, ResourceServer) e propriedades
    │   │                   ├── cors/             # Filtros de CORS para requisições cross-origin
    │   │                   ├── event/            # Eventos e listeners (ex: publicação de recursos criados)
    │   │                   ├── exceptionhandle/  # Tratamento global de exceções da API
    │   │                   ├── model/            # Entidades JPA (Categoria, Pessoa, Lancamento, Usuario, Permissao, etc.)
    │   │                   ├── repository/       # Repositórios de dados e consultas customizadas (Criteria API)
    │   │                   ├── resource/         # Controladores REST (Endpoints para Categorias, Pessoas, Lançamentos, Tokens)
    │   │                   ├── security/         # Detalhes de autenticação de usuários e utilitários de senha
    │   │                   ├── service/          # Regras de negócio das entidades principais
    │   │                   └── token/            # Processadores e filtros para Refresh Tokens baseados em Cookies
    │   └── resources
    │       ├── application-prod.properties
    │       ├── db
    │       │   └── migration/                    # Scripts de migração do Flyway (V01 a V04)
    │       └── messages.properties
    └── test
        └── java
            └── com
                └── invict
                    └── cash_api
                        └── cash_api
                            └── CashApiApplicationTests.java
```

---

## Pré-requisitos (Prerequisites)

Certifique-se de ter instalado em sua máquina:
- **Java Development Kit (JDK) 21** ou superior
- **Docker** e **Docker Compose** (caso queira subir o banco de dados via container)
- **Maven** (ou utilize o Maven Wrapper `./mvnw` incluso no projeto)

---

## Como Executar o Projeto (Getting Started)

### 1. Subir o Banco de Dados (Docker)
Utilize o Docker Compose para inicializar o banco de dados relacional rapidamente:
```bash
docker-compose up -d
```

### 2. Executar a Aplicação
Você pode rodar a aplicação utilizando o Maven Wrapper (`mvnw`):

No **Linux / macOS**:
```bash
./mvnw spring-boot:run
```

No **Windows (CMD / PowerShell)**:
```cmd
mvnw.cmd spring-boot:run
```

---

## Autenticação (OAuth2)

A API protege seus recursos utilizando tokens OAuth2. 
- O fluxo de autenticação e emissão de tokens é gerenciado pelos endpoints de segurança configurados em `AuthorizationServerConfig` e `TokenResource`.
- Para acessar rotas protegidas, envie o token obtido no cabeçalho HTTP da requisição:
  ```http
  Authorization: Bearer <seu_token_de_acesso>
  ```

---

## Migrações de Banco de Dados (Flyway)

O projeto gerencia o versionamento do esquema do banco de dados automaticamente através do Flyway com os seguintes scripts iniciais (`src/main/resources/db/migration/`):
- `V01__criar_e_registrar_categorias.sql`
- `V02__criar_tabela_pessoa.sql`
- `V03__criar_tabela_lancamentos.sql`
- `V04__criar_e_registrar_usuarios_e_permissoes.sql`

---

## Contribuindo

Contribuições, issues e pull requests são bem-vindos! Sinta-se à vontade para abrir um problema caso encontre algum bug ou queira sugerir melhorias.

---

## Referências e Agradecimentos

Todo este código-fonte foi baseado e estruturado a partir dos ensinamentos dos cursos da **[Algaworks](https://www.algaworks.com/)**, com todos os créditos reservados a eles. Para saber mais, visite a organização oficial no GitHub: [Algaworks](https://github.com/algaworks).