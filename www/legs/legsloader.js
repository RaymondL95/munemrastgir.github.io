//this fuction will create a unordered html list of all our exersices loaded from the json file
function exerciseList(data) { 
    var ul = document.getElementById("list"), str;
    
    for (var i=0; i<data.legs.length; i++)
        {
            str=data.legs[i].Exercise;
            var li= document.createElement("li");  //create a new item for the list
            //set the item to the ith exercise from our json database
            li.innerHTML=str.link(data.legs[i].link) + " Secondary muscle: " + " " + data.legs[i].Secondary + " " + data.legs[i].Descriptions;
            ul.appendChild(li); // add that item to the unordered list
        }
}

$.getJSON("legs.json",function(data){

    exerciseList(data);
    //document.getElementById("h2").setAttribute("type","button");
    //document.getElementById("h2").onclick=exerciseLoader(data);
    //document.getElementById("h2").addEventListener("mouseover", exerciseLoader(data));    
    
});