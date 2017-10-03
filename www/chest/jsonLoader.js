$.getJSON("fitJsonDataExample.json",function(data){
    console.log(data);
<<<<<<< HEAD:www/jsonLoader.js
    var str= data.Bicep[0].Exercise;
    document.getElementById("demo").innerHTML =str.link(data.Bicep[0].link);
    
    str= data.Bicep[1].Exercise;
    document.getElementById("demo1").innerHTML =str.link(data.Bicep[1].link);
    
    str= data.Chest[0].Exercise;
    document.getElementById("demo2").innerHTML =str.link(data.Chest[0].link);
});
=======
    var str = "link";
    
   
    document.getElementById("demo").innerHTML =   
data.Chest[0].Exercise + " " + data.Chest[0].Descriptions + " Secondary muscle: " + data.Chest[0].Secondary + " " + str.link(data.Chest[0].link);
    document.getElementById("demo1").innerHTML =   
data.Chest[1].Exercise + " " + data.Chest[1].Descriptions + " Secondary muscle: " + data.Chest[1].Secondary + " " + str.link(data.Chest[1].link);
    document.getElementById("demo2").innerHTML =   
data.Chest[2].Exercise + " " + data.Chest[2].Descriptions + " Secondary muscle: " + data.Chest[2].Secondary + " " +str.link(data.Chest[2].link);
});
    






function loadJSON(file){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open('GET', file, true); // Replace 'my_data' with the path to your file
    xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            json_data = JSON.parse(xmlhttp.responseText);
          }
    };
    xmlhttp.send(null);
}
>>>>>>> ff35559d030b2fa92a3c572961b9cd16c6f057ca:www/chest/jsonLoader.js
