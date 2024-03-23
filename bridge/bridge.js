class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder
  }

  encode(str) {
    return this.encoder.encode(str)
  }

  decode(str) {
    return this.encoder.decode(str)
  }
}

class Base64EncoderImplementor {
  encode(str) {
    return btoa(decodeURI(encodeURIComponent(str)))
  }

  decode(str) {
    return decodeURIComponent(decodeURI(atob(str)))
  }
}

class HtmlEncoderImplementor {
  // separando en párrafos por cada .
  encode(str) {
    return str.split('.').reduce((ac, element) => {
      return ac + `<p>${element.trim()}</p>`
    }, '')
  }

  decode(str) {
    return str.split('</p>').reduce((ac, element) => {
      return element !== '' ? ac + element.replace('<p>', '') + '. ' : ac + ''
    }, '')
  }
}

const encoder = new EncoderTextAbstraction(new Base64EncoderImplementor())
console.log(encoder.encode('belu'))
console.log(encoder.decode('YmVsdQ=='))

const encoder2 = new EncoderTextAbstraction(new HtmlEncoderImplementor())
console.log(encoder2.encode('Mensaje. de. prueba'))
console.log(encoder2.decode('<p>Mensaje</p><p>de</p><p>prueba</p>'))
