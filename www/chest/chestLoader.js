function exerciseLoader(data){
       document.getElementById("h2").innerHTML= "NICE";//data.Chest[0].Exercise;
}

function exerciseList(data){
    var ul = document.getElementById("list");
    
    for(i=0; i<=data.Chest.length; i++)
        {
            var li= document.createElement("li");
            li.appendChild(document.createTextNode(data.Chest[i].Exercise + " Secondary muscle: " + " " + data.Chest[i].Secondary + " " + data.Chest[i].Descriptions));
            ul.appendChild(li);
        }
}

$.getJSON("chest.json",function(data){
    console.log(data);
    
    var str= data.Chest[0].Exercise;
    document.getElementById("Chest").innerHTML = data.Chest[0].Exercise  + " Secondary muscle: " + " " + data.Chest[0].Secondary + " " + data.Chest[0].Descriptions;
    
    str= data.Chest[1].Exercise;
    document.getElementById("Chest1").innerHTML =str.link(data.Chest[1].link)  + " Secondary muscle: " + " " + data.Chest[1].Secondary + " " + data.Chest[1].Descriptions;
    
    str= data.Chest[2].Exercise;
    document.getElementById("Chest2").innerHTML =str.link(data.Chest[2].link)  + " Secondary muscle: " + " " + data.Chest[2].Secondary + " " + data.Chest[2].Descriptions;
    
    //document.getElementById("h2").setAttribute("type","button");
    //document.getElementById("h2").onclick=exerciseLoader(data);
    //document.getElementById("h2").addEventListener("mouseover", exerciseLoader(data));
    exerciseList(data);
    
    
});
