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

### Decorator

Patrón de estructura, nos indica como están estructuradas las clases y como se conforman unas con otras. Nos ayuda cuando se tiene que agregar funcionalidad jerarquíca a muchas clases. Se podría decir que funcionan como "envoltorios" para ir agregando más funcionalidades a otras clases.

### Builder

Lo que hace es separar el constructor en un conjunto de métodos encadenados, los cuales se pueden ir invocando según la necesidad de la construcción del objeto. En el contexto de builder, un **Director** (clase que contiene un objeto de tipo builder) es quien ya tiene todos los pasos (como siguiendo los pasos de una receta) listos para aplicar el patrón en un objeto.

### State

Patrón de diseño y de comportamiento, lo que quiere decir que, se mantiene un contexto el cual puede tener un estado establecido, y dependiendo de ese estado tendrá un comportamiento. Se podría decir que es parecido al patrón **Strategy** a diferencia que State puede compartir "conocimiento" entre sus mismas clases, y estas a su vez pueden cambiar el objeto principal.

### Bridge

Patrón de diseño estructural que cumple la función de _puente_, separando la implementación de una clase en diferentes abstracciones, para ir escalando en funcionalidades.
