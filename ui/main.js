//counter code
var button = document.getElementById('counter');
//var counter=0;
button.onclick = function() {
   // counter = counter+1;
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
        if(request.status ===200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            
            

        }
    }
    
};
//make the request
request.open('GET','http://nusrathyasin.imad.hasura-app.io/counter',true);
request.send(null);
};

//comment box
var submit =document.getElementById('submit_btn');
submit.onclick = function() {
    //create a request object
    var request = new XMLHttpRequest();
    //capture response nd store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status ===200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++){
                    list += '<li style="border-bottom:solid">' + names[i] + '</li>';
                    
                }
                document.write ('<p>Current time is: <span id="date-time">', new Date().toLocaleString(), '<\/span>.<\/p>')
if (document.getElementById) onload = function () {
	setInterval ("document.getElementById ('date-time').firstChild.data = new Date().toLocaleString()", 50)
}
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            
        
                }
            }
        };
var nameInput =document.getElementById('name'); 
var name = nameInput.value;
request.open('GET','http://nusrathyasin.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);

};
