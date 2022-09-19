
function consultID() {

  var textElement1 = document.getElementById("id");
  var imagen =  document.getElementById("imagenResultado");
  id= textElement1.value;
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(res => res.json())
  //.then(texto => imagen.src = texto.image)

  .then(data =>{
    let element = document.getElementById('personaje')
    element.innerHTML= `<p>${data.name}</p> 
    <p>${data.species}</p>
    <img src= '${data.image}'/>'`
    console.log(data)
  })
  .catch(err=>console.log(err));
}
