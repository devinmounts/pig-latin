function pigLatin(string) {
  var vowels = ["a","e","i","o","u"];

  var splitWord = [];

  splitWord = string.split("");
  // if (isNaN(splitWord)){
    // return "not a number";
  // } else if {
  //
  // }

  for(i = 0; i < vowels.length; i++) {
    if (splitWord[0] === vowels[i]) {
      var newWord = splitWord.splice(-1,0,"ay");
      console.log(splitWord);
      console.log(newWord);

    }
  }
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


// }

$(function(){
  $("form#pig-latin").submit(function(e){
    e.preventDefault();
    var word = $("input#word").val();

    var result = pigLatin(word);
   $("#result").text(result);
 });
});
