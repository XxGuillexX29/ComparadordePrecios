import producto from "./productos.js";

const guardarlista = document.getElementById("guardar");
const mostrarlista = document.getElementById("mostrar");
const ordenarlista = document.getElementById("ordenar");


document.getElementById("guardar").onclick = ()=> {
   let nuevoProducto = new producto(
          document.getElementById("productos").value,
          Number(document.getElementById("precio").value),
          document.getElementById("supermercados").value,
   guardarlista(nuevoProducto));  

       document.getElementById("productos").value = "";
       document.getElementById("precio").value = "";
       document.getElementById("supermercados").value = "";
};

document.getElementById("mostrar").onclick = ()=> {






}
  //  let producto = {
  // "nombre" : document.getElementById("productos"),
  // "precio" : document.getElementById("precio"),
  // "marca" : document.getElementById("supermercados")
   // }
   // guardarlista = (producto)
//}


//document.getElementById("guardar").onclick = ()=> {




//}

   


        
