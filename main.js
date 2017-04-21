/*
 Welcome to your future

 "Hello! I'm your Mac, what's your name?"
 "Welcome to the world of coding! Do you know what you're doing?"
  YES - Are you ready to make your brain hurt?
    YES - Are you sure you want to do that?
      YES - !Welcome them in!
        Do you come with experience or inexperience?
        Experience - Haven't you put your brain through a lot already!?
        Inexperience - Get ready for a lifetime of headaches, pain, and tears!
      NO - Okay, there goes your life, we'll be sure to put a close tag />
    NO - Well, have you had a headache before?
      Sorry, but I meant a REAL headache, your first day is Feb 27th! HAVE FUN! 
  NO - Well here's some prework but your first day is tomorrow, have fun!
*/

var welcome = alert("Hello! Welcome to your future!")

var name = prompt("My name is MAC, what is your name?")

var welcome = alert("Welcome to the world of coding " + name + "!")

var positive = confirm("Do you know what you are doing here?")

if (positive) {

  var forSure = confirm("Are you ready to make your brain hurt?")

  if (forSure) {

    var areCertain = confirm("Are your sure you want to keep going?")

    if (areCertain) {

      var brainHurt = confirm("Do you come with experience or none at all?")

      if (brainHurt == true) {

        alert ("OOOOH your poor brain! Okay your first day is in 10 mins!")
        alert ("I'll download some prework ...")
        alert ("Your first class is right now, prework should be done by then!")

      } else if (brainHurt == false) {

        alert ("Yay! We can welcome you to a REAL headache in just a bit!!!")
        alert ("I'll send you the prework make sure it's done before you get to class, it should take you about 7 hrs!")
        alert ("GOOD LUCK!")

      }

    } else if (areCertain == false) {
      alert ("Well here's some prework but your first day is tomorrow, have fun!")
    }

  } else if (forSure == false) {
    alert ("Your first day is Feb 27th! HAVE FUN!")
  }

} else {
  alert("Okay, there goes your life, we'll be sure to put a close tag />")
}








































