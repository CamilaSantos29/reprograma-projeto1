// Deverá listar livros que ainda não foram lidos

const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () =>{
    const livrosNaoLidos = read.question(`Deseja buscar por Livros não Lidos? S/N `).toUpperCase()

    if(livrosNaoLidos === 'S'){
        const naoLido = livros.filter(livro => livro.leu === false)
        console.table(naoLido)
    }
}

module.exports = listarLivrosNaoLidos
