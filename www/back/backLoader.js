$.getJSON("back.json",function(data){
    console.log(data);

    var str= data.Back[0].Exercise;
    document.getElementById("Back").innerHTML =str.link(data.Back[0].link)  + " Secondary muscle: " + " " + data.Back[0].Secondary + " " + data.Back[0].Descriptions;
    
    str= data.Back[1].Exercise;
    document.getElementById("Back1").innerHTML =str.link(data.Back[1].link)  + " Secondary muscle: " + " " + data.Back[1].Secondary + " " + data.Back[1].Descriptions;
    
    str= data.Back[2].Exercise;
    document.getElementById("Back2").innerHTML =str.link(data.Back[2].link)  + " Secondary muscle: " + " " + data.Back[2].Secondary + " " + data.Back[2].Descriptions;
});
