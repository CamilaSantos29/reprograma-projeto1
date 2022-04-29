//Deverá listar livros que já foram lidos e que são recomendados

const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () =>{
    const buscarRecomendados = read.question(`Deseja todos os livros que já foram lidos e recomendados? S/N `).toUpperCase()

       if(buscarRecomendados === 'S'){
        const livrosRecomendados = livros.filter(livro => livro.recomenda === true)
        console.table(livrosRecomendados)         
    }
   
}

module.exports = listarRecomendados