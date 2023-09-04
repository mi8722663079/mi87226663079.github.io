// for ..... in loop
// loop through properties of the object

const user = {
  name: "mohamed",
  country: "egypt",
  age: 24,
};

let data = "";
for (let i in user) {
  // console.log(`the ${i} is => ${user[i]}`);
  data += `the ${i} is => ${user[i]}`;
}
console.log(data);
