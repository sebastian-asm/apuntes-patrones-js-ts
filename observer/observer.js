class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer)
  }

  notify(data) {
    this.observers.forEach((o) => o.refresh(data))
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn
  }

  refresh(data) {
    this.fn(data)
  }
}

const input = document.querySelector('#myText')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const subject = new Subject()
const obs1 = new Observer((data) => console.log('Observador 1:', data))
const obs2 = new Observer((data) => (p1.innerHTML = data))
const obs3 = new Observer((data) => (p2.innerHTML = data.split('').reverse().join('')))

subject.subscribe(obs1)
subject.subscribe(obs2)
subject.subscribe(obs3)
input.addEventListener('input', change)

function change(event) {
  subject.notify(event.target.value)
}
