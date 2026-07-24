## Fluxo Principal

- Usuário informa e-mail
- Sistema verifica se o E-mail está cadastrado
- Caso de erros:
    - Formato de E-mail errado: enviar aviso
    - Email não cadastrado: enviar aviso
- Caso E-mail informado seja válido:
    - Sistema envia código de verificação de 6 digitos pelo E-mail
        - Interface avisa tempo limite de inserção de código e o tempo para pedir outro

- Usuário informa o código recebido.
    - Sistema valida o código.
        - Caso válido:
            - Usuário é autenticado.
            - Redirecionar para tela de InserirNovaSenha.
        - Caso inválido:
         - Solicitar nova tentativa.
            - Aviso de quantas vezes pode pedir o código e aviso de bloqueio de tentativa
            - Caso usuario erre 5 vezes o código o sistema bloqueia tentativas por 30 min
    - Caso o código expire:
        - Permitir solicitar um novo código.
        - Pedir ao usuário requisitar outro código


--------------------------------------------------------------

## Segurança

- Limite de 2 minutos para inserir código de verificação
    - Só pode pedir 1 código por vez a cada 2 min, cada código possui validade de 2 min
- Usuario não pode tentar colocar o código mais de 5 vezes
    - Caso aconteça bloquear tentativas por 30 min
- Codigo é automaticamente inválidado após uso
- Futuramente implementar limitação por IP.

--------------------------------------------------------------

## Mensagens

### Formato de Email invalido

"Não foi possível identificar o E-mail. Por favor, verifique o formato informado"

### Conta inexistente

"Este usuário não está cadastrado."

### Código inválido

Código inválido, por favor, tente novamente

### Código expirado

Código expirado, Por favor solicitar novo código.

### Numero de tentativas excedentes
"Você atingiu o limite de tentativas para redefinir a senha, tente novamente mais tarde"

--------------------------------------------------------------

## Observações

- Após a confirmação do código, ele deve ser invalidado automaticamente.
    - Código de 6 digitos deve ser armazenado em hash no banco
    - O código deverá ser transformado e hash quando enviado no sistema
- Ao cancelar redefinição de senha o código de ver invalidado automaticamente
- Após alteração da senha, todas as sessões devem ser encerradas.
