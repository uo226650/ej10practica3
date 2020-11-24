const API_KEY = "623c8a4d1ed0493b828f265e099c2c7b";
//La API gratuíta solo permite recuperar noticias de hasta un mes de antigüedad.
//Para acceder a noticias anteriores es necesario pasar a un plan de pago
class Noticia {
    
    constructor(){
        this.frecuencia = 7;//Últimos 7 días por defecto
    }

    /**
     * Muestra la cuenta de artículos totales que contienen la palabra clave
     * y el titular de aquellos más populares
     * 
     * @param {String} palabraClave 
     */
    pideDatos(palabraClave){
        //var today = new Date("2020-11-05");
        var dias = this.frecuencia;
        var today = new Date();//new Date().toISOString().slice(0, 10);
        var from = new Date(today-dias*24*60*60*1000);
        console.log(today);
        console.log(from);
        //var to = "2020-11-05";
        var urlBusca = "https://newsapi.org/v2/everything?q=" + 
            palabraClave + "&sortBy=popularity" + 
            "&from=" + from.toISOString().slice(0, 10) + 
            "&to=" + today.toISOString().slice(0, 10) + 
            "&apiKey=" + 
            API_KEY;
        //var url = 'https://newsapi.org/v2/top-headlines?' +
        //'country=us' +
        //'&apiKey=' + API_KEY;
        $.ajax({
            dataType: "json",
            url: urlBusca,
            method: 'GET',
            success: function(datos){
                var articulos = datos.articles;
                var html = "";
                articulos.forEach(articulo => {
                    html += "<article>"
                        + "<img src='" + articulo.urlToImage + "' alt='Imagen del artículo'/>"
                        + "<h2><a href='" + articulo.url + "'>" 
                        + articulo.title + "</a></h2>"
                        + "<p>" + articulo.content
                        + "</p></article>"
                });
                $("main").append(html);
                $("#total").html("Artículos publicados: " + datos.totalResults);

            },
            error: function () {
                console.log("Error");
            }
          });
    }

    limpiarCampo(elemento){
        document.getElementById(elemento).value = "";
    }

    setRango(frecuencia){
        this.frecuencia = frecuencia;
    }

    buscar(){
        var palabraClave = document.getElementById("busqueda").value;
        this.pideDatos(palabraClave);
    }
    

}

var noticia = new Noticia();




