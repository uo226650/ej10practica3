const API_KEY = "623c8a4d1ed0493b828f265e099c2c7b";

/*
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
*/

/*From a specific source BBC News
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    'apiKey=API_KEY';
var req = new Request(url);
fetch(req)
.then(function(response) {
  console.log(response.json());
})*/

/*search in everything endpoint
var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-11-16&' +
          'sortBy=popularity&' +
          'apiKey=API_KEY';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })*/

class Noticia {
    constructor(){
        this.prueba();
    }



    prueba(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us' +
        '&apiKey=' + API_KEY;
        $.getJSON( url )
            .done(function( json ) {
                console.log( "JSON Data: " + json.json() );
                this.presentaDatos(json);
            })
            .fail(function( textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
      });
    }
    /*
    prueba(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
    }*/

}

var prueba = new Noticia();




