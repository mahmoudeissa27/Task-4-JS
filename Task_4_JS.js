var taskName=window.prompt("What is your task name?");
var taskType=window.prompt("what is your task type?\nselect from the following: 'in progress', 'done','task'");
var storeTask=[{
    name:taskName,
    type:taskType,
    dateee:new Date().toString()
    
}
];
console.log(storeTask);
for (let i = 1; i < 3; i++) {
    var taskName=window.prompt("What is your task name?");
    var taskType=window.prompt("what is your task type?\nselect from the following: 'in progress', 'done','task'");
    storeTask.push({
        name:taskName,
        type:taskType,
        dateee:new Date().toString()
    });

    
}
// console.log(storeTask[1].name);

var parent=document.querySelector("#parent");
var content="";

for (let index = 0; index < storeTask.length; index++) {
    content+=document.getElementById("parent").innerHTML=`Task name: ${storeTask[index].name} 
<br>Task type: ${storeTask[index].type} 
<br>Task date: ${storeTask[index].dateee}<br><br>`;
var color='';
if(storeTask[index].type=="in progress"){
    color="orange";
}else if(storeTask[index].type=="done"){
    color="green";
    
}else if(storeTask[index].type=="task") {
    color="red";
}
content=document.getElementById("parent").innerHTML=`<div style="background-color:${color}">${content}</div>`;


}



