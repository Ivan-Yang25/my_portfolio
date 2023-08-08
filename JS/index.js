
document.addEventListener('DOMContentLoaded', () => {

    // Validacion de formulario.

    const form = document.querySelector('#form');
    const nombre = document.querySelector('#name');
    const mail = document.querySelector('#mail');
    const msg = document.querySelector('#msg');
    const btn = document.querySelector('#button');
    const noti = document.createElement('DIV');

    btn.addEventListener('click', event => {
        
        event.preventDefault();
        
        
            
            if (nombre.value.trim() === '' || mail.value.trim() === '' || msg.value.trim() === '') {
            
                noti.classList.add('alert', 'alert-danger');
                noti.innerHTML = 'Todos los campos son obligatorios';
                form.appendChild(noti);
    
            } else {
                
                noti.classList.remove('alert', 'alert-danger');
                noti.classList.add('alert', 'alert-success');
                noti.innerHTML = 'Mensaje enviado con exito!';
                form.appendChild(noti);
            };

            setTimeout(() => {

                form.removeChild(noti);

            }, 3000);
        
    });

});


