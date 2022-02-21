function State(){
    this.listSection = null;
}

const state = new State();

export function init(){
    state.listSection = document.querySelector(".db-container-result");
}

export function addCard(address){
  const card = createCard(address);
  state.listSection.appendChild(card);
}

function createCard(address){
   const div = document.createElement("div");
   //div.classList.add('my-style')

   const h2 = document.createElement("h2")
   h2.innerHTML = address.city;

   const p = document.createElement("p")
   p.innerHTML = `${address.street}, ${address.number}`;

   const span = document.createElement("span")
   span.innerHTML = address.cep;

   div.appendChild(h2);
   div.appendChild(p);
   div.appendChild(span);

   return div;

}

