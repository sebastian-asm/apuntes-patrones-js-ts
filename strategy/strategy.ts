interface Strategy {
  login(user: string, password: string): boolean
}

class LoginContext {
  private strategy: Strategy
  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password)
  }
}

class LoginStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Realizando login...')
    return user === 'admin' && password === '123' ? true : false
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Realizando login vía Google...')
    return user === 'admin' && password === '123' ? true : false
  }
}

const auth = new LoginContext(new LoginStrategy())
const response = auth.login('admin', '123')
console.log({ response })
auth.setStrategy(new LoginGoogleStrategy())
const googleResponse = auth.login('admin', '123')
console.log({ googleResponse })
