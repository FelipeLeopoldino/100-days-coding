const number = [4, 6, 8, 12, 43, 23]

const frontBeginners = [
  { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35 },
  { name: 'Joãzinho do pastel', age: 32, title: 'PL', test: 56 },
  { name: 'Harry do Potter', age: 80, title: 'SR', test: 90 },
  { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
  { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
  { name: 'Torquato', age: 32, title: 'JR', test: 55 }
]


const titlePl = frontBeginners.filter((person) => person.title == 'PL')
const age = frontBeginners.filter((person) => person.age >= 32).map((item) => item.name).some((name)=> name ==='Joãzinho do pastel')

// console.log(titlePl)
console.log(age)
