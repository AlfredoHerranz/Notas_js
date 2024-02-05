$(document).ready(function () {
    mostrar_tareas();
    $("#id_bbuscar").click(function () { 
        filtrar();
    });
          
        
});


function filtrar(){
    $.ajax({
        type: "post",
        url: "php/select.php",
        data: {nocache: Math.random()},
        dataType: "json",
        success: function (response) {
            var palabra = $("#id_tbuscar").val();
            $("#id_listado_buscar").html("<tr><th>Id</th><th>Nombre</th><th>Descripción</th><th></th></tr>");
            response.forEach(element => {
                if(element.nombre.toLowerCase().includes(palabra.toLowerCase())){
                    $("#id_listado_buscar").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td></td>"
                    +"<td>"+"</td>"
                    +"</tr>");
                }
            });
        }
    });
}

function mostrar_tareas(){
    $.ajax({
        type: "post",
        url: "php/select.php",
        data: {nocache: Math.random()},
        dataType: "json",
        success: function (response) {
            response.forEach(element => {
                console.log(element);
                $("#id_tabla tbody").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td></td></tr>");
            });
        }
    });
}
