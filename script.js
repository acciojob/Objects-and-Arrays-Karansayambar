const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here
const team = players; // storing a reference to the array players
const team1 = [...players]; // creating a copy of the array players

const cap1 = { ...person }; // creating a copy of the object person

// Testing to handle edge cases
// Modifying players array
players.push("Tom");

// Modifying person object
person.name = "John Doe";
person.age = 85;

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

