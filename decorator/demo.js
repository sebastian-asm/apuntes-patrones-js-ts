class ClientComponent {
  constructor(url) {
    this.url = url
  }

  async getData() {
    const resp = await fetch(this.url)
    const data = await resp.json()
    return data
  }
}

// decorator 1
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent
  }

  async getData() {
    return await this.clientComponent.getData()
  }
}

// decorator 2
class UppercaseDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData()
    const newData = data.map((item) => {
      item.title = item.title.toUpperCase()
      return item
    })
    return newData
  }
}

class HtmlDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData()
    const newData = data.map((item) => {
      item.title = `<strong>${item.title}</strong>`
      item.thumbnailUrl = `<img src="${item.thumbnailUrl}" alt="${item.title}" />`
      return item
    })
    return newData
  }
}

;(async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos'
  const client = new ClientComponent(url)
  // const data = await upperClient.getData()
  // console.log({ data })
  const upperClient = new UppercaseDecorator(client)
  // const data = await upperClient.getData()
  // console.log({ data })
  const htmlClient = new HtmlDecorator(upperClient)
  const data = await htmlClient.getData()
  box1.innerHTML = data.reduce((acc, item) => acc + item.title + item.thumbnailUrl, '')
  // console.log({ data })
  const htmlClient2 = new HtmlDecorator(client)
  const data2 = await htmlClient2.getData()
  box2.innerHTML = data2.reduce((acc, item) => acc + item.title + item.thumbnailUrl, '')
})()
