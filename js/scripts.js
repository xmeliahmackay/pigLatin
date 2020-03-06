



$(document).ready(function() {
 $("form#pigLatin").submit(function(event) {
   event.preventDefault();
   var inputWord = $("input#word").val();
   console.log(inputWord);
   console.log(inputWord.charAt(0));

   var newWord = [];
   if (inputWord.charAt(0) === "a") {
     alert(inputWord);
   } 

 });
});