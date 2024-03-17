interface Component {
  getDetail(): string
}

class ProductComponent implements Component {
  protected name: string
  constructor(name: string) {
    this.name = name
  }

  public getDetail(): string {
    return `${this.name}`
  }
}

// no se crean instancia directa de esta clase
abstract class ProductDecorator implements Component {
  protected component: Component
  constructor(component: Component) {
    this.component = component
  }

  getDetail(): string {
    return this.component.getDetail()
  }
}

// decorator 1
class ComercialProductorDecorator extends ProductDecorator {
  private tradename: string
  private brand: string
  constructor(component: Component, tradename: string, brand: string) {
    super(component)
    this.tradename = tradename
    this.brand = brand
  }

  getDetail(): string {
    return `${this.tradename}, ${this.brand} | ${super.getDetail()}`
  }
}

class StoreProductDecorator extends ProductDecorator {
  private price: number
  constructor(component: Component, price: number) {
    super(component)
    this.price = price
  }

  getDetail(): string {
    return `${super.getDetail()} $${this.price}`
  }
}

class HtmlProductDecorator extends ProductDecorator {
  getDetail(): string {
    return `
      <h1>Información del producto</h1>
      <p>${super.getDetail()}</p>}
    `
  }
}

// component
const product = new ProductComponent('Cerveza')
console.log(product.getDetail())

// decorator 1 + component
const comercialProduct = new ComercialProductorDecorator(product, 'London Porter', "Fuller's")
console.log(comercialProduct.getDetail())

// decorator 2 + component
const storeProduct = new StoreProductDecorator(product, 123)
console.log(storeProduct.getDetail())

// decorator 2 + decorator 1
const storeProduct2 = new StoreProductDecorator(comercialProduct, 321)
console.log(storeProduct2.getDetail())

// decorator 3 + decorator 2 + decorator 1
const htmlProduct = new HtmlProductDecorator(storeProduct2)
console.log(htmlProduct.getDetail())
