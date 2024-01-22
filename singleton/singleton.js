class Singleton {
  constructor() {
    console.log('entrando a constructor')
    if (Singleton.instance) {
      console.log('ya existe')
      return Singleton.instance
    }
    // en caso de nos existir la instancia se le asigna un objecto de si mismo
    console.log('no existe y se crea')
    Singleton.instance = this
  }
}

const singleton = new Singleton()
const singleton2 = new Singleton()

// ** demo **
class WeekDays {
  daysEs = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
  daysEn = ['monday', 'tuesday', 'thursday', 'friday', 'saturday', 'sunday', 'domingo']

  constructor(lang) {
    this.lang = lang
    if (WeekDays.instance) return WeekDays.instance
    WeekDays.instance = this
  }

  getDays() {
    return this.lang === 'es' ? this.daysEs : this.daysEn
  }
}

const weekDays = new WeekDays('es')
const weekDays2 = new WeekDays()
console.log(weekDays.getDays())
console.log(weekDays2.getDays())
