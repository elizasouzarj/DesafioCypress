Feature: Validar Login com sucesso

Given que eu estou na tela de "login"
When  preencho os dados válidos de "login"
Then o sistema realiza o login com sucesso. 

Feature: Validar Busca Ordenação de item

Given que eu estou na aba de pesquisa 
Whendo realizo uma busca de ordem de maior para o menor
And seleciono o item de acordo com a ordem
Then  o sistema realiza a pesquisa com ordenação de menor para o maior.

Feature:Validar Adicionar item no carrinho

Given Após realizar a pesquisa do maior para o menor 
When eu adiciono um dos itens e clico em adicionar ao carrinho
Then o item é adicionado com sucesso no carrinho 