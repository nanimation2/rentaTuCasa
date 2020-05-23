
const form = document.querySelector('form');
const formVender = document.getElementById('fomrVender')


formVender.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('hello  vender');
    const formData = new FormData(formVender);    
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
    const correo = formData.get('correo')
    const tipoPropiedad = formData.get('tipoPropiedad')
    const ciudad = formData.get('ciudad')
    const direccion = formData.get('direccion')
    const numDormitorios = formData.get('numDormitorios')
    const numBanos = formData.get('numBanos')
    const cochera = formData.get('cochera')
    const metrosConstruccion = formData.get('metrosConstruccion')
    const valor = formData.get('valor')

    const datosVender = {
        nombre,
        telefono,
        correo,
        tipoPropiedad,
        ciudad,
        direccion,
        numDormitorios,
        numBanos,
        cochera,
        metrosConstruccion,
        valor
    };
    console.log(datosVender)
});