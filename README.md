# Patrones de Diseño en JavaScript y TypeScript

## Introducción

Un patrón de diseño es una _técnica_ que nos ayuda a resolver ciertos problemas, basada en soluciones ya comprobadas. Existen de diferentes tipos como: creacionales, estructurales y de comportamiento.

- **Inmutable**: que no modifica el array original (por ejemplo: .forEach())
- **Mutable**: sí lo modifica (por ejemplo: .sort())

En la programación funcional, existen 2 tipos de funciones:

- **Función de primer orden**: es toda función que puede ser tratada como una variable, donde esa variable puede guardar y ejecutar una función, y puede ser enviada como parámetro a otras funciones

  ```js
  function sum(a, b) {
    return a + b
  }
  let res = sum(2, 2)
  const fSum = sum
  res = fSum(5, 5)
  ```

- **Función de orden superior**: es toda función que puede recibir funciones como parámetros

  ```js
  function operation(fn, a, b) {
    fn(a, b)
  }
  operation(sum, 10, 10)
  ```

## Patrones

### Singleton

Patrón creacional que tiene como proposito que solo exista una instancia de un objeto o clase. Se puede utilizar cuando la persistencia de la información de la clase nunca va a cambiar.

### Strategy

Patrón que nos ayuda a tener diferentes comportamientos en un objeto e ir agregando nuevos comportamientos sin tener que modificar el contexto inicial (que es el objeto central que unifica todo).

### Observer

Patrón de comportamiento. Teniendo un objeto con diferentes estados (propiedades y clases) donde al momento de cambiar algunos de ellos se notifica a un conjunto de "observadores" que están pendiente de realizar alguna tarea en base a ese cambio detectado.
