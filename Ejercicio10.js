const API_KEY = "623c8a4d1ed0493b828f265e099c2c7b";

class Noticia {
    
    constructor(){
        this.prueba();
    }


    /*
    prueba(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=es' +
        '&apiKey=' + API_KEY;
        $.getJSON( url )
            .done(function( json ) {
                console.log( "JSON Data: " + json.json() );
                //this.presentaDatos(json);
            })
            .fail(function( textStatus, error ) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
      });
    }*/
    
    prueba(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us' +
        '&apiKey=' + API_KEY;
        $.ajax({
            dataType: "json",
            url: url,
            method: 'GET',
            success: function(datos){
                var articulos = datos.articles;
                var parrafo = "<p>";
                articulos.forEach(articulo => {
                    parrafo += articulo;
                });
                parrafo += "</p>";
                $("main").html(parrafo);

            },
            error: function () {
                console.log("Error");
            }
          });
    }
    

}

var prueba = new Noticia();




