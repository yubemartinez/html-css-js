let a = 2;
let b = 30;
let c = 17;

let mayor = 0;
let intermedio = 0;
let menor = 0;

if (a > b && a > c) (

    mayor = a
)

if (b > a && b > c) (

    mayor = b
)

if (c > a && c > b) (

    mayor = c
)

if (a < b && a > c) (

    intermedio = a
)

if (b > a && b > c) (

    intermedio = b
)

if (c > a && c < b) (

    intermedio = c
)

if (a < b && a < c) (

    menor = a
)

if (b < a && b < c) (

    menor = b
)

if (c < a && c < b) (

    menor = c
)
console.log(menor, intermedio, mayor)