const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

rl.question('What name do you want people to call you, given or otherwise?', (answer1) => {
  console.log('Noice!');
    rl.question('What is one activity you like to do for fun?', (answer2) => {
      console.log('Geez, you are like, so interesting and unique!');
        rl.question('What do you listen to while doing this activity?', (answer3) => {
          console.log('Oh, totes. Me too!');
          rl.question('What is your favorite meal?', (answer4) => {
            console.log('Questionable taste, but noted...');
            rl.question('If you had to pick, which sport is your absolute favorite?', (answer5) => {
              console.log(`Okay, ${answer1}, I hear you.`);
              rl.question('Tell me your super power in under 6 words, ready, set, GO!', (answer6) => {
                console.log(`You are the coolest person ever! Here's your profile. Go decorate your boring social media presence ASAP: "${answer1} enjoys listening to ${answer3} while ${answer2}, devouring ${answer4}, participating heartily in ${answer5} and can ${answer6} like nobody's business."`);
                rl.close();
              });
              // rl.close();
            });
            // rl.close();
          });
          // rl.close();
        });
      // rl.close();
    });
  // rl.close();
});



// vagrant [profile_generator]> node survey.js 
// What name do you want people to call you, given or otherwise? Cat Delux
// Noice!
// What is one activity you like to do for fun? counting rocks
// Geez, you are like, so interesting and unique!
// What do you listen to while doing this activity? Mozart
// Oh, totes. Me too!
// What is your favorite meal? meatballs
// Questionable taste, but noted...
// If you had to pick, which sport is your absolute favorite? ballet
// Okay,  Cat Delux, I hear you.
// Tell me your super power in under 6 words, ready, set, GO! skip rocks
// You are the coolest person ever! Here's your profile. Go decorate your boring social media presence ASAP: " Cat Delux enjoys listening to  Mozart while  counting toenails, devouring  meatballs, participating heartily in  ballet and can  skip rocks like nobody's business."



//accessed using
// const readline = require('readline');

// Once this code is invoked, the Node.js application will not terminate until the readline.Interface is closed because the interface waits for data to be received on the input stream.

// rl.question(query, callback)
// query {string} A statement or query to write to output, prepended to the prompt.
// callback {Function} A callback function that is invoked with the user's input in response to the query.
// The rl.question() method displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.

// When called, rl.question() will resume the input stream if it has been paused.

// If the readline.Interface was created with output set to null or undefined the query is not written.

// Example usage:

// rl.question('What is your favorite food? ', (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
// });
// The callback function passed to rl.question() does not follow the typical pattern of accepting an Error object or null as the first argument. The callback is called with the provided answer as the only argument.


// Event: 'close'
// The 'close' event is emitted when one of the following occur:

// The rl.close() method is called and the readline.Interface instance has relinquished control over the input and output streams;
// The input stream receives its 'end' event;
// The input stream receives <ctrl>-D to signal end-of-transmission (EOT);
// The input stream receives <ctrl>-C to signal SIGINT and there is no 'SIGINT' event listener registered on the readline.Interface instance.
// The listener function is called without passing any arguments.

// The readline.Interface instance is finished once the 'close' event is emitted.