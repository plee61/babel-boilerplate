//Rest parameter challenge
const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    console.log(`player: ${players.join(',')}`)
}
printTeam('Tiger','Alan','Joseph','May')
//Spread 
let cities = ['Sydney', 'Hobart', 'Melbourne']
cities = [...cities, 'Canberra']
//spread object
const person = {
    name: 'Hannah',
    age: 46
}
const location = {
    city: 'Sydney',
    country: 'Australia'
}
const overview = {
    ...person,
    ...location
}
console.log(overview)