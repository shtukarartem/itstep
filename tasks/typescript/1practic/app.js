//1
var ssquare = 4;
var psquare;
psquare = Math.sqrt(ssquare) * 4;
console.log(psquare);
//2
var a = 8, b = 23, c = 9;
if (a == b && a == c && b == c) {
    console.log("равносторонний");
}
else if (a == b || b == c || a == c) {
    console.log("равнобедренный");
}
else {
    console.log("разносторонний");
}
//3
if (a + b > c && a + c > b && b + c > a) {
    console.log("можно");
}
else {
    console.log("нельзя");
}
//4
var age = 12;
if (age <= 17) {
    console.log("молодой");
}
else if (age > 17 && age < 69) {
    console.log("взрослый");
}
else {
    console.log("пожилой");
}
//5
for (var i = 10; i < 20; i++) {
    console.log(i * i);
}
//6
var sum = 0, count = 0;
for (var i = 1; count < 20; i++) {
    if (i % 5 == 0) {
        sum += i;
        count++;
    }
}
console.log(sum, count);
//7
var n = 20, x = 0, y = 1, temp;
for (var i = 2; i < n; i++) {
    temp = x + y;
    console.log(temp);
    x = y;
    y = temp;
}
//8
function NOD(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    return a;
}
console.log(NOD(24, 18));
//9
var sent = 'тут был шаг ldf nhb', sentArr;
console.log(sent.split(" ")[sent.split(" ").length - 1]);
//10
var arr = [-1, 13, -123, 2, 4, 6];
sum = 0;
arr.forEach(function (item) {
    if (item > 0)
        sum += item;
});
console.log("\u0441\u0443\u043C\u043C\u0430 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0440\u0430\u0432\u043D\u0430: ".concat(sum));
//11
var anotherSent = "";
anotherSent = sent.split(" ").map(function (item) {
    return item[0].toUpperCase() + item.substring(1);
}).join(" ");
console.log(anotherSent);
//12
var arr1 = [3, 1, 7, 4, 8, 5, 6], arr2 = [4, 2, 6, 5, 3, 1, 7];
function chekkArr(a, b) {
    a.sort(function (a, b) {
        return a - b;
    });
    b.sort(function (a, b) {
        return a - b;
    });
    count = 0;
    if (a.length = b.length) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] == b[i])
                count++;
        }
        if (count == a.length) {
            return console.log("равны");
        }
        else
            return console.log(" не равны");
    }
    else {
        return console.log("не равны");
    }
}
chekkArr(arr1, arr2);
//13
var newStr = "gjhg, dlfgj. kjdfghd: sklfj;";
console.log(newStr.replace(/[.,:;!?-]/gi, ""));
//14
sum = 0;
function foo(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    else
        return a + b;
}
console.log(sum = foo(3, 2));
console.log(sum = foo(3, 2, 1));
