function State () {
  this.cep = null;
  this.street = null;
  this.number = null;
  this.city = null;

  this.btnSave = null;
  this.btnClear = null;

  this.errorCep = null;
  this.errorNumber = null;

}

const state = new State();

export function init(){
    state.cep = document.forms.form.cep;
    state.street = document.forms.form.street;
    state.number = document.forms.form.number;
    state.city = document.forms.form.city;
    state.btnSave = document.forms.form.btnSave;
    state.btnClear = document.forms.form.btnClear;
    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');
    console.log(state)
}