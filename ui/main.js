//counter code
var button = document.getElementById('counter');
button.onClick = function() {
    
    //Create a request object
    var request = new XMLHttprequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
        if(request.readyState ===200){
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
