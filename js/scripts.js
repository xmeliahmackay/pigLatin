function diff(word) {
  var result = function(inputWord) {
    
    var n = inputWord.search(/[aeiuo]/);
    alert(n);
    if (n === 0) {
      return inputWord + "way";
    } else {
      return inputWord + "ay";
    }
  }
}


$(document).ready(function() {
 $("form#pigLatin").submit(function(event) {
   event.preventDefault();
   var inputWord = $("input#word").val();
   var result = diff(inputWord);
   console.log(result);
   console.log(inputWord.charAt(0));











   //var result = translate(inputWord);
   //console.log(result(inputWord));
  //  if (inputWord.charAt(0) === "a") {

  //    alert(inputWord.charAt(1) + "way");
     //alert(inputWord);
   //} 











 });
});