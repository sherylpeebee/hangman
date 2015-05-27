'function use strict()';

$(document).ready(function(){

  var splitWord;
  //was having trouble with the above code block. changed it to include the second parameter, AND to first query
  //a STATIC element. second parameter is then necessary as this element
  //is being dynamically created. it's a drilling down. query a *STATIC* (as in not dynamically created) relative,
  //then provide second parameter so that it can be located in relation to the queried selector. we delegate the
  //initial handling of the 'click' to the STATIC element in this way. then it's passed on. 'drill down' further by
  //specifying 'THIS' as clicked element to access the clicked element's properties.

  window.onload = draw;

  function draw(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  }
  var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var words=['fishmonger', 'blasphemy', 'childish', 'aesop', 'rigor mortis'];
  var multiplier = words.length;

  $('#startGame').on('click', function(){
    var i = Math.floor(Math.random() * multiplier);

    splitWord = words[i].split('');
    console.log(splitWord);

    splitWord.forEach(function(letter){
      $('#alphabet').before("<div class='randomWordLetter'>" + letter + "</div>");
      //'.before' similarly to 'append', 'prepend', etc. adds specified element to the document
      //DIFFERENCE is that it gets placed BEFORE the selector.
      //also see '.wrap' -- encloses all instances of queried element/element possessing queried attributes with
      //specified new element.
    });

    for (var alphabetLetter=0; alphabetLetter<alphabetArray.length; alphabetLetter++){
      $('#alphabet').append("<div class='alphabet'>" + alphabetArray[alphabetLetter] +  "</div>");
    }
    $('.alphabet').wrap("<div class='alphabetWrapper'></div>");
    //you don't have to use loops to simply *find* all of the instances of the queried selector. --
    //N.B., NO 'EACH's necessary!!! the query itself returns all instances of specified selector.


    $('#startGame').hide();
    $('.randomWordLetter').hide();
    $('.randomWordLetter').wrap("<div class='letterContainer'></div>");

  });
  // var clickedLetter = $(document).find('.randomWordLetter');
    $('body').on('click', '.alphabet', function(){
      // $('.randomWordLetter').show();
      var choice = $(this).text();
      // console.log($('.randomWordLetter').text());


         if(splitWord.indexOf(choice) === - 1) {
           return $(this).remove();
        }
          else
          // $( ".randomWordLetter:contains(choice)").show();

          $(".randomWordLetter:contains(" + choice + ")").show();
          //here it was necessary to concatenate the variable choice into the query!!!
          $(this).remove();
      // var word = "another";
      //   $('.alphabet').click(function() {
      //   console.log($(this).text());
      //   var splitWord = word.split('');
      //   console.log(splitWord);
      //   for (var i = 0; i !== splitWord.length; i++) {
      //   if (word.indexOf($(this).text()) === - 1) {
      //   return $(this).remove();
      //   }
      //   }
      //   return null;
        // });
      //this above is working backward to how i want it to. hides correct selection; when i
      //invert the evaluating statement, the .remove() no longer works -- all elements evaluate to true
    });


});
