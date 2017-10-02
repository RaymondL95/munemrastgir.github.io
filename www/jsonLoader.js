var Data = $.getJSON("fitJsonDataExample.json",function(data){
    console.log(data);
    document.getElementById("demo").innerHTML =
data.Bicep[0].Exercise + " " + data.Bicep[0].link;
    
    document.getElementById("demo1").innerHTML =   
data.Bicep[1].Exercise + " " + data.Bicep[1].link;

    document.getElementById("demo2").innerHTML =   
data.Chest[0].Exercise + " " + data.Chest[0].link;
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