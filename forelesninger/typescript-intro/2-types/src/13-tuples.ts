//region Problem
const useState1 = <T>(initialValue: T) => {
  let value = initialValue
  const setValue = (newValue: T) => {
    value = newValue
  }

  return [value, setValue]
}

const [value1, setValue1] = useState1('Old-Name')

value1.split('-')
setValue1('New-Name')
//endregion

//region Solution
export const useState = <T>(initialValue: T): [T, (newValue: T) => void] => {
  let value = initialValue
  const setValue = (newValue: T) => {
    value = newValue
  }

  return [value, setValue]
}

const [value, setValue] = useState('Old-Name')

value.split('-')
value('New-Name')
setValue('New-Name')
setValue.split('-')
//endregion
