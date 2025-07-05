
/* Acoordion List: é uma lista de itens empilhada verticalmente,
que ao ser clicada, revela ou oculta um conteudo associado a cada elemento
desta lista. */

/* Usa-se o evento de click em cada item que vai
ser relacionado ao seu conteudo. */

export default function initAccordion() {
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");
        accordionList[0].classList.toggle('ativo');
        accordionList[0].nextElementSibling.classList.toggle('ativo')
    
      /*   Passando dois eventos de uma vez so */
        accordionList.forEach(itemDt => {
        ["click", "mouseenter"].forEach(itemEvent =>{
            itemDt.addEventListener(itemEvent, accordion)
        })
        
        /* itemDt.addEventListener("mousemove", ()=>itemDt.style.cursor = "pointer")
        itemDt.addEventListener("click", accordion) */
        
    })
    

    function accordion () {
        this.style.cursor = "pointer"
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo')
        //Metodo nextElementSibling: retorna o conteudo hatml do proximo irmão
    }
}