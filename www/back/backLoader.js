function exerciseList(data) { 
    var ul = document.getElementById("list"), str;
    
    for (var i=0; i<data.back.length; i++)
        {
            str=data.back[i].Exercise;
            var li= document.createElement("li");  //create a new item for the list
            //set the item to the ith exercise from our json database
            li.innerHTML=str.link(data.back[i].link) + " Secondary muscle: " + " " + data.back[i].Secondary + " " + data.back[i].Descriptions;
            ul.appendChild(li); // add that item to the unordered list
        }
}

$.getJSON("back.json",function(data){

    exerciseList(data);
});
