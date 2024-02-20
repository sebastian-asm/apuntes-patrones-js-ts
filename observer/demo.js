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

class ItemsSubject extends Subject {
  constructor() {
    super()
    this.data = []
  }

  add(item) {
    this.data.push(item)
    this.notify(this.data)
  }
}

class ElementObserver {
  constructor(element) {
    this.element = element
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, e) => acc + `<p>${e}</p>`, '')
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

const items = new ItemsSubject()
const div1Obs = new ElementObserver(div1) // referencia directa del id en el html
const div2Obs = new ElementObserver(div2)
const div3Obs = new Observer((data) => (div3.innerHTML = data.length))

items.subscribe(div1Obs)
items.subscribe(div2Obs)
items.subscribe(div3Obs)

btnAdd.addEventListener('click', () => {
  const name = txtName.value
  items.add(name)
})
