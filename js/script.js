$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();

    var str = 'How to get away with murder or manslaughter'

    var words = str.split('');
    console.log(words[3]);
    // expected output: "away"

    var chars = str.split('');
    console.log(chars[8]);
    // expected output:"e"

    var strCopy = str.split();
    console.log(strCopy);
    // expected output: Array ["How to get away with murder or manslaughter"]

  });

    var elements = 
