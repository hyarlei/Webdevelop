/* try{
    // É exceutada quando não há erros
    console.log("Abri um arquivo");
    console.log("Manipulei o arquivo e gerou erro");
    console.log("Fechei o arquivo");
}catch(e){
    console.log("Tratando o erro");
    //É executada quando há erros
}   finally{
    console.log("Eu sempre sou executado");
    // Sempre 
} */


function retornHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
    });
}

try{
    const data = new Date("01-01-1970 12: 58: 12");
    const hora = retornHora();
    console.log(hora);
    
}catch(e){
    // console.log(e);
    //Tratar erro
}finally{
    console.log("Tenha um bom dia.");
}
