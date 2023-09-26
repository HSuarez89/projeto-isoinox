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
    if (id < 5){
        id ++
        produto = document.getElementById('produto' + id)
        produto.style.opacity = 1
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

