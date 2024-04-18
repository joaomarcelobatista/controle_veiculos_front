# Frontend do Sistema de Controle de Veículos

## 
Desenvolvido por João Marcelo Gomes da Silva Batista, em Março/Abril de 2024, como requisito parcial para aprovação na sprint  **Desenvolvimento Full Stack Básico** da PUC Rio.

## Objetivo e Cenário:
O objetivo do projeto é apresentar um MVP que servirá como base para a solução do problema de controle de usuários autorizados a utilizar um estacionamento privado.

A ideia surgiu a partir de um problema que a minha empresa enfrenta para o controle de veículos autorizados, no entanto, a solução proposta tem aplicabilidade para condomínios, clubes, hospitais ou quaisquer outras instituições públicas ou privadas que possuam suas próprias áreas de estacionamento, tenham a necessidade de controlar o acesso às mesmas e ainda não possuam um sistema informatizado para tal.

Para o desenvolvimento, foi considerado o seguinte cenário:
1) Existe pelo menos um funcionário que realiza o controle de entrada dos veículos.
2) Atualmente o controle é realizado por intermédio de um cartão de estacionamento.
3) O funcionário realiza o controle de forma totalmente visual, simplesmente verificando se o condutor do veículo possui o cartão ou não. 
4) No estacionamento **não existe**, atualmente, nenhum sistema informatizado que possibilite o controle em tempo real por parte do funcionário.

Devido à grande quantidade de veículos, o cenário acima apresenta as seguintes fragilidades de segurança, que o sistema proposto objetiva mitigar:
1) Ingresso de terceiros, utilizando cartão de estacionamento emprestado por usuário autorizado.
2) Ingresso de terceiros, utilizando cartão de estacionamento roubado ou extraviado.
3) Ingresso de ex-funcionários que eventualmente detenham, mesmo que de forma irregular, seu cartão de estacionamento.

Dessa forma, a implementação da solução se dará da seguinte forma:
1) Haverá um funcionário na entrada do estacionamento com acesso ao Sistema de Controle de Veículos.
2) Assim que um veículo chegar, deverá parar na entrada do estacionamento e aguardar a verificação pelo funcionário.
3) O funcionário realizará a consulta no sistema a partir da placa e, caso o veículo esteja autorizado, será permitida a entrada no estacionamento.

Outras considerações:
- O sistema permitirá que o funcionário do estacionamento realize a consulta ao nome do condutor e ao seu setor de trabalho na empresa. Isto possibilitará entrar em contato com o condutor em caso de eventual necessidade, tais como esquecimento de luzes do veículo acesas, pneu vazio, necessidade de remoção do local estacionado, etc...

## Aspectos do desenvolvimento:

O frontend foi desenvolvido como uma Single Aplication, utilizando somente as linguagens HTML, CSS e Javascript.
É realizada a chamada às 4 rotas implementadas na API (GET para consultar todos os veículos, GET para consultar um único veículo pela placa, POST para cadastrar novo veículo e DELETE para remover o cadastro de um veículo)

## Instruções para os usuários:

O Sistema iniciará em uma tela padrão, em que são apresentados 4 botões, correspondentes a cada uma das rotas: "Consultar Placa", "Cadastrar Veículo", "Deletar Registro" e "Exibir Todo o Cadastro".

Ao clicar no botão, o módulo correspondente será exibido. Um novo clique no mesmo botão fará com que o módulo seja ocultado. Essa funcionalidade possibilita que o usuário mantenha aberto(s) apenas o(s) módulos que esteja utilizando.

Por exemplo: o funcionário da entrada do estacionamento, que está conferindo a entrada dos veículos, manterá aberto, usualmente, apenas o módulo "Consultar Placa". No entanto, caso alguma placa digitada por ele retorne como "não autorizada", o funcionário pode abrir o módulo "Exibir Todo o Cadastro", logo abaixo do módulo "Cadastrar Placa", e verificar se ocorreu algum erro (por exemplo, um erro de digitação por ocasião do cadastramento da placa).

Outro exemplo seria para cadastrar um novo veículo e, logo em seguida, verificar se o cadastro foi atualizado.

As possibilidades são múltiplas, uma vez que o usuário pode manter de 0 a 4 módulos abertos simultaneamente.

## Como executar

Basta fazer o download do projeto e abrir o arquivo index.html no browser.

**Atenção:** Para utilizar as funcionalidades da página é necessário que a API esteja em execução. Para executar a API basta seguir as instruções que se encontram no arquivo README.md correspondente.
