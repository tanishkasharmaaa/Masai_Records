// fill in javascript code here
let name=document.getElementById("name");
let employee=document.getElementById("employeeID");
let department=document.getElementById("department");
let experience=document.getElementById("exp");
let email=document.getElementById("email");
let mobile=document.getElementById("mbl");
let myform=document.querySelector("form");


let tbody=document.querySelector("tbody")
function determinerole(experience){
   if(experience>5){
      return "Senior"
   }
  else if (experience > 1 && experience <=5){
     return "Junior"
   }
  else if(experience==1){
   return "Fresher"
   }
      }




let alldata=[]
myform.addEventListener("submit",function(e){
    e.preventDefault();
   let data={};
   data.name=name.value;
   data.employee=employee.value;
   data.department=department.value;
   data.experience=experience.value;
    data.role=determinerole(experience.value)
   data.email=email.value;
   data.mobile=mobile.value;
   
  

   alldata.push(data);

 tbody.innerHTML=null


   alldata.map((ele)=>{

    let row=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let td8=document.createElement("td");
    let button=document.createElement("button")
    // td8.addEventListener("click",function(){
    //   alldata.innerHTML=null
    // })


    td1.innerText=ele.name;
    td2.innerText=ele.employee;
    td3.innerText=ele.department;
    td4.innerText=ele.experience;
    td5.innerText=ele.email;
    td6.innerText=ele.mobile;
    td7.innerText=ele.role;
    td8.innerText;
    button.innerText="Delete"

    button.addEventListener("click",function(){
  row.innerHTML=""
    })

   
    td8.append(button)
    row.append(td1,td2,td3,td4,td4,td5,td6,td7,td8);
    tbody.append(row)
   })
})




