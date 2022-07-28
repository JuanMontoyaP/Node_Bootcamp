const bcrypt = require("bcrypt");

async function isMatchString() {
  const myString = "Hello world";

  const hashedString =
    "$2b$14$IQOtlui1FZYb9JdrZhjGDOb8kCJcOBAez0T3u2IKN60SDkx0ajfRG";
  const matched = await bcrypt.compare(myString, hashedString);

  console.log(matched);
}

isMatchString();
