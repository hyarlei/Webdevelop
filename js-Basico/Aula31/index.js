const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [PrimiroNumero, SegundoNumero, ...resto] = numeros;
console.log(PrimiroNumero, SegundoNumero);
console.log(resto);