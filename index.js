function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      newArray.push(callback(item))
    }
    return newArray
  }

function reduce(array, callback, starting) {
    let item = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1

    for (; i < array.length; i++) {
        item = callback(array[i], item)
    }
    return item 
}
  