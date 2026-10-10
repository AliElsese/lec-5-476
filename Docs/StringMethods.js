// String Methods
var jobTitle = " Front End ";

// ** Searching Methods
//      - includes(substring): Returns true if a string contains the specified text.
console.log(`Includes Method Output: ${jobTitle.includes("end")}`);

//      - indexOf(substring): Returns the position index of the first occurrence of a value, or -1 if not found.
console.log(`IndexOf Method Output: ${jobTitle.indexOf("end")}`);

//      - lastIndexOf(substring): Returns the position index of the last occurrence of a value.
console.log(`LastIndexOf Method Output: ${jobTitle.lastIndexOf("end")}`);

//      - startsWith(substring): Checks if a string begins with the specified characters.
console.log(`StartsWith Method Output: ${jobTitle.startsWith("fr")}`);

//      - endsWith(substring): Checks if a string ends with the specified characters.
console.log(`EndsWith Method Output: ${jobTitle.endsWith("nd")}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ** Extracting Substrings Methods
//      - slice(start, end): Extracts a section of a string from the start index up to (but not including) the end index.
//        It accepts negative indices to count backward from the end.
console.log(`Slice Method Output: ${jobTitle.slice(1, 5)}`);

//      - substring(start, end): Similar to slice(), but treats any negative index arguments as 0.
console.log(`Substring Method Output: ${jobTitle.substring(1, 5)}`);

//      - split(separator): Divides a string into an array of smaller substrings based on a delimiter (like a comma or space).
console.log(`Split Method Output: ${jobTitle.split(" ")}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ** Modifying and Formatting Methods
//      - toUpperCase(): Converts all characters in the string to uppercase.
console.log(`ToUpperCase Method Output: ${jobTitle.toUpperCase()}`);

//      - toLowerCase(): Converts all characters in the string to lowercase.
console.log(`ToLowerCase Method Output: ${jobTitle.toLowerCase()}`);

//      - replace(search, replacement): Substitutes the first occurrence of a specified substring or regular expression with a new value.
console.log(`Replace Method Output: ${jobTitle.replace("front", "back")}`);

//      - replaceAll(search, replacement): Substitutes all occurrences of a specified substring.
console.log(`ReplaceAll Method Output: ${jobTitle.replaceAll("front", "back")}`);

//      - trim(): Strips away whitespace from both the beginning and the end of the text.
console.log(`Trim Method Output: ${jobTitle.trim()}`);

//      - trimStart(): Strips away whitespace only from the beginning.
console.log(`TrimStart Method Output: ${jobTitle.trimStart()}`);

//      - trimEnd(): Strips away whitespace only from the end.
console.log(`TrimEnd Method Output: ${jobTitle.trimEnd()}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ** Accessing Characters Methods
//      - at(index): Returns the character at a specific position.
//        It natively accepts negative values to fetch characters from the end.
//        If the index is out of bounds, it returns undefined.
console.log(`At Method Output: ${jobTitle.at(2)}`);
console.log(`At Method Output: ${jobTitle.at(20)}`);

//      - charAt(index): Returns the character at a specific position.
//        If the index is out of bounds, it returns an empty string.
console.log(`CharAt Method Output: ${jobTitle.charAt(2)}`);
console.log(`CharAt Method Output: ${jobTitle.charAt(20)}`);

//      - charCodeAt(index): Returns the UTF-16 Unicode value of the character at the given position.
//        If the index is out of bounds, it returns NaN.
console.log(`CharCodeAt Method Output: ${jobTitle.charCodeAt(2)}`);
console.log(`CharCodeAt Method Output: ${jobTitle.charCodeAt(20)}`);