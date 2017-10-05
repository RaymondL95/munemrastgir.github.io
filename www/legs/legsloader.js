$.getJSON("legs.json",function(data){
    console.log(data);

    var str= data.legs[0].Exercise;
    document.getElementById("legs").innerHTML =str.link(data.legs[0].link)  + " Secondary muscle: " + " " + data.legs[0].Secondary + " " + data.legs[0].Descriptions;
    
    str= data.legs[1].Exercise;
    document.getElementById("legs1").innerHTML =str.link(data.legs[1].link)  + " Secondary muscle: " + " " + data.legs[1].Secondary + " " + data.legs[1].Descriptions;
    
    str= data.legs[2].Exercise;
    document.getElementById("legs2").innerHTML =str.link(data.legs[2].link)  + " Secondary muscle: " + " " + data.legs[2].Secondary + " " + data.legs[2].Descriptions;
});
