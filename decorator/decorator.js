// component
class ProductComponent {
  constructor(name) {
    this.name = name
  }

  getDetail() {
    return `${this.name}`
  }
}

// decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent
  }

  getDetail() {
    return this.productComponent.getDetail()
  }
}

class CommercialInfoProduct extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent)
    this.tradename = tradename
    this.brand = brand
  }

  getDetail() {
    return `${this.tradename} | ${this.brand} | ${super.getDetail()}`
  }
}

class StoreProduct extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent)
    this.price = price
  }

  getDetail() {
    return `${super.getDetail()} | $${this.price}`
  }
}

class HTMLProduct extends ProductDecorator {
  getDetail() {
    return `
      <h2>Información del producto</h2>
      <p>${super.getDetail()}</p>
    `
  }
}

const productComponent = new ProductComponent('Cerveza')
console.log(productComponent.getDetail())

// decorator 1 + component
const commercialInfoProduct = new CommercialInfoProduct(
  productComponent,
  'London Porter',
  'Fullers'
)
console.log(commercialInfoProduct.getDetail())

// decorator 2 + component
const storeProduct = new StoreProduct(productComponent, 123)
console.log(storeProduct.getDetail())

// decorator 2 + decorator 1
const product = new StoreProduct(commercialInfoProduct, 321)
console.log(product.getDetail())

// decorator 3 + decorator 2 + decorator 1
const htmlProduct = new HTMLProduct(product)
content.innerHTML = htmlProduct.getDetail()
