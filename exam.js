let number = 0;
const button=document.getElementById('click');
const text = document.getElementById('text');

button.addEventListener('click',()=>{
     number++;
     text.innerHTML=`Դուք սեղմել եք ${number} անգամ`;
});