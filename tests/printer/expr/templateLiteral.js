let y = `In winter the sky is never blue`
let x = `firstname: ${user.firstName} lastname: ${user.lastName}.`
let z = `${user.name} is his name`
let o = `His name is ${user.name}`

let s = `multi
  line

string
`

let s = `${foo}`

let s = `before${foo}`
let s = `before ${foo}`
let s = `before  ${foo}`

let s = `${foo}after`
let s = `${foo} after`
let s = `${foo}  after`

let s = `${foo}${bar}`
let s = `${foo}${bar}${baz}`

let s = `${foo} ${bar}`
let s = `${foo} ${bar} ${baz}`

let s = ` before ${foo} ${bar} after `
let s = `before ${foo} middle ${bar} ${baz} wow `

let s = `
  multiline

  es6

  template

  expression

  so convenient

  :)
          :D
`

let s = `$dollar without $braces $interpolation`

// don't sugar to one single template literal, keep the concatenation
`the sky` ++ `is blue`

`my ${language.name} is ` ++ `Bond, ${jamesbond.firstName}.`
`my ${language.name} is ` ++ `${jamesbond.lastName}. James Bond.`
(`my ${language.name} is ` ++ `Bond, ${jamesbond.firstName}.`)->Js.log
(`my ${name} is ` ++ `Bond`)->Js.log
`my ${kitchen.quality} kitched` ++ ` is ${language.big} ` ++ ` of the ${kitchen.things}.` 
json`null`->Js.log
a ++ ` x ` ++ b
a ++ (` x ` ++ b)

let x = json`null`

let x =  sql`select ${column} from ${table}`
