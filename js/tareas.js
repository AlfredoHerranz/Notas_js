$(document).ready(function () {
    mostrar_tareas();
    //Boton para filtrar las tareas
    $("#id_bbuscar").click(()=> { 
        if($("#id_tbuscar").val() == ""){
            $("#listado_buscar_div").slideUp(300);    
        }else{
            $("#listado_buscar_div").slideDown(300);
            filtrar();
        }
    });
    
    //Boton del formulario para insertar datos
    $("#id_guardar").click(()=>{
        //Si el formulario está en modo insertar tareas
        if($("#id_guardar").val()=="Guardar Tarea"){
            insertar_tarea()
        }
        //Si el formulario está en modo modificar tareas
        else if ($("#id_guardar").val()=="Modificar Tarea"){
            insertar_modif();
        }
        
    });
    
    //Botones de la tabla
    $("table").click((e)=> {
        if($(e.target).attr("eliminar")){
            eliminar(e);
        }else if($(e.target).attr("modificar")){
            modificar(e);
        }
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
                    $("#id_listado_buscar").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td id='id_boton"+element.id+"'></td></tr>");
                    $('<button class="modificar"/>').attr("modificar",element.id).text("Modificar").appendTo("#id_boton"+element.id);
                    $('<button class="eliminar"/>').attr("eliminar",element.id).text("Eliminar").appendTo("#id_boton"+element.id);
                }
            });
        }
    });
}

//Funcion que muestra las tareas
function mostrar_tareas(){
    $("#id_tabla tbody").html("");
    $.ajax({
        type: "post",
        url: "php/select.php",
        data: {nocache: Math.random()},
        dataType: "json",
        success: function (response) {
            response.forEach(element => {
                $("#id_tabla tbody").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td id='id_boton"+element.id+"'></td></tr>");
                $('<button class="modificar"/>').attr("modificar",element.id).text("Modificar").appendTo("#id_boton"+element.id);
                $('<button class="eliminar"/>').attr("eliminar",element.id).text("Eliminar").appendTo("#id_boton"+element.id);
            });
        }
    });
}

//Funcion para insertar la tarea
function insertar_tarea(){
    if($("#id_nombre").val()==""){
        window.alert("Introduce un nombre de la tarea");

    }else if($("#id_descripcion").val()==""){
        window.alert("Introduce una descripción de la tarea");
    }else{
        $.ajax({
            type: "post",
            url: "php/insertar.php",
            data: {nombre: $("#id_nombre").val(), descripcion: $("#id_descripcion").val(),nocache: Math.random()},
            dataType: "json",
            success: function (response) {
                console.log("Insertado");
                mostrar_tareas();
            }
        });
    }
}

//Funcion para borrar la tarea
function eliminar(e){
    $.ajax({
        type: "post",
        url: "php/borrar.php",
        data: {id: $(e.target).attr("eliminar"),nocache: Math.random()},
        dataType: "",
        success: function (response) {
            console.log("Eliminado");
            mostrar_tareas();
        }
    });
}

//Funcion para mostrar los datos actuales de la tarea a modificar
function modificar(e){
    $.ajax({
        type: "post",
        url: "php/select1.php",
        data: {id: $(e.target).attr("modificar"),nocache: Math.random()},
        dataType: "json",
        success: function (response) {
            $("#id_nombre").val(response.nombre);
            $("#id_descripcion").val(response.descripcion);
            $("#id_guardar").val("Modificar Tarea").attr("id_tarea", response.id);
        }
    });
}

//Funcion para modificar los datos de la tarea
function insertar_modif(){
    $.ajax({
        type: "post",
        url: "php/modificar.php",
        data: {id: $("#id_guardar").attr("id_tarea"), nombre: $("#id_nombre").val(), descripcion: $("#id_descripcion").val(),nocache: Math.random()},
        dataType: "json",
        success: function (response) {
            console.log("Modificado");
            mostrar_tareas();
        }
    });
}
