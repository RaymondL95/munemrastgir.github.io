function exerciseLoader(data){
       document.getElementById("h2").innerHTML= "NICE";//data.Chest[0].Exercise;
}

//this fuction will create a unordered html list of all our exersices loaded from the json file
function exerciseList(data){ 
    var ul = document.getElementById("list");
    var str;
    
    for(i=0; i<data.Chest.length; i++)
        {
            str=data.Chest[i].Exercise;
            var li= document.createElement("li");
            li.innerHTML=str.link(data.Chest[i].link) + " Secondary muscle: " + " " + data.Chest[i].Secondary + " " + data.Chest[i].Descriptions;
            ul.appendChild(li);
        }
}

$.getJSON("chest.json",function(data){

    exerciseList(data);
    //document.getElementById("h2").setAttribute("type","button");
    //document.getElementById("h2").onclick=exerciseLoader(data);
    //document.getElementById("h2").addEventListener("mouseover", exerciseLoader(data));    
    
});
