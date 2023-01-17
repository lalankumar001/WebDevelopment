const datas=[
    {name:"lalan" ,Profession:"web Developer"},         
    {name:"tarun" ,Profession:"web Developer"},         
];
function getData(){
setTimeout(() => {
    let output="";
    datas.forEach((data, index)=>{
        output+=`<li>${data.name + data.Profession + "this post created 8sec ago"}</li>`
    })
    document.body.innerHTML=output;
}, 1000);

}
// create function for create post
// call back
function createdata(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newData);
            let error=false;
            if(!error){
                resolve();
            }else{
                reject("some is wrong")
            }
        }, 2000);

    })
}
//  createdata({name:"lalbabu",Profession:"WebDEv"}).then(getData).catch(err=>console.log("reject"))


async function start(){
    await createdata({name:"lalbabu",Profession:"WebDEv" + "This post created after 2sec "})
   getData();
}
start();


//  below fuction is gatehering data from fake api
// async function Apidata(){
//     const res= await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data=await res.json();
//     console.log(data);
// }
// Apidata();
