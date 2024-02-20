interface TypeObserver<T> {
  refresh: (value: T) => void
}

interface TypeSubject<T> {
  observers: TypeObserver<T>[]
  subscribe: (observer: TypeObserver<T>) => void
  unsubscribe: (observer: TypeObserver<T>) => void
  notify: (value: T) => void
}

class Subject<T> implements TypeSubject<T> {
  observers: TypeObserver<T>[]
  constructor() {
    this.observers = []
  }

  subscribe(observer: TypeObserver<T>) {
    this.observers.push(observer)
  }

  unsubscribe(observer: TypeObserver<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  notify(value: T) {
    this.observers.forEach((e) => e.refresh(value))
  }
}

class Observer<T> implements TypeObserver<T> {
  private fn: (value: T) => void
  constructor(fn: (value: T) => void) {
    this.fn = fn
  }

  refresh(value: T): void {
    this.fn(value)
  }
}

const subject = new Subject<number>()
const obs1 = new Observer<number>((n) => console.log(n))
const obs2 = new Observer<number>((n) => console.log('->', n))

subject.subscribe(obs1)
subject.subscribe(obs2)
subject.notify(10)
subject.notify(20)

const subject2 = new Subject<string>()
const obs3 = new Observer<string>((s) => console.log(s.toUpperCase()))
const obs4 = new Observer<string>((s) => console.log(s.toLowerCase()))

subject2.subscribe(obs3)
subject2.subscribe(obs4)
subject2.notify('Belu')
