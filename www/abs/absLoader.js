$.getJSON("abs.json",function(data){
    console.log(data);

    var str= data.Abs[0].Exercise;
    document.getElementById("Abs").innerHTML =str.link(data.Abs[0].link) + " " + data.Abs[0].Descriptions +  data.Arms[0].Secondary;
    
    str= data.Abs[1].Exercise;
    document.getElementById("Abs1").innerHTML =str.link(data.Abs[1].link) + " " + data.Abs[1].Descriptions + data.Arms[1].Secondary;
    
    
});
