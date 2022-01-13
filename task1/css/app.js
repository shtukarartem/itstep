function validParentheses(parens) {
    let count = 0;
    parens = parens.split("")
    if(parens[0] == "("&& parens[parens.length - 1]==")"|| parens.length == 0){
        for(let j = 0; j < parens.length; j++){
        if (parens[j] == "(") {
            for(let i = j; i < parens.length; i++){
                if (parens[i] == ")") {
                    parens.splice(i,1)
                    count++
                    break};
            }
            console.log(count)
if (count) {
    parens.splice(j,1)
    count = 0
     j = j-2
}
    }}}else return false
    console.log(parens)
    if (parens.length == 0)
    return true
    else return false
    
  }
  console.log(validParentheses("()()((()"))











 /* parens.filter(function(item,index){



    if(parens[0] == "("|| parens.length == 0){
        parens.filter(function(item){
           /* if (item == "(") op++
            if (item ==")") cl++
            return 1
        })}else return false
        console.log(op == cl,op,cl)
        if (op == cl)
        return true
        else return false
        
      }*/