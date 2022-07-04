let sequentialAwait = async () => {
  let result1 = await paused("first")
  nodeJsAssert.equal(result1, "first")
  
  let result2 = await paused("second")
  nodeJsAssert.equal(result2, "second")
}

let f = async () => ()
let f = async (.) => ()
let f = async f => f()
let f = async (a, b) => a + b
let f = async (. a, b) => a + b