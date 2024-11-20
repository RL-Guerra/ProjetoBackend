### Relatório de Documentação de Software: Sistema de Gerenciamento de Livraria - Bookstore  

---  

## 1. **Introdução**  

### 1.1 **Visão Geral**  
Este documento apresenta a documentação do sistema de gerenciamento de uma livraria, desenvolvido com base no padrão de arquitetura MVC (Model-View-Controller). O sistema tem como principais funcionalidades a autenticação de usuários, o cadastro, consulta e gerenciamento de livros, com foco em organização modular e validações eficientes.  

### 1.2 **Objetivo do Sistema**  
O sistema busca oferecer um meio seguro e eficiente para gerenciar o catálogo de livros e autenticar usuários. Ele foi projetado para atender às necessidades de livrarias, garantindo a integridade dos dados inseridos e promovendo uma experiência de uso confiável.  

### 1.3 **Escopo**  
O sistema possui as seguintes funcionalidades:  
- Registro e autenticação de usuários com validação de dados.  
- Cadastro, consulta, atualização e exclusão de livros (CRUD completo).  
- Busca por livros com filtros por título e autor.  
- Organização modular para facilitar manutenção e escalabilidade.  

---  

## 2. **Arquitetura do Sistema**  

### 2.1 **Padrão de Arquitetura**  
O sistema utiliza o padrão de arquitetura **MVC (Model-View-Controller)**, que organiza o código em camadas distintas:  
- **Model**: Responsável pela lógica de negócios e pela comunicação com o banco de dados.  
- **View**: Gerencia a interface com o usuário e apresenta os dados de forma estruturada.  
- **Controller**: Atua como intermediário entre o **Model** e a **View**, processando as requisições e coordenando as respostas.  

### 2.2 **Estrutura Modular**  
O sistema é dividido em módulos para garantir organização e facilidade de manutenção. As validações de entrada são centralizadas em uma camada de **helpers**, promovendo consistência e reutilização de lógica.  

---  

## 3. **Funcionalidades do Sistema**  

### 3.1 **Autenticação de Usuários**  
- Registro de novos usuários com validação de nome, email e senha.  
- Login de usuários registrados, com verificação de credenciais.  
- Geração de token de autenticação para garantir acesso seguro às funcionalidades.  

### 3.2 **Gerenciamento de Livros**  
- **Cadastro**: Inclusão de livros com validação de campos obrigatórios (título, autor e preço).  
- **Consulta**: Busca de livros com opções para listar todos ou filtrar por título e autor.  
- **Atualização**: Alteração dos dados de livros existentes, como título, autor ou preço.  
- **Exclusão**: Remoção de livros do catálogo com confirmação para evitar exclusões acidentais.  

---  

## 4. **Validações Implementadas**  

### 4.1 **Objetivo das Validações**  
As validações foram implementadas para garantir a integridade e consistência dos dados inseridos no sistema. Todas as entradas de dados de usuários e livros são verificadas para atender aos requisitos predefinidos.  

### 4.2 **Principais Validações**  
1. **Validação de Usuários**  
   - O nome deve conter apenas letras e espaços, com um mínimo de três caracteres.  
   - O email deve seguir o formato padrão, garantindo autenticidade.  
   - A senha deve ser forte, contendo no mínimo oito caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.  

2. **Validação de Livros**  
   - O título deve possuir no mínimo três caracteres.  
   - O autor deve ter um nome válido.  
   - O preço deve ser maior que zero.  

---  

## 5. **Requisitos do Sistema**  

### 5.1 **Requisitos Funcionais**  
- **RF001**: O sistema deve permitir o registro de novos usuários com validação de dados.  
- **RF002**: O sistema deve permitir login de usuários registrados com geração de token de autenticação.  
- **RF003**: O sistema deve validar os dados de entrada durante o registro de usuários e o cadastro de livros.  
- **RF004**: O sistema deve permitir o cadastro de livros com título, autor e preço.  
- **RF005**: O sistema deve permitir a consulta de livros com opções de busca por título ou autor.  
- **RF006**: O sistema deve permitir a atualização de dados de livros existentes.  
- **RF007**: O sistema deve permitir a exclusão de livros do catálogo.  

### 5.2 **Requisitos Não Funcionais**  
- **RNF001**: O sistema deve garantir a segurança das senhas armazenadas por meio de criptografia.  
- **RNF002**: O sistema deve utilizar tokens seguros (JWT) para autenticação de usuários.  
- **RNF003**: O sistema deve seguir as melhores práticas de proteção de dados, garantindo conformidade com a LGPD.  
- **RNF004**: O sistema deve ser capaz de atender até 50 requisições simultâneas sem degradação perceptível.  
- **RNF005**: Mensagens de erro claras devem ser exibidas para entradas inválidas, garantindo boa usabilidade.  

---  

## 6. **Análise de Riscos**  

### 6.1 **Riscos Técnicos**  
- **RT001**: **Validação Insuficiente**  
  Risco: Dados inválidos podem comprometer a integridade do banco de dados.  
  Mitigação: Implementação de validações robustas e testes automatizados.  

- **RT002**: **Ataques de Segurança**  
  Risco: Falhas na autenticação podem expor dados sensíveis.  
  Mitigação: Utilização de criptografia para senhas e tokens seguros para autenticação.  

### 6.2 **Riscos de Negócio**  
- **RN001**: **Dificuldade de Uso**  
  Risco: Usuários podem abandonar o sistema se encontrarem dificuldades na interface.  
  Mitigação: Realizar testes de usabilidade e coletar feedback para melhorias contínuas.  

---  

## 7. **Conclusão**  
O sistema de gerenciamento de livraria foi desenvolvido com foco em segurança, validação de dados e organização modular. Ao utilizar o padrão MVC, o projeto garante manutenibilidade e escalabilidade, servindo como uma base sólida para futuras melhorias. As funcionalidades CRUD, validações centralizadas e arquitetura bem estruturada tornam o sistema confiável e eficiente, alinhado às melhores práticas de desenvolvimento.  

---  