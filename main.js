const inputEl = document.querySelector("#senha")
        const maiusculasCheckEl = document.querySelector("#maiusculascheck")
        const numerosCheckEl = document.querySelector("#numeroscheck")
        const caracteresCheckEl = document.querySelector("#caracterescheck")
        const barraSegurancaEl = document.querySelector("#segurancabarra")

        let senhaComp = 16

        function GeradorDeSenha() {

            let chars = "abcdefghijklmnopqrstuvxwyz"

            const MaiusculasChars = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"

            const NumerosChars = "0123456789"

            const CaracteresChars = "!@#$%&()[]?"

            if (maiusculasCheckEl.checked) {
                chars += MaiusculasChars
            }
            if (numerosCheckEl.checked) {
                chars += NumerosChars
            }
            if (caracteresCheckEl.checked) {
                chars += CaracteresChars
            }

            let senha = ""

            for (let i = 0; i < senhaComp; i++) {
                const randomNumber = Math.floor(Math.random() * chars.length)
                senha += chars.substring(randomNumber, randomNumber + 1)
            }

            inputEl.value = senha

            SecurityQuality()
            FontSize()
        }
        
        function SecurityQuality() {

            const percent = Math.round((senhaComp / 64) * 25 + 
            (maiusculasCheckEl.checked ? 15 : 0) + 
            (numerosCheckEl.checked ? 25 : 0) +
            (caracteresCheckEl.checked ? 35 : 0)
            )

            barraSegurancaEl.style.width = `${percent}%`

            if(percent > 70) {
                barraSegurancaEl.classList.remove("critico")
                barraSegurancaEl.classList.remove("perigo")
                barraSegurancaEl.classList.add("deboa")
            } else if(percent > 30) {
                barraSegurancaEl.classList.remove("critico")
                barraSegurancaEl.classList.remove("deboa")
                barraSegurancaEl.classList.add("perigo")

            } else {

                barraSegurancaEl.classList.remove("deboa")
                barraSegurancaEl.classList.remove("perigo")
                barraSegurancaEl.classList.add("critico")
            }

            if (percent >= 100) {
                barraSegurancaEl.classList.add("completa")
            } else {
                barraSegurancaEl.classList.remove("completa")
            }
        }

        function FontSize() { 
            if(senhaComp > 52) {
                inputEl.classList.remove("font-sm")
                inputEl.classList.remove("font-xs")
                inputEl.classList.add("font-xxs")
            } else if (senhaComp > 42) {
                inputEl.classList.remove("font-sm")
                inputEl.classList.remove("font-xs")
                inputEl.classList.add("font-xxs")
            } else if (senhaComp > 32) {
                inputEl.classList.remove("font-sm")
                inputEl.classList.remove("font-xxs")
                inputEl.classList.add("font-xs")
            } else if (senhaComp > 22) {
                inputEl.classList.remove("font-xs")
                inputEl.classList.remove("font-xxs")
                inputEl.classList.add("font-sm")
            } else {
                inputEl.classList.remove("font-xxs")
                inputEl.classList.remove("font-xs")
                inputEl.classList.remove("font-sm")
            }
        }

        function copiar() {
            navigator.clipboard.writeText(inputEl.value)
        }

        const senhaCompEl = document.querySelector("#senhaComp")
        senhaCompEl.addEventListener("input", function () {
            senhaComp = senhaCompEl.value
            document.querySelector("#senha-tamanho").innerText = senhaComp
            GeradorDeSenha()
        })

        maiusculasCheckEl.addEventListener("click", GeradorDeSenha)
        numerosCheckEl.addEventListener("click", GeradorDeSenha)
        caracteresCheckEl.addEventListener("click", GeradorDeSenha)

        const refreshSenha = document.querySelector("#refresh")
        refreshSenha.addEventListener("click", function () {
            senhaComp = senhaComp
            GeradorDeSenha()
        })

        const copiarEl = document.querySelector("#copiarSenha")
        copiarEl.addEventListener("click", copiar)

        const CheckMaiusculas = document.querySelector("#maiusculas")





        GeradorDeSenha()