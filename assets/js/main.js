(function() {
var config = {
    apiKey: "AIzaSyC55gbQ9Ba2aqbhG15iu3YeOGkgFf5hbT0",
    authDomain: "aprediendo-e2289.firebaseapp.com",
    databaseURL: "https://aprediendo-e2289.firebaseio.com",
    projectId: "aprediendo-e2289",
    storageBucket: "aprediendo-e2289.appspot.com",
    messagingSenderId: "580827681964"
  };
  firebase.initializeApp(config);
} ());



//mapa

 $('#buscar').click(function(){
   var indice = $('#itemsd').val();
   var categoria = $('#categoria').val();
    
   var ref = firebase.database() .ref("data/"+indice);
   ref.on("value", function(snapshot){
     snapshot.forEach(function(item){
         var lat = item.val().lat;
         var lng = item.val().lng;
         var des = item.val().descripcion;
         var tip = item.val().tipo;
     add_marker({lat:lat,lng:lng},des,tip,categoria);
         
     });
   });
 });


 function initMap() {
  //inizializzo la mappa
  var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(-12.272915,-76.861038),
      zoomControl: true,
      
      zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
         
  },
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
     
    /* if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }*/

}






      

/*
 function initMap() {
  //inizializzo la mappa
  var mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(-12.272915,-76.861038),
      zoomControl: true,
      
      zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
         
  },
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

}*/
function add_marker(coords,des,tip,categoria){
var iconBase = 'assets/img/iconos/';
console.log(categoria);

if (tip==categoria) {
    if(tip=='Guarderia'){
           var marker = new google.maps.Marker({
              position: coords,
              map: map,
              icon: iconBase + 'markerguarderia.png'
          });
          var infowindow = new google.maps.InfoWindow({
            content:'<b>Categoria :</b> ' + tip + '<br><b>Descripcion : </b>'+des
          });
            marker.addListener('click',function(){
            infowindow.open(map,marker);
          });
    
       }
  
    else if(tip=='Parque') {
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
          icon: iconBase + 'markerparque.png'
      });
        var infowindow = new google.maps.InfoWindow({
        content:'<b>Categoria :</b> ' + tip + '<br><b>Descripcion : </b>'+des
      });
        marker.addListener('click',function(){
        infowindow.open(map,marker);
      });
    }
        else if(tip=='Museo'){
                    var marker = new google.maps.Marker({
          position: coords,
          map: map,
          icon: iconBase + 'markermuseo.png'
      });
        var infowindow = new google.maps.InfoWindow({
        content:'<b>Categoria :</b> ' + tip + '<br><b>Descripcion : </b>'+des
      });
        marker.addListener('click',function(){
        infowindow.open(map,marker);
      });
            }

}   
else if (categoria =='Todos'){
    if(tip=='Guarderia'){
           var marker = new google.maps.Marker({
              position: coords,
              map: map,
              icon: iconBase + 'markerguarderia.png'
          });
          var infowindow = new google.maps.InfoWindow({
            content:'<b>Categoria :</b> ' + tip + '<br><b>Descripcion : </b>'+des
          });
            marker.addListener('click',function(){
            infowindow.open(map,marker);
          });
    
       }
    else if(tip=='Museo'){
                    var marker = new google.maps.Marker({
          position: coords,
          map: map,
          icon: iconBase + 'markermuseo.png'
      });
        var infowindow = new google.maps.InfoWindow({
        content:'<b>Categoria :</b> ' + tip + '<br><b>Descripcion : </b>'+des
      });
        marker.addListener('click',function(){
        infowindow.open(map,marker);
      });
            }
    
    else  {
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
          icon: iconBase + 'markerparque.png'
      });
        var infowindow = new google.maps.InfoWindow({
        content:'<b>Categoria :</b> ' + tip + '<br><b>Descripcion : </b>'+des
      });
        marker.addListener('click',function(){
        infowindow.open(map,marker);
      });
    }
}

}






/*
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center:{lat:-12.272915,lng:-76.861038}
  });
setMarkers(map);

}
var beaches = {
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
};
function setMarkers(map) {

  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: new google.maps.Size(20, 32),

    origin: new google.maps.Point(0, 0),

    anchor: new google.maps.Point(0, 32)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}


/*
$('#buscar').click(function(){
var query = firebase.database().ref("data/Lurin");
query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var lat = childSnapshot.child("lat").val();
      var lng = childSnapshot.child("lng").val()

      //var lng = childSnapshot.child("u1").child("lng").val();
      var key = childSnapshot.key; // "ada"
      var da = childSnapshot.value;
      console.log(key);
  return true;
  });
});
});*/
