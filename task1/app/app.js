function pigIt(str){
    str = str.split(" ")
    
        for(let i = 0; i< str.length; i++){
            let word = str[i].split("");
            console.log(word,str[i])
            let letter = word[0];
            console.log(word,letter,str[i])
            str[i] =''
            word.splice(0,1);
            console.log(word,letter,str[i])
            word.push(letter, "ay")
            console.log(word,letter,str[i])
            word.join('')
            console.log(word.join(''))
            str[i]+=word.join('')
            console.log(word,letter,str[i])
        }
    
    str = str.join(" ")
    return str;
  }

  console.log(pigIt("Pig latin is cool"))
