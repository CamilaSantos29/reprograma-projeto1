//Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.

const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () =>{
    const livrosOrdenados = read.question(`Deseja todos os livros ordenados de forma crescente por quantidade de paginas? S/N `).toUpperCase()

    if(livrosOrdenados === 'S'){
        const listaOrdenada = livros.sort((livroAntigo,livroAtual) => {
            return livroAntigo.paginas - livroAtual.paginas
            
        })
        console.table(listaOrdenada)
    }
}


module.exports = listarLivrosOrdenados

