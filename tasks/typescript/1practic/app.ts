//1
let ssquare : number = 4;
let psquare : number;
psquare = Math.sqrt(ssquare) * 4;
console.log(psquare);
//2
let a : number = 8,b : number = 23, c : number = 9;

if (a == b&& a == c && b == c) {
    console.log("равносторонний")
} else if (a == b || b == c||a == c) {
    console.log("равнобедренный")
} else {
    console.log("разносторонний")
}

//3
if (a + b >c && a + c > b && b + c > a) {
    console.log("можно")
} else {
    console.log("нельзя")
}
//4
let age:number = 12;

if (age<=17) {
    console.log("молодой")
} else if (age> 17 && age < 69) {
    console.log("взрослый")
} else {
    console.log("пожилой")
}
//5
for(let i:number = 10; i < 20; i++){
    console.log(i * i);
}
//6
let sum : number = 0, count : number = 0;
for (let i:number = 1; count < 20; i++){
    if (i %5 == 0){
        sum += i;
        count++
    }
}
console.log(sum,count);
//7
let n:number=20, x:number = 0, y:number =1, temp:number;
for (let i:number = 2; i < n; i++ ){
temp = x + y;
console.log(temp);
x = y;
y = temp
}
//8
function NOD (a:number,b:number):number{
    while(a != b){
        if(a > b){
            a = a - b;
        } else{
            b = b - a;
        }
    }

    return a;
}
console.log(NOD(24,18))
//9

let sent:string = 'тут был шаг ldf nhb',sentArr:string[];

console.log(sent.split(" ")[sent.split(" ").length - 1])
//10

let arr:number[] = [-1 , 13, -123, 2, 4, 6]
sum = 0;
arr.forEach(function (item){
    if (item > 0) sum += item; 
})
console.log(`сумма положительных чисел массива равна: ${sum}`);

//11
let anotherSent:string = "";


anotherSent = sent.split(" ").map(function(item){
    return item[0].toUpperCase()+item.substring(1);
}).join(" ");

console.log(anotherSent);

//12

let arr1:number[] = [3,1,7,4,8,5,6], arr2:number[] = [4,2,6,5,3,1,7];



function chekkArr(a:number[], b:number[]):void{
    a.sort(function(a,b){
        return a-b
    });
    b.sort(function(a,b){
        return a-b
    });
    count = 0;
if (a.length = b.length) {
    for (let i:number = 0; i < a.length; i++){
        if (a[i]==b[i]) count++
    }
    if (count == a.length){
        return console.log("равны")
    }else return console.log(" не равны")
} else {
   return console.log("не равны") 
}
}
chekkArr(arr1,arr2);

//13

let newStr:string = "gjhg, dlfgj. kjdfghd: sklfj;";

console.log(newStr.replace(/[.,:;!?-]/gi, ""))

//14
sum = 0
function foo(a:number,b:number):number;
function foo(a:number,b:number,c:number);
function foo(a:number,b:number,c?:number){
    if (c !== undefined){
        return a+b+c;
    }else return a+b;
}

console.log(sum = foo(3,2))
console.log(sum = foo(3,2,1))


