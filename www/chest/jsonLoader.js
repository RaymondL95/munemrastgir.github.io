$.getJSON("chest.json",function(data){
    console.log(data);

    var str= data.Chest[0].Exercise;
    document.getElementById("Chest").innerHTML =str.link(data.Chest[0].link)  + " Secondary muscle: " + " " + data.Chest[0].Secondary + data.Chest[0].Descriptions;
    
    str= data.Chest[1].Exercise;
    document.getElementById("Chest1").innerHTML =str.link(data.Chest[1].link)  + " Secondary muscle: " + " " + data.Chest[1].Secondary + data.Chest[1].Descriptions;
    
});
