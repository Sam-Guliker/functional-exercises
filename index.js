var fs = require('fs')
/* Using higher order functions */
var output = fs.readFileSync('data.txt', 'utf8')

    // Trime removes the last space
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

console.log('output',JSON.stringify(output,null,2))
// var animals = [
//     { name: 'Fluffyskins', species: 'Rabbit' },
//     { name: 'Caro',        species: 'Dog' },
//     { name: 'Hamilton',    species: 'Dog' },
//     { name: 'Harold',      species: 'Cat' },
//     { name: 'Ursula',      species: 'Fish' }
// ]

// var orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
// ]

/* Filter */
// Filter verwacht true of false
// var dogs = animals.filter(function(animal){
//     return animal.species === 'dogs'
// })

// var names = []
// for (let i = 0; i < animals.length; i++) {
//     names.push(animals[i].name)
// }

// Map pakt de hele array en gebruikt het.
// var names = animals.map(function(animal){
//     return ` ${animal.name} is a ${animal.species}`
// })

// var totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//     totalAmount += orderis[i].amount
// }

/* Can do alot more of array manipulation */
// var totalAmount = orders.reduce(function(sum, order){
//     return sum + orders.amount
// }, 0)
