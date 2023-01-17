let queue=[];
let currentSize=queue.length;
let max=5;

function enqueue(newValue){
    if(currentSize>=max){
        alert('queue is full')
    }else{
        queue[currentSize]=newValue;
        currentSize=+1;
    }
}
function display(){
    console.log(queue)
}
enqueue(10);
display();