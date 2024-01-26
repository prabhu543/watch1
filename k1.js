const decremented=document.querySelector('#decremented');
const incremented=document.querySelector('#incremented');
const reorder=document.querySelector('#reorder');
let lavel=document.querySelector('#counting');
let count=0;

let decry=()=>{
 count--;
 lavel.textContent=count;
}
let incry=()=>{
    count++;
    lavel.textContent=count;
}
let recry=()=>{
    count=0;
 lavel.textContent=count;
}