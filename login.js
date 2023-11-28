function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
 
   if (predicate(element, index)) {
     
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
} 
//this are the highorder function


var datauser = [
    { username: 'ahmed',
     password: '123456789'
     },
    { username: 'hechmi',
     password: '987654321' },
    { username: 'hama', 
    password: '1920' }

]
//this my data in array of object 


function checkLogin(username, password) {
    var x = datauser.filter(function (user) {
        return user.username === username && user.password === password
    });

    return x.length > 0
}
// this function it will check (filter) around the data if the input of the user equal to the data

   
$("#loginBtn").on("click", function () {
    var username = $("#username").val()
    var password = $("#password").val()
    // here i refer to the user name and the password 


    if (checkLogin(username, password)) {
        $('#loginStatus').text('Login successful!')
        //if the function true it will change the <p> with 'Login successful!'


        
        window.location.href = "project.html"
        // >>>>> it will  change the view (location) of the window  to  the other html file

    } else {
        alert('Invalid username or password Please try again')
        // it will return alert with if its false
       
        $("#password").val("")
    }
});


    
    

   