/* Escreve uma função chamada ePaisagem que recebe dois 
argumentos, largura e altura de uma imagem(number).
retorne true se a imagem estiver no modo Paisagem. */

function ePaisagem(Largura, Altura){
    return Largura >= Altura ? true : false;
}

console.log(ePaisagem(1920, 1080));