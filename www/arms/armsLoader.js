$.getJSON("arms.json",function(data){
    console.log(data);

    var str= data.Arms[0].Exercise;
    document.getElementById("Arms").innerHTML =str.link(data.Arms[0].link);
    
    str= data.Arms[1].Exercise;
    document.getElementById("Arms1").innerHTML =str.link(data.Arms[1].link);
    
});
