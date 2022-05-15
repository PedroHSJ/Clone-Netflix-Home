const API_KEY = "fa8367b24166839e18a329a3a990a6a3";
const API_BASE = "https://api.themoviedb.org/3";

const genero_originals = `/discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`;
const genero_recomendado = `/trending/all/week?language=pt-BR&api_key=${API_KEY}`;
const genero_EmAlta = `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`;
const genero_acao = `/discover/movie?with_genres=28&languge=pt-BR&api_key=${API_KEY}`;
const genero_animacao = `/discover/movie?with_genres=16&languge=pt-BR&api_key=${API_KEY}`;
const genero_terror = `/discover/movie?with_genres=27&languge=pt-BR&api_key=${API_KEY}`;
const genero_romance = `/discover/movie?with_genres=10749&languge=pt-BR&api_key=${API_KEY}`;
const genero_documentario = `/discover/movie?with_genres=99&languge=pt-BR&api_key=${API_KEY}`;

const originals = document.getElementById("Originals");
const recomendado = document.getElementById("Recomendado");
const emAlta = document.getElementById("EmAlta");
const acao = document.getElementById("Acao");
const animacao = document.getElementById("Animacao");
const terror = document.getElementById("Terror");
const romance = document.getElementById("Romance");
const documentario = document.getElementById("Documentario");

const div = document.getElementsByClassName("movie-row");

//Função que cria a exibição de cada poster.
function display(filme, div, index) {
    let img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w300/${filme.poster_path}`;

    img.style.order = index;
    // img.style.border = "5px solid #FFF"
    div.append(img);
}

//Função para embaralhar a ordem dos filmes.
function shuffle(array) {
    return array.sort((a, b) => 0.5 - Math.random());
}
//Função genérica de requisição a API
const getFilmes = async (genero, div) => {
    await axios.get(`${API_BASE}${genero}`).then((response) => {
        const filmes = response.data.results;
        // shuffle(filmes);
        filmes.map((filme, index) => {
            display(filme, div, index);
        });
    });
};

getFilmes(genero_originals, originals);
getFilmes(genero_recomendado, recomendado);
getFilmes(genero_EmAlta, emAlta);
getFilmes(genero_acao, acao);
getFilmes(genero_animacao, animacao);
getFilmes(genero_terror, terror);
getFilmes(genero_romance, romance);
getFilmes(genero_documentario, documentario);

let count = 20;
let index = 0;

const LeftOriginals = (div) => {
    index -= 1; //Decrementando o index para o item anterior "voltar"
    //Testando se é o "primeiro" item.
    if (count == 20) {
        count == 0;
        originals.children[index].style.order = 0;
        count--;
    
    }
     else {
        originals.children[index].style.order = (count--)-21;
        console.log(index);
    }
};

const RightOriginals = (div) => {
    if (index > 19) {
        index = 0;
    }
    originals.children[index++].style.order = count++;
    console.log(index);
};

// let scrollRecomendados = 0;
// const LeftRecomendado = (div) => {
//     scrollRecomendados -= 600;
//     div.style.marginLeft = `${-scrollRecomendados}px`;

//     if (scrollRecomendados < 0) {
//         scrollRecomendados = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightRecomendado = (div) => {
//     scrollRecomendados += 600;
//     div.style.marginLeft = `${-scrollRecomendados}px`;

//     if (scrollRecomendados > 1950) {
//         scrollRecomendados = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// let scrollEmAlta = 0;
// const LeftEmAlta = (div) => {
//     scrollEmAlta -= 600;
//     div.style.marginLeft = `${-scrollEmAlta}px`;

//     if (scrollEmAlta < 0) {
//         scrollEmAlta = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightEmAlta = (div) => {
//     scrollEmAlta += 600;
//     div.style.marginLeft = `${-scrollEmAlta}px`;

//     if (scrollEmAlta > 1950) {
//         scrollEmAlta = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// let scrollAcao = 0;
// const LeftAcao = (div) => {
//     scrollAcao -= 600;
//     div.style.marginLeft = `${-scrollAcao}px`;

//     if (scrollAcao < 0) {
//         scrollAcao = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightAcao = (div) => {
//     scrollAcao += 600;
//     div.style.marginLeft = `${-scrollAcao}px`;

//     if (scrollAcao > 1950) {
//         scrollAcao = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// let scrollAnimacao = 0;
// const LeftAnimacao = (div) => {
//     scrollAnimacao -= 600;
//     div.style.marginLeft = `${-scrollAnimacao}px`;

//     if (scrollAnimacao < 0) {
//         scrollAnimacao = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightAnimacao = (div) => {
//     scrollAnimacao += 600;
//     div.style.marginLeft = `${-scrollAnimacao}px`;

//     if (scrollAnimacao > 1950) {
//         scrollAnimacao = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// let scrollTerror = 0;
// const LeftTerror = (div) => {
//     scrollTerror -= 600;
//     div.style.marginLeft = `${-scrollTerror}px`;

//     if (scrollTerror < 0) {
//         scrollTerror = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightTerror = (div) => {
//     scrollTerror += 600;
//     div.style.marginLeft = `${-scrollTerror}px`;

//     if (scrollTerror > 1950) {
//         scrollTerror = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// let scrollRomance = 0;
// const LeftRomance = (div) => {
//     scrollRomance -= 600;
//     div.style.marginLeft = `${-scrollRomance}px`;

//     if (scrollRomance < 0) {
//         scrollRomance = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightRomance = (div) => {
//     scrollRomance += 600;
//     div.style.marginLeft = `${-scrollRomance}px`;

//     if (scrollRomance > 1950) {
//         scrollRomance = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// let scrollDocumentario = 0;
// const LeftDocumentario = (div) => {
//     scrollDocumentario -= 600;
//     div.style.marginLeft = `${-scrollDocumentario}px`;

//     if (scrollDocumentario < 0) {
//         scrollDocumentario = 0;
//         div.style.marginLeft = "0px";
//     }
// };

// const RightDocumentario = (div) => {
//     scrollDocumentario += 600;
//     div.style.marginLeft = `${-scrollDocumentario}px`;

//     if (scrollDocumentario > 1950) {
//         scrollDocumentario = 0;
//         div.style.marginLeft = "0px";
//     }
// };
