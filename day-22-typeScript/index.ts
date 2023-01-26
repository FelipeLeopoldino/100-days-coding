let myChannel: string = 'Front Beginners'
let is20K: boolean = true

myChannel += ' has 20K followers'

console.log(myChannel)

const num: number = 10
const regex: RegExp = /eee/

const array1: string[] = myChannel.split('')
const array2: Array<number | string> = [1, 2, 3, 'a']

interface ExemploProps {
  name: string
  role: string
  isAdmin: boolean
  age?: number
}

const objeto: ExemploProps = {
  name: 'Felipe',
  role: 'developer',
  isAdmin: true,
  age: 32
}

function exemplo({ name, role, isAdmin, age }: ExemploProps) {}

const ids: Record<number, string> = {
  [10]: 'a',
  [20]: '2'
}

ids[30] = 'c'

if (ids[30] === 'asre') {
}

const arrayTeste = [1, 2, 3].map(v => `${v + 1}`)
