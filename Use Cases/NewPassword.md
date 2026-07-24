# Inserir Nova Senha

## Fluxo Principal

- Usuário acessa a tela após validar o código de recuperação.
- Sistema verifica se a autorização para redefinição de senha ainda é válida.
    - Caso o tempo tenha expirado:
        - Redirecionar para tela de Login.
        - Informar que será necessário iniciar uma nova recuperação de senha.

- Usuário informa a nova senha.
- Usuário confirma a nova senha.

- Sistema verifica:
    - Se os dois campos são iguais.
    - Se a senha atende aos requisitos mínimos de segurança.

- Caso válido:
    - Sistema gera o hash da nova senha.
    - Sistema atualiza a senha no banco de dados.
    - Sistema invalida todos os códigos de recuperação.
    - Sistema encerra todas as sessões ativas.
    - Sistema invalida o Remember Me.
    - Redireciona para a tela de Login.
    - Exibe mensagem de confirmação por E-mail

- Caso usuário clique em "Cancelar":
    - Cancelar redefinição de senha.
    - Invalidar autorização de redefinição.
    - Redirecionar para a tela de Login.

--------------------------------------------------------------

## Segurança

- Senhas devem ser armazenadas apenas em formato hash.
- Tempo máximo de 15 minutos para definir uma nova senha.
- Requisitos mínimos da senha:
    - Mínimo de 8 caracteres.
    - Pelo menos 1 letra maiúscula.
    - Pelo menos 1 letra minúscula.
    - Pelo menos 1 número.
    - Pelo menos 1 caractere especial.
- Após a alteração da senha:
    - Invalidar todos os códigos de recuperação.
    - Encerrar todas as sessões ativas.
    - Invalidar o Remember Me.
- Futuramente implementar limitação por IP.

--------------------------------------------------------------

## Mensagens

### Senhas diferentes

"As senhas informadas não coincidem."

### Senha inválida

"A senha informada não atende aos requisitos mínimos de segurança."

### Tempo expirado

"O tempo para redefinir a senha expirou. Solicite uma nova recuperação de senha."

### Senha alterada

"Senha alterada com sucesso. Faça login novamente."

--------------------------------------------------------------

## Observações

- O usuário só pode acessar esta tela após validar corretamente o código de recuperação.
- A autorização para redefinir a senha expira após 15 minutos.
- O código de recuperação e a autorização devem ser invalidados após a alteração da senha ou ao cancelar a operação.
- A senha nunca deve ser armazenada em texto puro.