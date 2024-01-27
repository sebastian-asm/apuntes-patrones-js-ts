class SaleContext {
  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  calculate(amount) {
    return this.strategy.calculate(amount)
  }
}

class RegularSalesStrategy {
  constructor(tax) {
    this.tax = tax
  }

  calculate(amount) {
    return amount + amount * this.tax
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax
    this.discount = discount
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount
  }
}

class ForeignSaleStrategy {
  getDollarPrice() {
    return 850
  }

  calculate(amount) {
    return amount * this.getDollarPrice()
  }
}

const regularSale = new RegularSalesStrategy(0.21)
const discountSale = new DiscountSaleStrategy(0.21, 10)
const foreignSale = new ForeignSaleStrategy()

// aplicando diferentes estratégias
const sale = new SaleContext(regularSale)
console.log(sale.calculate(50))
sale.setStrategy(discountSale)
console.log(sale.calculate(50))
sale.setStrategy(foreignSale)
console.log(sale.calculate(10))
