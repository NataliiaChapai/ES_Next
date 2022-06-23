const two = 2;
const three = 3;
const four = 4;
const five = 5;
const ten = 10;

const getMaxEvenElement = array => {
    let newArray = array.reduce((acc, element) => {
        if (element % two === 0) {
            acc = [...acc, element]
          return acc;
        } 
        return acc;
    }, [])
    return Math.max(...newArray)
}

console.log(getMaxEvenElement([1, two, three, four, five]));
console.log(getMaxEvenElement([1, two, three, four, five, ten]));

{
    let a = 3;
    let b = 5;
    [a, b] = [b, a];
   
    console.log(a);
    console.log(b);    
}

const getValue = value => value ?? '-';

console.log(getValue(0));
console.log(getValue(four));
console.log(getValue(ten));
console.log(getValue('someText'));
console.log(getValue(null));
console.log(getValue(undefined));

const getObjectFromArrays = arrays => Object.fromEntries(arrays);

console.log(getObjectFromArrays([['name', 'dan'], ['age', '21'], ['city', 'lviv']]));
console.log(getObjectFromArrays([['name', 'ann'], ['age', '15'], ['city', 'kyiv']]));

const addUniqueId = obj => {
    const newProperty = {id: Symbol()};
    return {...obj, ...newProperty};
}

console.log(addUniqueId({name: 'nick'}));
console.log(Object.keys({name: 'nick'}).includes('id'));

const getRegroupedObject = obj => {
    const {name: firstName, details} = obj;
    const {age, id, university} = details;
    return {university, user: {age, firstName, id }}
}

console.log(getRegroupedObject({name: 'willow', details: {
    id: 1, age: 47, university: 'LNU'}}));
console.log(getRegroupedObject({name: 'mila', details: {
    id: 2, age: 32, university: 'KNU'}}));

const getArrayWithUniqueElements = array => {
    const arrayWithUniqueElements = new Set(array);
    return Array.of(...arrayWithUniqueElements);
}

console.log(getArrayWithUniqueElements([two, three, four, two, four, 'a', 'c', 'a']));

const hideNumber = number => number.slice(-four).padStart(ten, '*');

console.log(hideNumber('0123456789'));
console.log(hideNumber('9876543210'));

const add = (a, b) => {
    
    if (!a && !b) {
        throw new Error('a and b are required')
    }
    if (!b) {
        throw new Error('b is required')
    }
    
    return a + b;
}

function* generateIterableSequence() {
    yield 'I';
    yield 'love';
    yield 'EPAM';
}
  
  const generatorObj = generateIterableSequence();
  for (let value of generatorObj) {
    console.log(value);
  }