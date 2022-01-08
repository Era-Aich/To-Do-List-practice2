let nameIs = ""
let phnNo = ""

let comMent = ""

const handleName = (e)=>nameIs=e
const handlePhn = (e)=>phnNo= e
const handleCom = (e)=>comMent=e


const getInput=()=>{
console.log(nameIs)
console.log(phnNo)
console.log(comMent)

let div= document.createElement("div")
div.setAttribute("class","list-item")

listHtml=`
<p>
<span>Name:${nameIs}</span>



<span>PhnNo:${phnNo}</span>



<span>Comment:${comMent}</span>




</p>


`;

div.innerHTML=listHtml;
document.getElementById("show").appendChild(div);
document.getElementById("inp").value = ""
document.getElementById("phn").value =""
document.getElementById("Comm").value =""

}














const onclick= document.getElementById("btn").addEventListener("click",getInput);