import createLoad from "./src/createLoad";

const loads = Array.from({ length: 10 }, createLoad);

console.log(JSON.stringify(loads, null, 2));
