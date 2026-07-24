## Fluxo Principal

- Usuário acessa a Home após autenticação.
- Sistema exibe uma mensagem de boas-vindas exibindo o nome do usuário
- Usuário pode permanecer na tela.

- Caso usuário clique em "Logout":
    - Sistema encerra a sessão.
    - Remove o Remember Me (caso exista).
    - Redireciona para a tela de Login.

--------------------------------------------------------------

## Segurança

- Apenas usuários autenticados podem acessar esta página.
- Caso a sessão expire:
    - Redirecionar automaticamente para Login.
- Caso o token da sessão seja inválido:
    - Encerrar a sessão.
    - Redirecionar para Login.

--------------------------------------------------------------

## Mensagens

### Boas-vindas

"Welcome,, {Nome do Usuário}!"

### Sessão expirada

"Sua sessão expirou. Faça login novamente."

--------------------------------------------------------------

## Observações

- Só podera ser acessado com token de permissão ao login
- O nome do usuário deve ser obtido da sessão autenticada.
- O Logout deve invalidar a sessão atual.
- Caso exista Remember Me, ele deve ser removido durante o Logout.