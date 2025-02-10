// Дан массив чисел. Создайте новый массив, где каждое число будет удвоено.
 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((item) =>{
    multiplyArray = item * 2
    console.log(multiplyArray);
    
})



// Дан массив имён. Создайте новый массив, где каждое имя будет начинаться с заглавной буквы.
const names = ['alice', 'bob', 'charlie'];


names.forEach( (item) =>{
    newNames = item.charAt(0).toLocaleUpperCase().concat(item)
    // newNames = item.toUpperCase() 
    console.log(newNames);
    
})


// Из массива чисел оставьте только чётные.
// const numbers01 = [1, 2, 3, 4, 5, 6];
// let even = numbers01.filter((etem)=>{
//     if(etem%2===0){
//         return even
//     }

// })

const numbers3 = [5, 3, 8, 1,10,20];
// Найдите первое число больше 10 в массиве.
const newNunber=numbers3.some((item)=>{
    if(item===10){
        return item
    }
})
console.log(newNunber);







// Найдите индекс первой строки, которая начинается с буквы a.
const words = ['banana', 'apple', 'cherry', 'avocado'];
const IndexWords=words.indexOf('a')
console.log(IndexWords);


// Проверьте, есть ли в массиве хотя бы одно отрицательное число.
// const numbers = [3, -1, 7, 4];


// Отсортируйте массив чисел по возрастанию.
const numbers4 = [5, 3, 8, 1];
const sortArray=numbers4.sort((a,b)=>{
    return a-b
})
console.log(numbers4);


// Найдите сумму всех чисел в массиве.
const numbers5 = [1, 2, 3, 4, 5];

const sumArray=numbers5.reduce((sum, num)=>sum+num,0)
console.log(sumArray);


// Посчитайте, сколько раз буква a встречается в массиве строк.
// const words = ['apple', 'banana', 'avocado'];



let myObj ={
    a:1,
    b:2,
    c:{
        a: 0,
        b: 10,
    },
    d:4,
    n:[1,2,3]
}
const{
    d: nyName = 0,
    ...tail
}=myObj||{};

// console.log(myObj);


let a, b;
({a, b }= myObj)

console.log(myObj);
