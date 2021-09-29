### Exercício JS - Validador de CPF

Calculo de validação:

01 - Pegar os 09 primeiros digitos, multiplicar cada um por uma 
sequencia númerica regressiva, primeiramente por uma sequencia de 10 números.

Ex: 705.484.450-52<br>
7 x 10 = 70<br>
0 x  9 =  0<br>
5 x  8 = 40<br>
...

02 - Somar todos os resultados das multiplicações e aplicar na fórmula:
primeiroDigito = 11 - (total % 11);<br>
Obs: Caso o resultado seja maior que 9, considere o digito igual à 0.

03 - Verificação do segundo digito, pegar os 10 digitos, multiplicar cada
um por uma sequencia regressiva de 11 números.<br>
7 x 11 = 77<br>
0 x 10 =  0<br>
5 x  9 = 45<br>
...

04 - Somar todos os resultados e aplicar na fórmula:
segundoDigito = 11 - (total % 11);<br>
Assim como antes, se o número for maior que 9, considere o digito igual à 0.<br>

Mãos a obra.
