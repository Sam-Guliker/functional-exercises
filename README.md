# functional-exercises :fire:
I will post some of my exercises to manipulate array's.
`This` is thanks to [Mpj](https://github.com/mpj)

## Objectives
I will try to learn a bit more of functional programming.  
First I'll start with looping examples. After that I will try to re-write it using the _higher order functions_

## Higher order functions.
Higher order functions are functions in functions. This is usefull  
to composite functions. For example you can make smaller functions in a bigger function.
:clap::clap:

### Data objects
```Javascript
var animals = [
    { name: 'Fluffyskins', species: 'Rabbit' },
    { name: 'Caro',        species: 'Dog' },
    { name: 'Hamilton',    species: 'Dog' },
    { name: 'Harold',      species: 'Cat' },
    { name: 'Ursula',      species: 'Fish' }
]

var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]
        
```

## Filter
Filter expects true or false.
```Javascript
var dogs = animals.filter(function(animal){
    return animal.species === 'dogs'
})

```

## Map
Takes the array and makes a whole new array with it.

```Javascript
var names = animals.map(function(animal){
    return ` ${animal.name} is a ${animal.species}`
})

```
## Reduce
I find reduce still a bit tricky to use.
It's the :crown: of manipulating arrays and data.

```Javascript
var totalAmount = orders.reduce(function(sum, order){
    return sum + orders.amount
}, 0)
```
### Another Reduce example
this example is made with some ES6. Yes I know I can use const etc.  
I just want to play around with the arrow functions.
```Javascript
var fs = require('fs')
/* Using higher order functions */
var output = fs.readFileSync('data.txt', 'utf8')

    // Trim removes the last space
    .trim()
    // line break
    .split('\n')
    // split the lines on tab characters
    .map(line => line.split('\t'))
    .reduce((costumers, line)=> {
        costumers[line[0]] =  costumers[line[0]] || []
        costumers[line[0]].push({
            name:line[1],
            price: line[2],
            quantity: line[3]
        })
        return costumers
    }, {})
```
## Currying
:curry: is a good metaphore for the explenation.  
:curry: is adding more mixtures to make a nice curry.  
So is currying!:clap:  
Currying is adding arguments by itself and returning a new function. `this ` keeps up going.  
Allright enough theory lets show some code :eyes:

```Javascript 
let dragon =
    name =>
        size =>
            element =>
            name + 'is a' +
            size + ' dragon that breathes' +
            element + '!'
            
let output = dragon('fluffyskins')('tiny')('lightning')

console.log(output)
```
## Recursion
What is recursion :thinking:  
recursion is a function that doesn't stop untill it finds itself again. :shock:  
Exanmple: We are using it for nesting.  You can do this with loops aswell but what if you nest a 100 times?
```
let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach (c => node[c.id] =  makeTree(categories, c.id))

    return node
}

console.log(
    JSON.stringify(
    makeTree(categories, null)
    , null, 2)
)
```
