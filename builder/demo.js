class Form {
  constructor(controls, action) {
    this.controls = controls
    this.action = action
  }

  getContent() {
    return `
      <form method="POST" action="${this.action}">
        ${this.controls.reduce((ac, control) => {
          return (
            ac +
            `
              <div>
                ${this.getLabel(control)}
                ${this.getInput(control)}
              </div>
            `
          )
        }, '')}
        <button type="submit">Enviar</button>
      </form>
    `
  }

  getLabel(control) {
    return `<label>${control.text}: </label>`
  }

  getInput(control) {
    return `<input type="${control.type}" id="${control.name}" name="${control.name}" />`
  }
}

class FormBuilder {
  constructor() {
    this.reset()
  }

  reset() {
    this.controls = []
    this.action = ''
  }

  setAction(action) {
    this.action = action
    return this
  }

  setText(name, text) {
    this.controls.push({ name, text, type: 'text' })
    return this
  }

  setEmail(name, text) {
    this.controls.push({ name, text, type: 'email' })
    return this
  }

  build() {
    const form = new Form(this.controls, this.action)
    this.reset()
    return form
  }
}

// construcción del director
class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder)
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder
  }

  // "receta" para crear un tipo de formulario
  createPeopleForm() {
    this.formBuilder.reset()
    this.formBuilder.setText('firstName', 'Nombre').setText('lastName', 'Apellido')
  }

  createContactForm() {
    this.formBuilder.reset()
    this.formBuilder
      .setText('name', 'Nombre')
      .setText('email', 'Email')
      .setText('message', 'Mensaje')
  }
}

const formBuilder = new FormBuilder()
const formPeople = formBuilder
  .setAction('send.php')
  .setText('firstName', 'Nombre')
  .setText('lastName', 'Apellido')
  .setEmail('email', 'Email')
  .build()

form1.innerHTML = formPeople.getContent()

const formEmail = formBuilder
  .setAction('send.php')
  .setText('name', 'Nombre')
  .setEmail('email', 'Email')
  .build()

form2.innerHTML = formEmail.getContent()

// aplicando el director
const director = new FormDirector(formBuilder)
director.createPeopleForm()
form3.innerHTML = formBuilder.build().getContent()

director.createContactForm()
form4.innerHTML = formBuilder.build().getContent()
