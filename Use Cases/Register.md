## Fluxo Principal

- Usuário informa e-mail, username, senha, confirmação de senha
- Caso de erros:
    - Formato de E-mail errado: enviar aviso
    - Caso senhas não sejam iguais: enviar aviso
- Caso os dados informados sejam válidos::
    - Sistema envia código de verificação de 6 digitos pelo E-mail
        - Interface avisa tempo limite de inserção de código e o tempo para pedir outro

- Usuário informa o código recebido.
    - Sistema valida o código.
       - Caso válido:
         - Usuário é autenticado.
         - Redirecionar para Home.
      - Caso inválido:
         - Solicitar nova tentativa.
      - Caso o código expire:
        - Permitir solicitar um novo código.
        - Pedir ao usuário requisitar outro código

--------------------------------------------------------------

## Remember Me

- Caso o usuário tenha marcado "Remember Me".
- Sessão permanece válida por 30 dias.
- Enquanto válida, o usuário é enviado diretamente para Home.
- Caso expire ou o navegador seja limpo, o Login é solicitado novamente.

--------------------------------------------------------------

## Segurança

- Usuário não pode terminar o registro até confirmar o e-mail.
- Senhas devem ser guardadas em formato hash
- Requesitos minimos de senha
    - Ter 8 digitos
    - Ter 1 numero
    - Ter 1 caracter especial
    - Ter 1 caracter maiusculo
    - ter 1 caracter minusculo
- Limite de 2 minutos para inserir código de verificação
    - Só pode pedir 1 código por vez a cada 2 min
- Futuramente implementar limitação por IP.

--------------------------------------------------------------

## Mensagens

### Formato de Email invalido

"NNão foi possível identificar o E-mail. Por favor, verifique o formato informado"

### Erro confirmação de senha

"As senhas devem ser iguais."

### Código inválido

Código inválido, por favor, tente novamente

### Código expirado

Código expirado, Por favor solicitar novo código.

--------------------------------------------------------------

## Observações

- Após a confirmação do código, ele deve ser invalidado automaticamente.
    - Código de 6 digitos deve ser armazenado em hash no banco
    - O código deverá ser transformado e hash quando enviado no sistema
- Ao cancelar registro o código de ver invalidado automaticamente


