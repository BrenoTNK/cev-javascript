/*

    Relacionais (Compara os valores e retorna um boleano: true ou false)

5 > 2   -> true     // Maior;
7 < 4   -> false    // Menor;
8 >= 8  -> true     // Maior ou igual;
9 <= 7  -> false    // Menor ou igual;
5 == 5  -> true     // Igual;
4 != 4  -> false    // Diferente;

5 === '5'   -> false    // Definitivamente igual (valor + tipo);
5 !== '5'   -> true     // Definitvamente diferentes (valor + tipo);

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    Lógicos (Conjunto 'E, OU, NÃO' entre os valores e retorna um boleano: true ou false)

!   // Negação      (Não)
    !true   -> false
    !false  -> true

&&  // Conjunção    (E)
    // Todos deve ser verdadeiros;
    true && true    -> true
    true && false   -> false
    false && true   -> false
    false && false  -> false

||  // Disjunção    (Ou)
    // Apenas um deve ser verdadeiro;
    true || true    -> true
    true || false   -> true
    false || true   -> true
    false || false  -> false

    Ordem de precedência(Lógicos)
    {
        1° !
        2° &&
        3° ||
    }

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    Ternário (Condicionario, é aperecido com if e else em linha)

?   // Quando for true;
:   // Quando for false;

expressão ? true : false

Ex:
    media >= 7.0 ? "Aprovado" : "Reprovado" 

    true    -> "Aprovado"
    false   -> "Reprovado"

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    Ordem de precedência(Geral)
    {
        1° Aritmeticos
        2° Relacionais
        3° Lógicos
    }
*/