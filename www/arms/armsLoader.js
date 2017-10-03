var Data = $.getJSON("arms.json",function(data){
    console.log(data);
    var str = "link";
    
    document.getElementById("demo").innerHTML =
data.Arms[0].Exercise + " " + data.Arms[0].Descriptions + " Secondary muscle: " + data.Arms[0].Secondary + " " + str.link(data.Arms[0].link);
    
    document.getElementById("demo1").innerHTML =   
data.Arms[1].Exercise + " " + data.Arms[0].Descriptions + " Secondary muscle: "  + data.Arms[0].Secondary + " " + str.link(data.Arms[1].link);
    
});
