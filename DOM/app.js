//objective 1

document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("say something nice");
  button.appendChild(buttonText);
  document.body.appendChild(button);
  button.addEventListener("click", function () {
    alert("something nice");
  });

  //objective 2

  document.getElementById("btnSubmit").addEventListener("click", function () {
    console.log(document.getElementById("textInput").textContent);

    let alertMessage = document.getElementById("textInput").value;
    console.log(document.getElementById("textInput").value);
    alert(alertMessage);
  });

  //objective 3
  let changeDiv = document.querySelector("div");
  changeDiv.addEventListener("mouseenter", function () {
    changeDiv.style.backgroundColor = "blue";
    changeDiv.addEventListener("mouseleave", function () {
      changeDiv.style.backgroundColor = "initial";
    });
  });

  //objective4
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let pg = document.getElementById("pg");
  pg.addEventListener("click", function () {
    pg.style.color = getRandomColor();
  });

  //objective 5
  let btnTwo = document.getElementById("btnTwo");
  //let div2 = document.querySelector(".div2");
  let div2 =document.getElementById('div2');
  console.log(div2)
  btnTwo.addEventListener("click", function () {
    let span = document.createElement("span");
    span.innerText = "michael";
    div2.appendChild(span);
  });
  // let btnTwo = document.createElement ('button');
  // let btnName= document.createTextNode("what's my name again?")
  // btnName.classname = "name";
  // let secondDiv =document.createElement ('div')
  // secondDiv.classname ="secondDiv"

  // btnTwo.appendchild (btnName);
  // secondDiv.appendChild (btnTwo);
  // document.body.appendChild (secondDiv);

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
  let btnFriends = document.querySelector(".btnFriends");
  let friends = document.getElementById("friends");

  btnFriends.addEventListener("click", function () {
    if (friendsArray[frindex]) {
      let newFriend = document.createElement("li");
      newFriend.innerText = friendsArray[frindex];
      friends.appendChild(newFriend);
      frindex++;
    } else {
      alert("ya got no more friends!");
    }
  });
});

//
