function criaCalculadora() {
    return {
        display: document.querySelector(".display"),

        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.PressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
              }
            });
          },

        PressionaEnter(){
            this.display.addEventListener("Keyup", e => {
                if(e.keyCode === 13){
                    this.RealizaConta();
                }
            });
        },

        RealizaConta() {
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert("Conta Inválida!");
                    return;
                }

                this.display.value = String(conta);
            } catch(e){
                alert("Conta Inválida!");
                return;
            }
        },

        clearDisplay() {
            this.display.value = "";
        },

        ApagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener("Click", e => {
                const el = e.target;
                console.log(this);

                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")) {
                    this.ApagaUm();
                }

                if (el.classList.contains("btn-eq")) {
                    this.RealizaConta();
                }

                // this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const Calculadora = criaCalculadora();
Calculadora.inicia();