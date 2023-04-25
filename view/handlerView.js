const mostrarPersonajes = (res) => {
    console.log('mostrarPersonajes > ', res.results);
    document.getElementById('contenido').innerHTML = ''
    let newHtml = '<div class="row">'
    res.results.forEach(element => {
        newHtml += `<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <img src="${element.image}" style="width:100%"/>
            ${element.name}
        </div>`
    });
    newHtml += '<div>'
    document.getElementById('contenido').innerHTML = newHtml
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