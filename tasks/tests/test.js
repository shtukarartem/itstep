function humanReadable (seconds) {
    time={hh:00,mm:00,ss:00}
  for(let i = 0; i < seconds; i++){
    time.ss++
    console.log(time.ss)
    if (time.ss==60){
      time.ss = 00;
      time.mm++
      console.log(time.ss)
    }
    if(time.mm ==60){
      time.mm == 00;
      time.hh++
    }
  }
  console.log(time.ss)
    let result = "";
    if(time.hh < 10) {
        result +="0"+time.hh+":"
    }else result += time.hh+":";
    if(time.mm < 10) {
        result +="0"+time.mm+":"
    }else result+=time.mm+":";
    if(time.ss < 10) {
        result +="0"+time.ss
    }else result +=time.ss;
    
    return `'${result}'`;
  }
  console.log(humanReadable(3600))