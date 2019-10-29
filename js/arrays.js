// 1. Create a new array named languages that contains at least 7 programming languages.

const languages = ["Ruby", "Python", "C", "JavaScript", "Swift", "PHP", "Java"];

// 2. Use console.log to display the number of elements in the array:

console.log(languages);

/* 3. Use console.log to list the first element from the array using an index value. */

console.log(languages[0]);

/* 4. Use console.log to list the last element from the array using an index value. */

console.log(languages[6]);

// 5. Use an array method to add an element to the END of the array.

languages.push("Basic");
console.log(languages);

// 6. Use an array method to add an element to the BEGINNING of the array.

languages.unshift("C++");
console.log(languages);

/* 7. Log all of the elements in the array as a single string using the array .join() method */

console.log(languages.join(", "));

// 8. Use an array method to REMOVE the LAST element from the array.

languages.pop();
console.log(languages);

// 9. Use an array method to REMOVE the first element from the array.

languages.shift();
console.log(languages);

/* 10. Log all of the elements in the array as a single string using the array .join() method. This is the same as step 7 above */

console.log(languages.join(". "));

/*Note: We've supplied you a basic function for generating a random number from 1 to 100 */
function random100() {
  return Math.floor(Math.random() * 100) + 1;
}

/* 1. Create a function named createRandomList that uses a for loop to create an array containing 10 random numbers from 1 to 100 (use the supplied function above to generate the numbers). The function should return that array. */

function createRandomList() {
  listName = [];
  for (let i = 0; i < 10; i++) {
    listName.push(random100());
  }
  return listName;
}

/* 2. Call the createRandomList() function and store the results in a variable named myRandomList. */

let myRandomList = createRandomList();
console.log(myRandomList);

/* 3. Use a for loop to access each element in the loop. Each time through the loop log a message to the console that looks something like this:
Item 0 in the array is 48
When you're done you should have output 10 lines to the console -- one for each element. 
*/

for (let i = 0; i < myRandomList.length; i++) {
  console.log("Item " + i + " in the array is " + myRandomList[i]);
}

// Note: We've supplied you a basic function that takes an array of elements and shuffles their order in the array. It's a really useful, but somewhat complex algorithm -- look in the teacher's notes for links to an explanation for how it works. You'll use this function to shuffle a deck of cards that you'll create.
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

/* Complete the function createDeck(), which we've started for you below. The goal is to create a multi-dimensional array of 52 elements (52 cards), and return them shuffled when the function is called. To simplify creating the deck use two for loops -- one inside the other -- to build a multidimensional array.
 */
// 1. Add a for loop -- to loop through each element in the suites array
// 2. INSIDE that loop, add another loop that loops through elements in the ranks array.
// 3. Inside the second, nested loop, create a new array named card, which is composed of a rank and a suite. For example ['King', '♥︎'].
// 4. Push that card onto the deck array. Once both loops complete running, the deck array will hold 52 elements, and each of those elements are themselves an array.
// 5. Finally, pass the new deck to the shuffle() function, and return the results.
function createDeck() {
  var suites = ["♠︎", "♣︎", "♥︎", "♦︎"];
  var ranks = [
    "Ace",
    "King",
    "Queen",
    "Jack",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];
  var deck = [];
  // add your code below here:
  for (i = 0; i < suites.length; i++) {
    for (j = 0; j < ranks.length; j++) {
      let card = [];
      card.push(ranks[j], suites[i]);
      deck.push(card);
    }
  }
  return shuffle(deck);
}

// 6. Call the createDeck() function and store the results in a new variable named myDeck

let myDeck = createDeck();
console.log(myDeck);
/* 7. Use a for loop to loop through the deck and list each card in the order the appear in the newly shuffled array. Use the log() method to print out a message like this, once for each card:
"7 of ♥.︎"
*/

for (i = 0; i < myDeck.length; i++) {
  console.log(myDeck[i][0] + " of " + myDeck[i][1]);
}
