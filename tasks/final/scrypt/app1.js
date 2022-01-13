simpNum = function(n){
   let a = [2,3];
   let l = 0;
   let res = '';
    for(let i=4;i<n;i++){
        l = 0
        for(let j=1;j<=i;j++){
            if (i%j == 0){
                l++
                
            }
        }
        if (l==2) a.push(i)
    }
    for(let i = 0; i < a.length; i++){
        if(n % a[i] ==0){
            n = n / a[i];
            res+= `${a[i]} * `
        }
    }
    return(res.substring(0, res.length - 2))
}

console.log(simpNum(1546))