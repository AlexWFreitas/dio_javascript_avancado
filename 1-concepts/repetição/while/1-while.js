/**
 
while (condicao)
    declaracao
 
 */

 var n = 0;
 var x = 0;

 while (n < 3) {
     n++; // Aumenta a cada repetição para chegar na condição de saída e evitar um loop infinito.
     x += n;        // 1, 3, 6
 }

 console.log(x);