let name = prompt('Input Your Name');
let length = name.length;
let center;

 if (length % 2 === 0) {
   center = `${name[length/2-1]}${name[length/2]}`;
   alert(`The middle words of ${name} is ${center}`);
 } else {
   center = name[(length - 1) / 2];
   alert(`The middle words of ${name} is : ${center}`);
 }
