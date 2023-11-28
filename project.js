

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



var cars= [
      {
        carName: "marcedes Amg",
        carPrice: "145000$",
        carColor: "black",
        carMark: "Marcedes",
        carLOgo: "https://logowik.com/content/uploads/images/282_mercedes_benz_logo.jpg",
        carImage: "https://w7.pngwing.com/pngs/273/121/png-transparent-mercedes-benz-sls-amg-car-mercedes-benz-c-class-2018-mercedes-benz-amg-gt-mercedes-benz-compact-car-convertible-car.png"
      },
      {
        carName: "BMW x6",
        carPrice: "45000$",
        carColor: "black",
        carMark: "BMW",
        carLOgo: "https://p7.hiclipart.com/preview/189/587/712/bmw-car-logo-luxury-vehicle-bmw-logo.jpg",
        carImage: "https://www.freepnglogos.com/uploads/bmw-png/bmw-clipart-bmw-logo-png-car-clip-art-and-photo-bmw-11.png"
      },
      {
        carName: "lamborghini urus",
        carPrice: "7845000$",
        carColor: "yellow",
        carMark: "lamborghini",
        carLOgo: "https://p7.hiclipart.com/preview/600/523/595/5bbc0b0c6da75.jpg",
        carImage: "https://p7.hiclipart.com/preview/586/647/804/5bbe04ddd534a.jpg"
      },
      {
        carName: "ferrari f40",
        carPrice: "362000$",
        carColor: "red",
        carMark: "ferrari",
        carLOgo: "https://icon2.cleanpng.com/20171220/tqe/ferrari-logo-png-image-5a3abf386f33d6.0122773515137994804555.jpg",
        carImage: "https://p1.hiclipart.com/preview/411/559/818/luxury-ferrari-laferrari-ferrari-spa-ferrari-488-car-enzo-ferrari-supercar-png-clipart.jpg"
      }
    ]
    // this is my data 
    $(".hi, #1").css({
      "width": "200px", 
      "height": "auto" })
      // this is the css for the carimage and the 

  function DisplayeCar() {
    var y = $("#input").val().toLowerCase();
    console.log(y);
    var arr = [];

    each(cars, function (e) {
        if (e.carName.toLowerCase() === y)

            arr.push(e);
            // in this condiont each will compere the input of the user and array of object "cars" 
    });

    console.log("this is my car", arr);

    if (arr.length > 0) {
        $(".hi").attr("src", arr[0].carImage)
        $(".Carname").text(arr[0].carName)
        $(".carprice").text("💵" + arr[0].carPrice)
        $(".colorofthecar").text("🎨" + arr[0].carColor)
        $("#1").attr("src", arr[0].carLOgo)
        // in the if condition he will check if the value that the user put it is true he will display the data
    } else {
        $(".hi").attr( "src","https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg")
        
        $(".Carname").text("your car is not in the data pls wait the update (: 👩‍💻 :) !!!")
        $(".carprice").text("!!")
        $(".colorofthecar").text("!!")
        $("#1").attr("src","https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg")
        // else he will return change the atrebiut of the imges and change the text
    }
}

  $("#btn").on("click" ,DisplayeCar )
  // this button will invoke the displaycare function 

 
     