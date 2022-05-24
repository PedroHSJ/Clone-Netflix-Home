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

    // img.style.order = index;
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

let scrollOriginals = 0;
const LeftOriginals = (div) => {
    scrollOriginals -= 500;
    div.style.marginLeft = `${-scrollOriginals}px`;

    if (scrollOriginals < 0) {
        scrollOriginals = 0;
        div.style.marginLeft = "0px";
    }
};

const RightOriginals = (div) => {
    scrollOriginals += 500;
    div.style.marginLeft = `${-scrollOriginals}px`;
    if(scrollOriginals > 2000){
        scrollOriginals = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollOriginals == 1500) {
        scrollOriginals += 250;
        div.style.marginLeft = `${-scrollOriginals}px`;
    }
};

let scrollRecomendados = 0;
const LeftRecomendado = (div) => {
    scrollRecomendados -= 500;
    div.style.marginLeft = `${-scrollRecomendados}px`;

    if (scrollRecomendados < 0) {
        scrollRecomendados = 0;
        div.style.marginLeft = "0px";
    }
};

const RightRecomendado = (div) => {
    scrollRecomendados += 500;
    div.style.marginLeft = `${-scrollRecomendados}px`;
    if(scrollRecomendados > 2000){
        scrollRecomendados = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollRecomendados == 1500) {
        scrollRecomendados += 250;
        div.style.marginLeft = `${-scrollRecomendados}px`;
    }
};

let scrollEmAlta = 0;
const LeftEmAlta = (div) => {
    scrollEmAlta -= 500;
    div.style.marginLeft = `${-scrollEmAlta}px`;

    if (scrollEmAlta < 0) {
        scrollEmAlta = 0;
        div.style.marginLeft = "0px";
    }
};

const RightEmAlta = (div) => {
    scrollEmAlta += 500;
    div.style.marginLeft = `${-scrollEmAlta}px`;
    if(scrollEmAlta > 2000){
        scrollEmAlta = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollEmAlta == 1500) {
        scrollEmAlta += 250;
        div.style.marginLeft = `${-scrollEmAlta}px`;
    }
};

let scrollAcao = 0;
const LeftAcao = (div) => {
    scrollAcao -= 500;
    div.style.marginLeft = `${-scrollAcao}px`;

    if (scrollAcao < 0) {
        scrollAcao = 0;
        div.style.marginLeft = "0px";
    }
};

const RightAcao = (div) => {
    scrollAcao += 500;
    div.style.marginLeft = `${-scrollAcao}px`;
    if(scrollAcao > 2000){
        scrollAcao = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollAcao == 1500) {
        scrollAcao += 250;
        div.style.marginLeft = `${-scrollAcao}px`;
    }
};

let scrollAnimacao = 0;
const LeftAnimacao = (div) => {
    scrollAnimacao -= 500;
    div.style.marginLeft = `${-scrollAnimacao}px`;

    if (scrollAnimacao < 0) {
        scrollAnimacao = 0;
        div.style.marginLeft = "0px";
    }
};

const RightAnimacao = (div) => {
    scrollAnimacao += 500;
    div.style.marginLeft = `${-scrollAnimacao}px`;
    if(scrollAnimacao > 2000){
        scrollAnimacao = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollAnimacao == 1500) {
        scrollAnimacao += 250;
        div.style.marginLeft = `${-scrollAnimacao}px`;
    }
};

let scrollTerror = 0;
const LeftTerror = (div) => {
    scrollTerror -= 500;
    div.style.marginLeft = `${-scrollTerror}px`;

    if (scrollTerror < 0) {
        scrollTerror = 0;
        div.style.marginLeft = "0px";
    }
};

const RightTerror = (div) => {
    scrollTerror += 500;
    div.style.marginLeft = `${-scrollTerror}px`;
    if(scrollTerror > 2000){
        scrollTerror = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollTerror == 1500) {
        scrollTerror += 250;
        div.style.marginLeft = `${-scrollTerror}px`;
    }
};

let scrollRomance = 0;
const LeftRomance = (div) => {
    scrollRomance -= 500;
    div.style.marginLeft = `${-scrollRomance}px`;

    if (scrollRomance < 0) {
        scrollRomance = 0;
        div.style.marginLeft = "0px";
    }
};

const RightRomance = (div) => {
    scrollRomance += 500;
    div.style.marginLeft = `${-scrollRomance}px`;
    if(scrollRomance > 2000){
        scrollRomance = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollRomance == 1500) {
        scrollRomance += 250;
        div.style.marginLeft = `${-scrollRomance}px`;
    }
};

let scrollDocumentario = 0;
const LeftDocumentario = (div) => {
    scrollDocumentario -= 500;
    div.style.marginLeft = `${-scrollDocumentario}px`;

    if (scrollDocumentario < 0) {
        scrollDocumentario = 0;
        div.style.marginLeft = "0px";
    }
};

const RightDocumentario = (div) => {
    scrollDocumentario += 500;
    div.style.marginLeft = `${-scrollDocumentario}px`;
    if(scrollDocumentario > 2000){
        scrollDocumentario = 0;
        div.style.marginLeft = "0px";
    }
    if (scrollDocumentario == 1500) {
        scrollDocumentario += 250;
        div.style.marginLeft = `${-scrollDocumentario}px`;
    }
};
