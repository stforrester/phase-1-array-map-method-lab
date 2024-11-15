const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //declares new array that will be the result of using .map on tutorials with a callback function to perform the transformation
  let titleCasedTutorials = tutorials.map((title) => {
    //splits each title in the tutorials array into an array of words
    let wordArray = title.split(" ");
    
    //returns an array of words with the first letter capitalized
    //declares a new array that will be the result of using .map on wordArray with a callback function
    let capitalizedWordArray = wordArray.map((word) => {
      //grabs the first letter of each word in wordArray
      let firstLetter = word.at(0);
      //grabs the remaining letters of each word in wordArray
      let remainder = word.slice(1);
      //capitalizes the first letter we grabbed with the firstLetter variable
      let firstLetterCapitalized = firstLetter.toUpperCase();
      //joins the capitalized first letter with the remaining letters in the word
      let capitalizedWord = firstLetterCapitalized.concat(remainder);
      //returns the newly capitalized word and adds it to the new array "capitalizedWordArray"
      return capitalizedWord;
    })
    //returns the "capitalizedWordArray" that has been turned into a single title string with each word element separated by a space
    return capitalizedWordArray.join(" ");
  })
  //returns the updated Array of tutorial titles that are now title-cased
  return titleCasedTutorials;
}

//updating to create a new commit