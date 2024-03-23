interface ListImplementor {
  elements: number[]
  add(number: number): void
  getElements(): number[]
}

interface DataAbstraction {
  implementor: ListImplementor
  add(number: number): void
  get(): number[]
  operation(fn: (num: number) => number): number[]
}

class OrderedList implements ListImplementor {
  elements: number[] = []

  add(number: number): void {
    this.elements.push(number)
    this.elements.sort()
  }

  getElements(): number[] {
    return this.elements
  }
}

class UniqueList implements ListImplementor {
  elements: number[] = []

  add(number: number): void {
    const existsNumber = this.elements.includes(number)
    if (!existsNumber) this.elements.push(number)
  }

  getElements(): number[] {
    return this.elements
  }
}

class DataRefinedAbstraction implements DataAbstraction {
  implementor: ListImplementor
  constructor(implementor: ListImplementor) {
    this.implementor = implementor
  }

  add(number: number): void {
    this.implementor.add(number)
  }

  get(): number[] {
    return this.implementor.getElements()
  }

  operation(fn: (num: number) => number): number[] {
    return this.implementor.getElements().map(fn)
  }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList())
uniqueData.add(3)
uniqueData.add(3)
uniqueData.add(2)
uniqueData.add(1)
uniqueData.add(2)
console.log(uniqueData.get())

const orderedData = new DataRefinedAbstraction(new OrderedList())
orderedData.add(3)
orderedData.add(1)
orderedData.add(1)
orderedData.add(2)
orderedData.add(3)
console.log(orderedData.get())

const uniqueItems = uniqueData.operation((item: number) => item * 2)
const orderedItems = orderedData.operation((item: number) => item * 2)
console.log(uniqueItems)
console.log(orderedItems)
