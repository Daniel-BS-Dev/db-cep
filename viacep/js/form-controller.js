import Address from './models.js'

// funções construtura
function State () {

  this.address = new Address();

  this.cep = null;
  this.street = null;
  this.number = null;
  this.city = null;

  this.btnSave = null;
  this.btnClear = null;

  this.errorCep = null;
  this.errorNumber = null;

}

// instaciando
const state = new State();

// atribuindo valor
export function init(){
    state.cep = document.forms.form.cep;
    state.street = document.forms.form.street;
    state.number = document.forms.form.number;
    state.city = document.forms.form.city;
    state.btnSave = document.forms.form.btnSave;
    state.btnClear = document.forms.form.btnClear;
    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    state.number.addEventListener('change', handleNumberChange);
    state.btnClear.addEventListener('click', handleClearValue);

}

// mensagem de error
function handleNumberChange(event){
    if(event.target.value == ''){
        checkIsEmpty('number', 'Campo requerido');
    }else{
        checkIsEmpty('number','');
    }
}

function checkIsEmpty(key, value){
    const element = document.querySelector(`[data-error=${key}]`);
    element.innerHTML = value;
}

// limpando o campo
function handleClearValue(event){
    event.preventDefault();
    formClear();
}

function formClear(){
    state.cep.value = '';
    state.city.value = '';
    state.street.value = '';
    state.number.value = '';

    checkIsEmpty('cep', '');
    checkIsEmpty('number', '');

    state.cep.focus();
}