const bcrypt = require("bcrypt");

async function hashString() {
  const myString = "Hello world";

  const hashedString = await bcrypt.hash(myString, 14);

  console.log(hashedString);
}

hashString();
