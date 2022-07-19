//var url =  "https://mdn.github.io/learning-area/javascript/oojs/json/superheres.json";

var url =  "https://raw.githubusercontent.com/RUBENTOMALA/Proyectos/main/s.json";

function llenarInfo(datos){
    document.getElementById("squadName").innerHTML = datos.squadName;
    document.getElementById("homeTown").innerHTML = datos.homeTown;
    document.getElementById("since").innerHTML = datos.formed;    
    document.getElementById("base").innerHTML = datos.secretBase;
    document.getElementById("activo").innerHTML = datos.active;
}


function construirTabla(datos){
	var table = document.getElementById('myTable')
    var texto = "hola";
    var boton_p='<button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#datosLibro">Configuracion</button>';
    var boton_e='<button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#deudor"> <i class="fa-solid fa-eye"></i> </button>';
    
	for(let item of datos.members){
		var row = 
        "<tr class='shadow-sm'>"+
        "<td>"+ (Math.floor(Math.random()*10))+"</td>"+
            "<td id='nombre'>"+item.name+"</td>"+
		    "<td>"+item.age+"</td>"+
            "<td>"+item.secretIdentity+"</td>"+
            "<td>";

            for(let j=0; j<item.powers.length; j++){
                row += "<ul><li>" +item.powers[j]+ "</li></ul>";
            }
            row += "</td>";

            row += "<td>"+ (Math.floor(Math.random()*10))+"</td>";
            
            row+="<td>"+boton_p+boton_e+"</td></tr>";
            
		table.innerHTML += row;                   
    }
}
function agregarBoton(htmlID, texto, funcion) { 
	var o=document.getElementById(htmlID); 
	o.html+='<input type="button" value="'+texto+'" onclick="'+funcion+'">'; 
} 


function traerDatos (){
    const xhttp = new XMLHttpRequest(); 
	xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var datos = JSON.parse(this.responseText);
            //llenarInfo(datos);
            construirTabla(datos);
		}
	}
}traerDatos();


// <!-- Abrir / cerrar menu --> 
$("#content-wrapper").toggleClass("toggled");
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#content-wrapper").toggleClass("toggled");
});

$(function() {
          
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });

