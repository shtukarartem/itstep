function perimeter(n) {
    if(n > 2){
           var arr = [1,1]
           for(let i = 2; i < n+1 ; i++){
            arr[i] = arr[i-1] + arr[i-2] ;    
           }
          var sum = arr.reduce(function(a, b) {
            return a + b; });
       }else  sum = 1;

  
     
     
     return sum*4
   }
console.log(perimeter(0))