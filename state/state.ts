interface State {
  next(ticket: Ticket): number | null
  add(ticket: Ticket, quantity: number): void
}

class Ticket {
  private state: State
  private number: number
  public quantity: number
  public readonly limit: number

  constructor(limit: number) {
    this.limit = limit
    this.quantity = 0
    this.number = 0
    this.state = new EmptyState()
  }

  get getNumber(): number {
    return this.number++
  }

  set setState(state: State) {
    this.state = state
  }

  get getState() {
    return this.state
  }

  next(): number | null {
    return this.state.next(this)
  }

  add(quantity: number): void {
    this.state.add(this, quantity)
  }
}

class EmptyState implements State {
  next(ticket: Ticket): number | null {
    return null
  }

  add(ticket: Ticket, quantity: number): void {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity
      ticket.setState = new WithDataState()
    } else if (quantity === ticket.limit) {
      ticket.quantity = quantity
      ticket.setState = new FullState()
    }
  }
}

class WithDataState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--
    if (ticket.quantity <= 0) ticket.setState = new EmptyState()
    return ticket.getNumber
  }

  add(ticket: Ticket, quantity: number): void {
    if (quantity + ticket.quantity < ticket.limit) {
      ticket.quantity += quantity
    } else if (quantity + ticket.quantity === ticket.limit) {
      ticket.quantity += quantity
      ticket.setState = new FullState()
    }
  }
}

class FullState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--
    if (ticket.quantity <= 0) ticket.setState = new EmptyState()
    else ticket.setState = new WithDataState()
    return ticket.getNumber
  }

  add(): void {
    console.log('Ticket lleno')
  }
}

const ticket = new Ticket(5)
console.log(ticket.getState)
console.log(ticket.next())
ticket.add(6)
console.log(ticket.getState)
console.log(ticket.next())
ticket.add(4)
console.log(ticket.getState)
console.log(ticket.next())
console.log(ticket.next())
ticket.add(3)
console.log(ticket.getState)
ticket.add(1)
console.log(ticket.next())
console.log(ticket.getState)
console.log(ticket.next())
console.log(ticket.next())
console.log(ticket.next())
console.log(ticket.next())
console.log(ticket.getState)
console.log(ticket.next())
