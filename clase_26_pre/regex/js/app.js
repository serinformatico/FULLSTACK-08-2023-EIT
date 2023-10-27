/*
    CLASES DE CARACTERES:
    .x      La expresión "x" debe existir en alguna parte del valor.
    \.      Indica que el siguiente caracter debe "escaparse".
    \d      Concuerda con un caracter que sea numérico. Es equivalente a [0-9].
    \D      Concuerda con un caracter que NO sea numérico.
    \w      Concuerda con un caracter que sea alfanumérico. Es equivalente a [A-Za-z0-9_].
    \W      Concuerda con un caracter que NO sea alfanumérico.
    \s      Concuerda con un caracter que sea un espacio.
    \S      Concuerda con un caracter que NO sea un espacio.
    \t      Concuerda con un caracter que sea una tabulación.
    \T      Concuerda con un caracter que NO sea una tabulación.
    \n      Concuerda con un caracter que sea un salto de línea.
    \N      Concuerda con un caracter que NO sea un salto de línea.

    GRUPOS Y RANGOS:
    (x)      La expresión debe coincidir con "x".
    x|y      La expresión puede ser "x" o "y".
    [apx]    La expresión puede ser "a", "p" o "x".
    [a-z]    Concuerda con cualquier caracter alfabético entre "a" y "z" (minúscula).
    [A-Z]    Concuerda con cualquier caracter alfabético entre "a" y "z" (mayúscula).
    [0-5]    Concuerda con cualquier caracter númerico entre "0" y "5".

    ASERCIONES:
    ^x      La expresión "x" debe coincidir con el comienzo del valor.
    $x      La expresión "x" debe coincidir con el final del valor.

    CUANTIFICADORES:
    x*      Concuerda 0 o más veces con La expresión "x".
    x+      Concuerda 1 o más veces La expresión "x".
    x?      Halla 0 o 1 vez la expresión "x".
    x{n}    n es un número entero positivo que concuerda con las apariciones de la expresión "x".
    x{n,m}  n y m son números enteros positivos que concuerdan con las apariciones mínimas y
            máximas de la expresión "x".
*/
