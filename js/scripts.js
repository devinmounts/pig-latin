



function pigLatin(string) {
  var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

  var splitWord = [];

  splitWord = string.split("");
  if (isNaN(splitWord)){
    return "not a number";
  }


  // for(i=0; i<=splitWord.length; i++) {
  //   if(alphabetArray[i] === splitWord[0]) {
  //     alert("it's a letter");
  //     return;
  //   } else {
  //     alert("not a letter");
  //     return;
  //   }
  // }


}

$(function(){
  $("form#pig-latin").submit(function(e){
    e.preventDefault();
    var word = $("input#word").val();
    pigLatin(word);

    var result = pigLatin(word);
   $("#result").text(result);
 });
});
