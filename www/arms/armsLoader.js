$.getJSON("arms.json",function(data){
    console.log(data);

    var str= data.Arms[0].Exercise;
    document.getElementById("Arms").innerHTML =str.link(data.Arms[0].link) + data.Arms[0].Descriptions + " Secondary muscle: " + data.Arms[0].Secondary;
    
    str= data.Arms[1].Exercise;
    document.getElementById("Arms1").innerHTML =str.link(data.Arms[1].link) + data.Arms[1].Descriptions + " Secondary muscle: " + data.Arms[1].Secondary;
    
});
