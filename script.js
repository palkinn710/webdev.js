// const container=document.querySelector(".container")
// container.addEventListener("click",()=>{console.log("div")},true)

// const button=document.querySelector("button")
// button.addEventListener("click",()=>{console.log("button")},true)


// const outer=document.querySelector(".outer")
// outer.addEventListener("click",()=>{console.log("outer div")},true)

// console.log("new code")

// let a=123456
// var b=675899
// console.log(a)
// console.log(b)
// function print(){
//     console.log("inside function")


// }
// print()    
// global context starts from thr first and while ending the fiunction it starts closing from the last function.
// function first(){
//      second()
// }


// // edit
// function second(){
//     third()
// }
// function third(){
//     console.trace()

// }
// first()
//  function infinte(){
//     infinte()
//  }

//  let total=40
 
//  function calculate(){
//     console.log(total)
//     let total=100
//  }
//  calculate()


// console.log("first line")
// selftimeout(()=> {console.log("after 5 sec")} , 5000)
// console.log("second line")

// timers
// setTimeout(()=>{
//     console.log("after 5 secs")
// },2*1000)
//  const timeridd= setInterval(()=>{console.log("setInterval")},1000)
//  setTimeout(()=>{clearInterval(timerid) , 1000})
//  take a var with starting val 1 and it will print value updated +1 eveytime and when it reaches 10 it should stop printing 
console.log("hello world")
console.log("hello world")
// var count=1;
// const timerid= setInterval(()=>{console.log(count)
// count++}
// ,1000)
//  setTimeout(()=>{clearInterval(timerid) , 10000})
//  let num =1;
//  const id=setInterval(()=>{
//     if (num===10)clearInterval(id)
//         console.log(num)
//     num+=1
// },1000)
const name=document.queryselector("#name")
const btn=document.querySelector(".btn")
const list=document.queryselector(".list")
btn.addEventListener('click' ,()=>{
    const li=document.createlement('li')
    const dlt=document.createElement('button')
    dlt.innertext="delete"
    li.innertext=name.value;
    dlt.addEventListener("click",()=>{
        list.removechild(li)
    })
    list.appendchild(dlt)
    list.appendchild(li)
    name.value=""

})


