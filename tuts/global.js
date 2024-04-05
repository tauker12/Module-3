//global object

//console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
;, 3000);

cont int = setInterval(() => {
    console.log('in th einterval');
}, 1000);

console.log(__dirname);
console.log(__filename);

console.log(document.querySelectior);