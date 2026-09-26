// Envío del formulario de contacto a Formspree
const form = document.getElementById('form-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const datos = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: datos,
    headers: { 'Accept': 'application/json' }
  })
    .then(function (respuesta) {
      if (respuesta.ok) {
        mensajeExito.style.color = 'green';
        mensajeExito.textContent = 'Mensaje enviado correctamente.';
        form.reset();
      } else {
        mensajeExito.style.color = 'red';
        mensajeExito.textContent = 'Hubo un error al enviar el mensaje.';
      }
    })
    .catch(function () {
      mensajeExito.style.color = 'red';
      mensajeExito.textContent = 'No se pudo conectar. Intenta de nuevo.';
    });
});