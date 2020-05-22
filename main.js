console.log('Hello World!');

const form = document.querySelector('form'); // grabbing an element on the page
let mensajeEnviado = document.getElementById('mensajeEnviado')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Hello World!');
    const formData = new FormData(form);
    const name = formData.get('name')
    const mail = formData.get('email')
    const content = formData.get('content')
    
    const mew = {
        name,
        mail,
        content

    };
    console.log(mew)
    form.reset();
    mensajeEnviado.classList.remove('none')

});

