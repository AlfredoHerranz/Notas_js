$(document).ready(function () {
    mostrar_tareas();
    $("#id_bbuscar").click(()=> { 
        $("#id_listado_buscar").css("display", "block");
        filtrar();
    });
    $("")
        
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
                    $("#id_listado_buscar").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td id='id_boton"+element.id+"'></td></tr>");
                    $('<button class="modificar"/>').val(element.id).text("Modificar").appendTo("#id_boton"+element.id);
                    $('<button class="eliminar"/>').val(element.id).text("Eliminar").appendTo("#id_boton"+element.id);
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
                $("#id_tabla tbody").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td id='id_boton"+element.id+"'></td></tr>");
                $('<button class="modificar"/>').val(element.id).text("Modificar").appendTo("#id_boton"+element.id);
                $('<button class="eliminar"/>').val(element.id).text("Eliminar").appendTo("#id_boton"+element.id);
            });
        }
    });
}
