function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (let i = 0; i < musicians.length; i++) {
    let string = `${musicians[i]} plays ${instruments[i]}`
    emptyArray.push(string)
  }

  return emptyArray
}


function johnLennonFacts(facts) {
  var newFacts = []
  var num = 0
  while(num < facts.length){
    newFacts.push(`${facts[num]}!!!`)
    num++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
