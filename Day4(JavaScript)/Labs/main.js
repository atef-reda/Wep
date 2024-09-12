console.log("--------------------------------------");
var str = "Egypt";
console.log(str);
str = str.replace(/[a-zA-Z]/g, (match) =>
  match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase()
);
console.log(str);
console.log("--------------------------------------");

const uniqueChars = new Set();
var str = "thequickbrownfoxjumpsoverthelazydog";
console.log(str);
for (char of str) {
  uniqueChars.add(char);
}
// console.log(uniqueChars)  //set
str = Array.from(uniqueChars).join("");

console.log(str);

console.log("--------------------------------------");

var str="Web Development Tutorial";
console.log(str);

words=str.split(' ');
var longest_word="";
var longest_length=0;

for(word of words)
{
    if(word.length>longest_length)
    {
        longest_word=word;
        longest_length=word.length;
    }
}
console.log(longest_word);
console.log("--------------------------------------");
