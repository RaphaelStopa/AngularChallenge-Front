# angularChallenge FrontEnd

O Back-End deste projeto de encontra neste repositório:

Quanto ao Front-End não tem muito que se falar. Ele roda como um projeto normal do Angular. Todavia, para facilitar a avalição segue uns adendos:

```
Importante! O opção de cadastro de produtos só aparece se o user logado tiver a autoridade de administrador, pois o contrário não faria sentido!
```

O projeto já vem com dois users cadastrados:
```
Login: user
Senha: user
---
Login: admin
Senha: admin
```
O projeto obviamente respeita, todo q qualquer dado do usuário. Assim, o usuário só poderá ver os dados que a ele pertence.

O token de acesso tem sua data de expiração validada. Se o projeto identifica o token, ele loga automaticamente. Ai clicar em sair o token é excluído

O excedente do desafio, a validação de CEP, é obviamente feita no BackEnd, por questões obvias de segurança.


