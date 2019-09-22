# Backend do desafio OPME

## **Detalhes da Solução**

Diante da implementação feita neste projeto, posso dizer que a minha metodologia de abordagem diante das regras foi a seguinte:

- App construído conforme especificado, com as rotas seguindo exatamente tudo que está definido no desafio, sem adicionar itens que não estavam documentados;
- Para o retorno em cada rota, segui o que estava descrito, neste caso para o retorno no frontend somente das informações necessárias ao invés de retornar tudo que a API do Github retorna, filtrando os dados;
- Utilizei a arquitetura padrão e simples, não criando pastas nem arquivos que não seriam necessários diante da pequena complexidade do sistema;
- Para os testes utilizei o Jest, testando cada rota separadamente, e ainda adicionado o coverage para melhorar na análise dos testes;
- Foi feita a configuração do ESLint junto com o prettier para forçar a estilização e as boas práticas de implemetação.

## Execução

Os passos após ter clonado e baixado todos os arquivos pelo Git são:

- Certifique-se de que tenha o NodeJS instalado;
- Dentro da pasta do projeto, instalar todas as dependencias com: `yarn` ou `npm install` dependendo do gerenciador de pacotes instalados (recomendo o yarn);
- Para inicializar o servidor, basta utilizar o comando `yarn dev`;
- Para realizar os testes, utilizar o comando `yarn test`.
