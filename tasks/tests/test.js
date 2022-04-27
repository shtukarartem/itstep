/*the purpose of this code is to to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string. e.g. "foo123" --> "foo124" or "foo" --> "foo1". With my code below, pretty much all my test cases are passed except a corner case for "foo999" did not print out "foo1000". I know that there should be a way to do with regex to fix my problem, but I am not too familiar with it. Can anyone please help? */



function pad(number, length, filler) {
  number = number + "";
  if (number.length < length) {
      for (var i = number.length; i < length; i += 1) {
          number = filler + number;
      }
  }

  return number;
}

function incrementString (input) {
  var orig = input.match(/\d+$/);
  console.log(orig[0]+1)
  if (orig.length === 1) {
      orig = pad(parseInt(orig[0]) + 1, orig[0].length, '0');
      input = input.replace(/\d+$/, orig);
      return input;
  }

  return input + "1";
}

console.log(incrementString("foobar0999"))