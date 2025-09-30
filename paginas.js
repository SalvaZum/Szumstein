const paginas = [
    {
    url:"https://pollos-hermanos-delta.vercel.app", 
    img:"imagenes/pollosHermanos.png", 
    nombre:"Pollos Hermanos", 
    descripcion: "El emprendimiento de los Pollos Hermanos no solo vende pollos de la mejor calidad a travez del boca en boca, sino que su gran pagina tambien te invita a probar de su cocina"
    },
    {
    url:"https://sentio-web.vercel.app", 
    img:"imagenes/sentioPortada.png", 
    nombre:"Sentio", 
    descripcion:"Ademas de un producto innovador, Sentio, presenta su pagina web con todas sus animaciones, y funciones."
    },
    {
    url:"https://vida-natural.vercel.app", 
    img:"imagenes/vidaNaturalPortada.png", 
    nombre:`Vida Natural <span class="pequeño">(pagina de demostración)</span>`, 
    descripcion:"A manos de la dietetica 'Vida Natural' les presentamos esta pagina innovadora con catalogo incluido, soporte tecnico con IA y mucho más."
    },
    {
    url:"https://power-gym-nu.vercel.app", 
    img:"imagenes/powerGymPortada.png", 
    nombre:`PowerGym <span class="pequeño">(pagina de demostración)</span>`, 
    descripcion:"El gimnasio 'PowerGym' les muestra su pagina que incluye una seccion de imagenes, formulario de contacto y más."
    },
    {
    url:"https://cookies-cba.vercel.app", 
    img:"imagenes/CookiesCBA.png", 
    nombre:`Cookies CBA <span class="pequeño">(pagina de demostración)</span>`, 
    descripcion:"De aquí no solo provienen las mejores galletas, sino tambien su pagina demuestra la calidad y excelencia que maneja este emprendimiento"
    }]

//Principal
const container = document.getElementById('paginas')
paginas.forEach(pagina => {
    const div = document.createElement('div');
    div.className="contenedor"
    div.innerHTML=`
        <h3 class="fade-in">${pagina.nombre}</h3>
        <div class="decorative-line fade-in" style="margin-bottom: 10px; margin-top: 0px; width:20%;"></div>
        <a href="${pagina.url}" class="fade-in"><img src="${pagina.img}" style="width: 90%; height: auto;" alt=""></a>
            
    `
    container.appendChild(div);
});

//Carrusel
const carrusel = document.getElementById('carrusel')

for (let i = 0; i < 2; i++){
    paginas.forEach(pagina =>{
        const div = document.createElement('div')
        div.innerHTML=`
            <a href="${pagina.url}"><img src="${pagina.img}" alt=""></a>
            <h4>${pagina.nombre}</h4>
            <div class="decorative-line"></div>
            <p>${pagina.descripcion}</p>
        `
        carrusel.appendChild(div)
});
}