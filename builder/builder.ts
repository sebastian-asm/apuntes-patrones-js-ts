interface PersonBuilder {
  name: string
  lastName: string
  age: number
  country: string
  city: string
  hobbies: string[]
  setName(name: string): PersonBuilder
  setLastName(lastName: string): PersonBuilder
  setAge(age: number): PersonBuilder
  setCountry(country: string): PersonBuilder
  setCity(city: string): PersonBuilder
  addHobby(hobby: string): PersonBuilder
  build(): Person
}

class Person {
  private name: string
  private lastName: string
  private age: number
  private country: string
  private city: string
  private hobbies: string[]

  constructor(
    name: string,
    lastName: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.hobbies = hobbies
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`
  }
}

class NormalPersonBuilder implements PersonBuilder {
  name: string
  lastName: string
  age: number
  country: string
  city: string
  hobbies: string[]

  constructor() {
    this.name = ''
    this.lastName = ''
    this.age = 0
    this.country = ''
    this.city = ''
    this.hobbies = []
  }

  reset(): void {
    this.name = ''
    this.lastName = ''
    this.age = 0
    this.country = ''
    this.city = ''
    this.hobbies = []
  }

  setName(name: string): PersonBuilder {
    this.name = name
    return this
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName
    return this
  }

  setAge(age: number): PersonBuilder {
    this.age = age
    return this
  }

  setCountry(country: string): PersonBuilder {
    this.country = country
    return this
  }

  setCity(city: string): PersonBuilder {
    this.city = city
    return this
  }

  addHobby(hobby: string): PersonBuilder {
    this.hobbies.push(hobby)
    return this
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    )
    this.reset()
    return person
  }
}

class PersonDirector {
  private personBuilder: PersonBuilder
  constructor(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder
  }

  setPersonBuilder(personBuilder: PersonBuilder) {
    this.personBuilder = personBuilder
  }

  createSimplePerson(name: string, lastName: string) {
    this.personBuilder.setName(name).setLastName(lastName)
  }
}

const personBuilder = new NormalPersonBuilder()
const person = personBuilder.setName('Belu').build()
const person2 = personBuilder.setName('Seba').addHobby('Musica').build()
console.log({ person, person2 })

// creación con director
const personDirector = new PersonDirector(personBuilder)
personDirector.createSimplePerson('Seba', 'Sanchez')
const person3 = personBuilder.build()
console.log({ person3 })
