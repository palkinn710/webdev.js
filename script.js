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
function first(){
     second()
}
function second(){
    third()
}
function third(){
    console.trace()

}
first()
 function infinte(){
    infinte()
 }

 let total=40
 
 function calculate(){
    console.log(total)
    let total=100
 }
 calculate()



