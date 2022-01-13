let n = 100, min = 1, max = 100, a = [],armin = 0, armax = 0, res;
//8
for(let i = 0; i < n; i++){
    a.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
armax = a[0];
armin = a[0];
for (let i = 1; i<a.length;i++){
if (armin > a[i]) {armin = a[i]};
if(armax < a[i]) {armax = a[i]};
}
console.log(a,armax,armin, res = armax-armin)

//9
n=10
let b =[];
for(i=0;i<n;i++){
    b[i] = []
    for(j=0;j<n;j++){
        b[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
armax = b[0][0];
armin = b[0][0];
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if (armin > b[i][j]) {armin = b[i][j]};
if(armax < b[i][j]) {armax = b[i][j]};;
    }
}
console.log(b,armax,armin, res = armax-armin)

//10
let friend = function(a,b){
    let sumA = 0,sumB = 0;
    for( i = 0; i < a; i++){
        if (a % i == 0){sumA +=i}
    }
    for( i = 0; i < b; i++){
        if (b % i == 0){sumB +=i}
    }
    if (sumA == b && sumB== a) {
        return "Дружественные"
    } else { 
        return "Не дружественные"
    }
}
 console.log(friend(220,284))
 //11
 let newArr = function(a,b){
     for(let i = 0; i<a.length;i++){
         for(let j = 0; j < b.length; j++){
             if (a[i] == b[j]){
                 b.splice(j,1);
                 j--
             }
         }
     }
     return a.concat(b)
 }
 console.log(newArr([1,2,3,4],[3,4,5,6]))
 //12

 let newArr2 = function(n){
     for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("fizzbuzz")
        } else if(i % 3 == 0){
            console.log("fizz")
        } else if(i % 5 == 0){
            console.log("buzz")
        }else console.log(i) 
     }
 }

console.log(newArr2(20))
//13

newStr = function(str){
    let lengh = str.length;
    str = str.replace(/[aeiou]/gi, "");
    return lengh - str.length
}

console.log(newStr("asder"));

//14