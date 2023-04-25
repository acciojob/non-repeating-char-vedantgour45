
function firstChar(text) {
  // your code here
  const charMap = {}; 
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

   for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (charMap[char] === 1) {
      return char;
    }
  }
  return null; 
}

const text = prompt("Enter text:");
alert(firstChar(text)); 