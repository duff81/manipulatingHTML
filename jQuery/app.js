$(document).ready(function (){

//objective 1

let btn1 = $("<button type='button'> say something nice</button>");
btn1.click(function(){
    alert("'something nice!'")
})
$('body').append(btn1)

})

//objective 2

let btn2 =$(document).find('#btnSubmit');
let alertMessage =$(document).find ('#textInput')
btn2.click(function(){
    alert(alertMessage.val ())
})


//objective 3

let changeDiv =$(document).find ('.changeDiv')
changeDiv.on ("mouseenter ()", function(){

    changeDiv.css('backgroundColor', "blue");
    changeDiv.on ("mouseleave", function(){
        changeDiv.css('backgroundColor', 'initial');
    })

//objective 4


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let pg =$(document).find('#pg')
pg.click(function() {
    
    pg.css('color', getRandomColor())

})

//objective 5

let btnTwo =$(document).find ('#btnTwo')
let div2 = $(document).find('#div2')

btnTwo.click(function (){
    console.log(div2)
//let span = $('<span />').attr({'text':'Michael' });
// let span = $("<span.myName></span>");
// $('.myName').text=("michael");
div2.append($('<span> Michael </span>'));
});


//objective 6

let friendsArray = [
    "Erin",
    "Adam",
    "McFarland",
    "Brennan",
    "Joey",
    "Dan",
    "Liz",
    "Tim",
    "Jacob",
    "Brady",
  ];
  let frindex = 0;
  let btnFriends = $(document).find (".btnFriends");
  let friends = $(document).find ("#friends");

  btnFriends.click (function () {
    if (friendsArray[frindex]) {
      let newFriend = $(`<li> ${friendsArray[frindex]}</li>`);
      friends.append(newFriend);
      frindex++;
    } else {
      alert("ya got no more friends!");
    }
  });

})