let data =[];
let currentSize=data.length;
let max=5;
// Below is for add new item to the stack
function push(NewValue){

    if(currentSize>=max){
        alert("stack is full you can not add" +NewValue)
    }
    data[currentSize]=NewValue;
    currentSize+=1;
}

function pop(){
    if(currentSize>0){
       currentSize=-1;
       data.length=currentSize;
    }else{
        alert("the stack is empty")
    }
}

push(10);
push (20);
push(70);
// pop();
console.log(data);
pop();