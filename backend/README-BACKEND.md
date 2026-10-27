# CashAPI

## Overview

The **Cash API** is a backend service developed in Java with Spring Boot for comprehensive financial management. The system includes management of categories, people/customers, and financial transactions (income and expenses), and features a robust **OAuth2**-based authentication and authorization system, as well as CORS control and database migrations via Flyway.


## Technologies Used (Tech Stack)

- Spring Security & OAuth2 Authorization/Resource Server
- Spring Data JPA
- Spring WebMVC


## Project Structure

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
│   │                   ├── config/           # Security configurations (OAuth2, ResourceServer) and properties
│   │                   ├── cors/             # CORS filters for cross-origin requests
│   │                   ├── event/            # Events and listeners (e.g., publishing created resources)
│   │                   ├── exceptionhandle/  # Global API exception handling
│   │                   ├── model/            # JPA entities (Category, Person, Transaction, User, Permission, etc.)
│   │                   ├── repository/       # Data repositories and custom queries (Criteria API)
│   │                   ├── resource/         # REST controllers (endpoints for Categories, Persons, Transactions, Tokens)
│   │                   ├── security/         # User authentication details and password utilities
│   │                   ├── service/          # Business logic for core entities
│   │                   └── token/            # Processors and filters for cookie-based Refresh Tokens
│   └── resources
│       ├── application-prod.properties
│       ├── db
│       │   └── migration/                    # Flyway migration scripts (V01 to V04)
│       └── messages.properties
└── test
└── java
└── com
└── invict
└── cash_api
└── cash_api
└── CashApiApplicationTests.java
```


## Prerequisites

Make sure the following are installed on your machine: 
**Java Development Kit (JDK) 21** or later 
**Docker** and **Docker Compose** (if you want to run the database in a container) 
**Maven** (or use the Maven Wrapper `./mvnw` included in the project)


## How to Execute the Project (Getting Started)

### 1. Upload the Database (Docker)
Use Docker Compose to quickly start the relational database:
```bash
docker-compose up -d
```

### 2. Run the Application
You can run the application using the Maven Wrapper (`mvnw`):

On **Linux / macOS**:
```bash
./mvnw spring-boot:run
```

On **Windows (CMD / PowerShell)**:
```cmd
mvnw.cmd spring-boot:run
```


## Authentication (OAuth2)

The API protects its resources using OAuth2 tokens.
- The authentication and token issuance flow is managed by the security endpoints configured in `AuthorizationServerConfig` and `TokenResource`.
- To access protected routes, send the token in the request's HTTP header: 
```http 
Authorization: Bearer <your_access_token> 
```


## Database Migrations (Flyway)

The project automatically manages database schema versioning through Flyway, using the following initial scripts (`src/main/resources/db/migration/`): 
`V01__create_and_register_categories.sql` 
`V02__create_person_table.sql` 
`V03__create_transactions_table.sql` 
`V04__create_and_register_users_and_permissions.sql`


## Contributing

Contributions, issues, and pull requests are welcome! Feel free to open an issue if you find a bug or want to suggest improvements.


## References and Acknowledgments

This source code was based on and structured around lessons from **[Algaworks](https://www.algaworks.com/)** courses; all credit goes to them. To learn more, visit their official GitHub organization: [Algaworks](https://github.com/algaworks).