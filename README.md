# Clean Architecture

### Pontos importantes sobre arquitetura:

- Formato que o software terá.
- Divisão de componentes.
- Comunicação entre componentes.
- Uma boa arquitetura vai facilitar o processo de desenvolvimento deploy, operação e manutenção.

### Objetivos de uma boa arquitetura:

- O objetivo principal da arquitetura é dar suporte ao ciclo de vida do sistema. Uma boa arquitetura torna o sistema fácil de entender, fácil de desenvolver, fácil de manter e fácil de implantar. O objetivo final é otimizar o custo de vida útil do sistema e maximizar a produtividade do programador.

### Regras vs Detalhes:

- Regras de negócio trazem o real valor para o software.
- Detalhes ajudam a suportar as regras.
- Detalhes não devem impactar nas regras de negócio.
- Frameworks, banco de dados, apis, não devem impactar as regras.

### Use Cases:

- Intenção
- Clareza de cada comportamento do software

### Use Cases - SRP

- Temos a tendência de “reaproveitar” use cases por serem muitos parecidos.
- Ex: Alterar vs Inserir. Ambos consultam se o registro existe, persistem dados. Mas, são Use Cases diferentes. Por que?
- SRP (Single Responsibility Principle) ⇒ Mudam por razões diferentes.
- Uses Cases contam uma história.

### Limites arquiteturais:

- Tudo que não impacta diretamente nas regras de negócio deve estar em um limite arquitetura diferente. Ex: não será o frontend, banco de dados que mudarão as regras de negócio da aplicação.

### Input vs Output:

- No final do dia, tudo se resume a um Input que retorna um Output.
- Simplifique seu raciocínio ao criar um software sempre pensando em Input e Output.

### DTO (Data Transfer Object):

- Trafegar dados entre os limites arquiteturais.
- Objeto anêmico, sem comportamento
- Contém dados (Input ou Output)
- Não possui regras de negócio
- Não possui comportamento
- Não faz nada, somente trafega dados.
- API → CONTROLLER → USE CASE → ENTITY
- Controller cria um DTO com os dados recebidos e envia para o Use Case
- Use Case executa seu fluxo, pega o resultado, cria um DTO para output e retorna para o Controller.

### Presenters:

- Objetos de transformação.
- Adequa o DTO de output no formato correto para entregar o resultado
- Lembrando: Um sistema pode ter diversos formatos de entrega: ex: XML, JSON, Protobug, GraphQL, CLI, etc.

### Entities:

- Entities da Clean Architecture ≠ Entities do DDD
- Clean Architecture define entity como camada de regras de negócio.
- Elas se aplicam em qualquer situação.
- Não há definição explicita de como criar as entities.
- Normalmente utilizamos táticas do DDD.
- Entities = Agregados + Domain Services.
