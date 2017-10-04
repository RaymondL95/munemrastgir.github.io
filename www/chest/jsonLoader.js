$.getJSON("Chest.json",function(data){
    console.log(data);

    var str= data.Chest[0].Exercise;
    document.getElementById("Chest").innerHTML =str.link(data.Chest[0].link);
    
    str= data.Chest[1].Exercise;
    document.getElementById("Chest1").innerHTML =str.link(data.Chest[1].link);
    
    str= data.Chest[2].Exercise;
    document.getElementById("Chest2").innerHTML =str.link(data.Chest[2].link);
});
