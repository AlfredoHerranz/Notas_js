$(document).ready(function () {
    mostrar_tareas();
    $("#id_bbuscar").click(function () { 
       $("#id_tbuscar").filter(()=>{
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
       })
    });
          
        
});


function filtrar(){
    $.ajax({
        type: "post",
        url: "php/select.php",
        data: {nocache: Math.random()},
        dataType: "json",
        success: function (response) {
            response.forEach(element => {
                
                
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
                $("#id_tabla").append("<tr><td>"+element.id+"</td><td>"+element.nombre+"</td><td>"+element.descripcion+"</td><td></td></tr>");
            });
        }
    });
}
