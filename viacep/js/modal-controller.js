function State(){
    this.container = null;
    this.btnClose = null;
    this.openModal = null;
}

const state = new State();

export function init(){
    state.container = document.querySelector('.db-modal');
    state.btnClose = document.querySelector('.modal-close');
    state.openModal = document.querySelector('.db-contact')
    
    state.btnClose.addEventListener('click', closeOnClickModal);
    state.openModal.addEventListener('click', showModal);
    state.container.addEventListener('click', closeModalOnClickContainer);
}

function showModal(){
    state.container.classList.remove('active');
}

function closeModal(){
    state.container.classList.add('active');
}

function closeOnClickModal(event){
    event.preventDefault();
    closeModal();
}

function  closeModalOnClickContainer(event){
    if(event.target === this){
        closeModal();
    }
}