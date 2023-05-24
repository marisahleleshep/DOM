document.getElementById('body').style.backgroundColor = "silver";

document.getElementById('title').style.color='green';

document.getElementById('fru').style.textTransform='uppercase'

document.getElementById('veg').style.textTransform='uppercase'


let li= document.createElement('li')
li.innerHTML='guavo';
document.getElementById('fruList').appendChild(li);

let l1= document.createElement('l1')
l1.innerHTML='Peanuts';
document.getElementById('vegList').appendChild(l1);


