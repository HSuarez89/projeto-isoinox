// Animação da seção "Produtos"

window.onload = function(){
    var id = 1
    var produto = document.getElementById('produto' + id)
    produto.style.opacity = 1
    setTimeout(function() {
        trocaProduto(id, produto)
    }, 3000)
}

function trocaProduto(id, produto){
    produto.style.opacity = 0
    const largura = document.getElementById('produto1').width
    const distDaEsquerda = document.getElementById('produto1').offsetLeft
    if (id < 5){
        id ++
        produto = document.getElementById('produto' + id)
        produto.style.left = distDaEsquerda + 'px'
        produto.style.opacity = 1
        produto.style.width = largura + 'px'
        setTimeout(function(){
            trocaProduto(id, produto)
        }, 3000)
    } else {
        produto.style.opacity = 0
        id = 1
        produto = document.getElementById('produto' + id)
        produto.style.opacity = 1
        setTimeout(function(){
            trocaProduto(id, produto)
        }, 3000)
    }
}

// Links para download do catálogo

var download = document.querySelectorAll('.download')
download.forEach(item =>{
    item.addEventListener('click', catalogoDownload)
})

function catalogoDownload(){
    var link = document.createElement('a')
    link.href = 'download/folderdigital.pdf'
    link.target = '_blank'
    link.click()
}

// Link Instagram

var insta = document.getElementById('insta')
insta.addEventListener('click', direcionaInstagram)

function direcionaInstagram(){
    var linkInsta = document.createElement('a')
    linkInsta.href = 'https://www.instagram.com/isoinox/'
    linkInsta.target = '_blank'
    linkInsta.click()
}

// Rolagem da página

var clique = document.querySelectorAll('.menu')
clique.forEach (item =>{
    item.addEventListener('click', rolarPagina)
})

function rolarPagina(e){
    linkAcionado = e.target
    idLink = linkAcionado.getAttribute('id')
    idSecao = document.getElementById('secao' + idLink)
    var distanciaTopo = idSecao.offsetTop
    window.scrollTo({top: distanciaTopo, behavior: 'smooth'})
}



