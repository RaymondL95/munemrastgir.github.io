function exerciseList(data) { 
    var ul = document.getElementById("list"), str;
    
    for (var i=0; i<data.Arms.length; i++)
        {
            str=data.Arms[i].Exercise;
            var li= document.createElement("li");  //create a new item for the list
            //set the item to the ith exercise from our json database
            li.innerHTML=str.link(data.Arms[i].link) + " Secondary muscle: " + " " + data.Arms[i].Secondary + " " + data.Arms[i].Descriptions;
            ul.appendChild(li); // add that item to the unordered list
        }
}

$.getJSON("Arms.json",function(data){

    exerciseList(data);
});
