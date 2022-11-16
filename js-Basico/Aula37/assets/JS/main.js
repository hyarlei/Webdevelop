const paragrafos = document.querySelector(".parágrafos");
const ps = document.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.background.backgroundColorBody;
console.log(backgroundColorBody);

for(let p of ps){
    //backgroundColor
    p.style.backgroundColor = backgroundColorBody;
    ps.styleColor = "#FFFFFF";
}