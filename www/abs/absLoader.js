//this fuction will create a unordered html list of all our exersices loaded from the json file
function exerciseList(data) { 
    var ul = document.getElementById("list"), str;
    
    for (var i=0; i<data.abs.length; i++)
        {
            str=data.abs[i].Exercise;
            var li= document.createElement("li");  //create a new item for the list
            //set the item to the ith exercise from our json database
            li.innerHTML=str.link(data.abs[i].link) + " Secondary muscle: " + " " + data.abs[i].Secondary + " " + data.abs[i].Descriptions;
            ul.appendChild(li); // add that item to the unordered list
        }
}

$.getJSON("abs.json",function(data){

    exerciseList(data);
    //document.getElementById("h2").setAttribute("type","button");
    //document.getElementById("h2").onclick=exerciseLoader(data);
    //document.getElementById("h2").addEventListener("mouseover", exerciseLoader(data));    
    
});


$.getJSON("abs.json",function(data){
    console.log(data);

    var str= data.Abs[0].Exercise;
    document.getElementById("Abs").innerHTML =str.link(data.Abs[0].link) + " " + data.Abs[0].Descriptions;
    
    str= data.Abs[1].Exercise;
    document.getElementById("Abs1").innerHTML =str.link(data.Abs[1].link) + " " + data.Abs[1].Descriptions;
    
    
});
