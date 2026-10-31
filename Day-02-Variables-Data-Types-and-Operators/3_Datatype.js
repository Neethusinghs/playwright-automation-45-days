const p = { name: "Neethu" };
const q = p;
q.name = "Ravi";
console.log(p.name);
p = { name: "X" };
console.log(p.name);