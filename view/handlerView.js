const mostrarPersonajes = (res) => {
    if (res.results) {
        console.log('mostrarPersonajes > ', res.results);
        document.getElementById('contenido').innerHTML = ''
        let newHtml = '<div class="row">'
        res.results.forEach(element => {
            newHtml += `<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" style="text-align: center">
                <img src="${element.image}" style="width:100%;border-radius:50%"/>
                ${element.name}
            </div>`
        });
        newHtml += '<div>'
        document.getElementById('contenido').innerHTML = newHtml
    } else {
        console.log('Ha ocurrido algo inesperado!')
        document.getElementById('contenido').innerHTML = ''
        let newHtml = '<div class="row">'
        newHtml += `<div class="col-12">
            <div class="alert alert-warning">
                Lo sentimos, el sistema ha fallado.
            </div>
        </div>`
        newHtml += '<div>'
        document.getElementById('contenido').innerHTML = newHtml
    }
}

const mostrarEpisodios = (res) => {
    console.log('mostrarEpisodios', res.results);
    document.getElementById('contenido').innerHTML = '';
    let newHtml = '<div class="row">'
    res.results.forEach(element => {
        newHtml += `<div class="col-xs-12 col-sm-12 col-md-4">
            ${element.name}
        </div>`
    });
    newHtml += '<div>'
    document.getElementById('contenido').innerHTML = newHtml
}