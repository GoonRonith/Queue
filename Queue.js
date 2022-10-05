let qBody = document.getElementById("qBody");
let btnEnqueue = document.getElementById("Enqueue");
let btnDequeue = document.getElementById("Dequeue");
let item = document.getElementById("Item")
let t=document.getElementById ("t");
const Queue = [];
let index = 0;
function Push() {
    enable();
   Queue[index]=item.value;
   index+=1;
   clear();

}

function del(){
    let x = Queue.shift();
    index -= 1;
    clear();
}

Enqueue.addEventListener('click', () => {
    t.innerHTML=`<h1 class="header"> Queue </h1>`
    if(index == 6){
        isFull();
    }
    else{
    Push();
    qBody.innerHTML += `
            <h1 class="demo">   ${Queue[index-1]}   </h1>
            `  
}
})

Dequeue.addEventListener('click', () => {
    t.innerHTML=`<h1 class="header"> Queue </h1>`
    if(index ==0){
    isEmpty();
    }
    else{
    del();
    qBody.removeChild(qBody.firstElementChild);
    }
})
 function clear(){
    item.value="";
 }
 function isEmpty(){
    t.innerHTML=`<h1 class="msg" >Queue Underflow ! </h1>`;
 }
 function disable(){
    btnDequeue.disabled=true;
     
 }
 function enable(){
    btnDequeue.disabled=false;
     
 }
 function isFull(){
    t.innerHTML=`<h1 class="msg2" >Queue Overflow ! </h1>`;
    
 }
 