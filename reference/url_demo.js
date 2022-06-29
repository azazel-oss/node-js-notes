const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialised URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (includes the port)
console.log(myUrl.host);

// Host Name
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Parameters Object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Looping through the search parameters
myUrl.searchParams.forEach((value, key) => console.log(`${key} : ${value}`));
