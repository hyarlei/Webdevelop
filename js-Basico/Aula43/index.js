function soma(x, y){
    if(
        typeof x !== "Number" ||
        typeof y !== "Number"
    ){
        throw new ReferenceError("x e y precisam ser números.");
    }

    return x + y;
}

try{
console.log(soma(1, 2));
console.log(soma("1", 2));
}catch(error){
    // console.log(error);
    console.log("Alguma coisa mais amigável pro usuário.");
}