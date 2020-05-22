console.log('Hello World!');
// constantes para formContacto -----------------
// const form = document.querySelector('form'); // grabbing an element on the page
const formContacto = document.getElementById('formContacto')
let mensajeEnviado = document.getElementById('mensajeEnviado')
// ---------constante para formVender
const formVender = document.getElementById('fomrVender')


formContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Hello World!');
    const formData = new FormData(formContacto);
    const name = formData.get('name');
    const mail = formData.get('email');
    const content = formData.get('content');
    
    const datosContacto = {
        name,
        mail,
        content

    };
    console.log(datosContacto)
    formContacto.reset();
    mensajeEnviado.classList.remove('none')

});

