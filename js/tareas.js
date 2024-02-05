$(document).ready(function () {
    mostrar_tareas();
    $("#id_bbuscar").click(function () { 
    /*   $("#id_tbuscar").filter((a)=>{
        var palabra = $("#id_tbuscar").val();
        console.log(a.toLowerCase().includes(palabra.toLowerCase()));
    })*/
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
            $("#id_tabla tbody").html("");
            response.forEach(element => {
                if(element.nombre.toLowerCase().includes(palabra.toLowerCase())){
                    $("#id_tabla tbody").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td></td></tr>");
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
