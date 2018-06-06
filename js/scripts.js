var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v", "w","x","y","z"];
var word = $("input#word").val();
var splitWord = word.split("");
console.log(splitWord)


  // if (alphabetArray.includes(splitWord)) {
  //   return true;
  // });

$(function(){
  $("form#pig-latin").submit(function(e){
    e.preventDefault();
    var result = translated(word);
   $("#result").text(result);
 });
});
