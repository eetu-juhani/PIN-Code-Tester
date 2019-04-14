var upper = 100000;
var comprandomNumber = parseInt(prompt('Write a random PIN-code or test your own.'));
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== comprandomNumber ) { 
  guess = getRandomNumber( upper );
  attempts = attempts + 1;
} 
document.write('<p>The PIN-code was: ' + comprandomNumber + '<p>');
document.write('It took the computer ' + attempts + ' attempts to get it right.');


