$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();

    $("How to get away with murder or manslaughter.").append()

    // var str = 'How to get away with murder or manslaughter.'

    //
    // var words = str.split('');
    // console.log(words[3]);
    // // expected output: "away"
    //
    // var chars = str.split('');
    // console.log(chars[8]);
    // // expected output:"e"
    //
    // var strCopy = str.split();
    // console.log(strCopy);
    // // expected output: Array ["How to get away with murder or manslaughter."]
    var input = $("#Word").val()
    var inputArray = input.split(" ")
    inputArray.sort()
    var newArray = inputArray.map(function(item) {
      return item.toUpperCase()
    });

    var array1 = ['How', 'Away', 'Murder'];
    console.log('array1: ', array1);
    // expected output: Array ['How', 'Away', 'Murder']

    var reversed = array1.reverse();
    console.log('reversed: ', reversed);
    // expected output: Array ['Murder', 'Away', 'How']

    console.log('array1: ', reversed.join(" "));
    // expected output: Array ['Murder', 'Away', 'How']
  });
});
