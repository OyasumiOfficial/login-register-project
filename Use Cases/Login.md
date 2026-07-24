## Fluxo Principal

- Usuário informa e-mail e senha.
- Caso as credenciais sejam Invalidas:
    - Enviar aviso de conta não existente
    - enviar aviso Login ou Senha invalidos
- Caso as credenciais sejam válidas:
    - Sistema envia código de autenticação de 6 digitos pelo E-mail
      Junto um e-mail informando sobre a tentativa de login.
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
        - Pedir ao usuário requisitar outr código

--------------------------------------------------------------

## Remember Me

- Caso o usuário tenha marcado "Remember Me".
- Sessão permanece válida por 30 dias.
- Enquanto válida, o usuário é enviado diretamente para Home.
- Caso expire ou o navegador seja limpo, o Login é solicitado novamente.

--------------------------------------------------------------

## Segurança

- Máximo de 4 tentativas de senha.
    - Ao primeiro erro;
        - Informar quantas tentativas restam.
- Bloqueio progressivo após 4 erros seguidos:
    - 10 minutos
    - 30 minutos
    - 1 hora
    - 1 hora e 30 minutos
        - Aviso de tempo restante, possibilidade de redefinir senha.
- Recuperação de senha deve permanecer disponível ao usuário
- Limite de 2 minutos para inserir código de verificação
    - Só pode pedir 1 código por vez a cada 2 min
- Futuramente implementar limitação por IP.
- Código de 6 digitos deve ser guardado em hash

--------------------------------------------------------------

## Mensagens

### Usuário ou senha incorretos

"Não foi possível conectar-se. Usuário ou senha incorretos."

### Conta inexistente

"Este usuário não está cadastrado."

### Código inválido

Solicitar nova tentativa.

### Código expirado

Código expirado, Por favor solicitar novo código.

--------------------------------------------------------------

## Observações

- Após a confirmação do código, ele deve ser invalidado automaticamente.
- Apenas um código pode permanecer válido por vez.
    - Ao cancelar o login pelo botão ou ao fechar deve invalidar o código automaticamente
    