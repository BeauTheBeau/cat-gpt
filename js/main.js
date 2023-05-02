// CAT NAMES

const
  NAMES = [
    'Puddles', 'Beau', 'Kit', 'Tom', 'Shadow', // these are my cats
    '`111m\',/??????????????????????????????????????????????????@', // this is from my cat, Shadow. She stepped on my keyboard.
    'Tiger',
    "Abby",
    "Angel",
    "Annie",
    "Baby",
    "Bailey",
    "Bandit",
    "Bear",
    "Bella",
    "Bob",
    "Boo",
    "Boots",
    "Bubba",
    "Buddy",
    "Buster",
    "Cali",
    "Callie",
    "Casper",
    "Charlie",
    "Chester",
    "Chloe",
    "Cleo",
    "Coco",
    "Cookie",
    "Cuddles",
    "Daisy",
    "Dusty",
    "Felix",
    "Fluffy",
    "Garfield",
    "George",
    "Ginger",
    "Gizmo",
    "Gracie",
    "Harley",
    "Jack",
    "Jasmine",
    "Jasper",
    "Kiki",
    "Kitty",
    "Leo",
    "Lilly",
    "Lily",
    "Loki",
    "Lola",
    "Lucky",
    "Lucy",
    "Luna",
    "Maggie",
    "Max",
    "Mia",
    "Midnight",
    "Milo",
    "Mimi",
    "Miss kitty",
    "Missy",
    "Misty",
    "Mittens",
    "Molly",
    "Muffin",
    "Nala",
    "Oliver",
    "Oreo",
    "Oscar",
    "Patches",
    "Peanut",
    "Pepper",
    "Precious",
    "Princess",
    "Pumpkin",
    "Rascal",
    "Rocky",
    "Sadie",
    "Salem",
    "Sam",
    "Samantha",
    "Sammy",
    "Sasha",
    "Sassy",
    "Scooter",
    "Shadow",
    "Sheba",
    "Simba",
    "Simon",
    "Smokey",
    "Snickers",
    "Snowball",
    "Snuggles",
    "Socks",
    "Sophie",
    "Spooky",
    "Sugar",
    "Tiger",
    "Tigger",
    "Tinkerbell",
    "Toby",
    "Trouble",
    "Whiskers",
    "Willow",
    "Zoe",
    "Zoey"
  ],
  CAT_WORDS = ['Meow', 'Purr', 'Hiss', 'Yowl', 'Mew', 'Mewl'],
  CAT_NAME = [
    document.getElementById('cat-name'),
    ""
  ]

function catName() {
  CAT_NAME[1] = NAMES[Math.floor(Math.random() * NAMES.length)]
  CAT_NAME[0].innerHTML = CAT_NAME[1]
}

function generateRandomMessage() {

  // Combine a random number of cat words
  let
    message = '',
    numberOfWords = Math.floor(Math.random() * CAT_WORDS.length) + 2;

  for (let i = 0; i < numberOfWords; i++) {

    // if not first word, make lowercase

    if (i > 0) {
      // if is last word
      if (i === numberOfWords - 1) {
        message += CAT_WORDS[Math.floor(Math.random() * CAT_WORDS.length)].toLowerCase()
        continue
      }

      message += CAT_WORDS[Math.floor(Math.random() * CAT_WORDS.length)].toLowerCase() + ' '

      continue
    }

    message += CAT_WORDS[Math.floor(Math.random() * CAT_WORDS.length)] + ' '
  }

  return message + '.'
}

function sendMessage(isCat, message) {

  let
    messageContainer = document.getElementById('message-container'),
    messageDiv = document.createElement('div'),
    messageName = document.createElement('h3'),
    messageText = document.createElement('p')

  messageDiv.className = 'message'
  messageDiv.setAttribute('data-cat', isCat)
  messageName.className = 'name'
  messageText.className = 'text'

  messageName.innerHTML = isCat ? CAT_NAME[1] : 'You'
  messageText.innerHTML = message

  messageDiv.appendChild(messageName)
  messageDiv.appendChild(messageText)
  messageContainer.appendChild(messageDiv)
}


catName()
// send msg
sendMessage(true, generateRandomMessage())
