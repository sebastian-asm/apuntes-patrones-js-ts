const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net'
  }
]

class UserContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy)
    this.data = data
    this.element = element
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  show() {
    this.strategy.show(this.data, this.element)
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, user) => {
      return (
        acc +
        `
          <div>
            <h4>${user.name}</h4>
          </div>
          <hr />
        `
      )
    }, '')
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, user) => {
      return (
        acc +
        `
          <div>
            <h4>${user.name}</h4>
            <p>${user.username} - ${user.email}</p>
          </div>
          <hr />
        `
      )
    }, '')
  }
}

const strategies = [new ListStrategy(), new DetailedListStrategy()]
const info = new UserContext(new ListStrategy(), users, content)
info.show()

selectOptions.addEventListener('change', ({ target }) => {
  info.setStrategy(strategies[target.value])
  info.show()
})
