alert("Are You Ready to Play Snack, Water and Gun Game.");
alert("NOTE:- This game will be three time played.");
let count = 0;
let win = 0;
while (count <= 2) {
  count++;
  let mystr = prompt("Enter S for Snack. Enetr W for Water. Enter G for Gun.");
  alphabet = "swg";
  random_num = Math.trunc(Math.random() * 3);
  random_str = random_num.toString();
  if (mystr == "s" && alphabet[random_str] == "w") {
    alert(
      "Congratulations Winner, You enterd Snack and computer entered water."
    );
    win++;
  } else if (mystr == "w" && alphabet[random_str] == "g") {
    alert("Congratulations Winner, You enterd Water and computer entered Gun.");
    win++;
  } else if (mystr == "g" && alphabet[random_str] == "s") {
    alert("Congratulations Winner, You enterd Gun and computer entered Snack.");
    win++;
  } else if (mystr == "s" && alphabet[random_str] == "s") {
    alert("Match tie ! You and computer both chosed Snack.");
  } else if (mystr == "w" && alphabet[random_str] == "w") {
    alert("Match tie ! You and computer both chosed Water.");
  } else if (mystr == "g" && alphabet[random_str] == "g") {
    alert("Match tie ! You and computer both chosed Gun.");
  } else if (mystr != "s" && mystr != "w" && mystr != "g") {
    alert("Please, Enter Valid Data.");
  } else {
    alert("Batter Luck Next Time.");
  }
}
console.log(`Your score is ${win} out of 3`);
alert("Now, You can check your winning score in console.");
