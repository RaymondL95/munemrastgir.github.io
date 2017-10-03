$.getJSON("fitJsonDataExample.json",function(data){
    console.log(data);
    var str= data.Bicep[0].Exercise;
    document.getElementById("demo").innerHTML =str.link(data.Bicep[0].link);
    
    str= data.Bicep[1].Exercise;
    document.getElementById("demo1").innerHTML =str.link(data.Bicep[1].link);
    
    str= data.Chest[0].Exercise;
    document.getElementById("demo2").innerHTML =str.link(data.Chest[0].link);
});