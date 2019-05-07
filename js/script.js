$(document).ready(function() {
  $('form#list').submit(function(event){
    event.preventDefault();


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
      if (item.length >=3) {
        return item.toUpperCase()
      }
    });

    var array1 = ['1', '2', '3'];
    console.log('array1: ', array1);
    // expected output: Array ['1', '2', '3']

    var reversed = newArray.reverse().join(" ");
    console.log('reversed: ', reversed);
    // expected output: Array ['3', '2', '1']

    console.log('array1: ', reversed);
    // expected output: Array ['3', '2', '1']

    $("#output").append(reversed);
  });
});
