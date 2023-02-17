/*const body = document.body;
const link = document.querySelector('.link');
const parent = document.querySelector('#parent');

console.log(body.childNodes);

//console.log(body.children);

//for (let node of body.children) {
  //  console.log(node);
//}
*/

const elem = document.querySelector('#elem');
const body = document.body;
const elements = elem.children;

elem.firstElementChild.style.color = 'red';

elem.lastElementChild.style.color = 'red';

for (element of elements) {
    element.textContant = element.textContant + '!';
    console.log('!');
}









