const Api_Base = 'https://api.themoviedb.org/3';
const API_Key = 'fa8367b24166839e18a329a3a990a6a3';

const FilmesHeader = `/trending/all/day?language=pt-BR&api_key=${API_Key}`

const header = document.getElementsByTagName("header")[0];
const filtro = document.getElementById('filtro');

const h1 = document.getElementById('titulo-header');
const info = document.getElementById('info');
const details = document.getElementById('details');
const pontuacao = document.getElementById('pontuacao');
const year = document.getElementById('year');

const divbtn = document.createElement('div');
divbtn.id = 'buttons';

const Btnassistir = document.createElement('button');
Btnassistir.id = 'assistir';
Btnassistir.innerText = 'Assistir';

const Btnlista = document.createElement('button');
Btnlista.id = 'lista';
Btnlista.innerText = '+ Minha lista';

divbtn.appendChild(Btnassistir);
divbtn.appendChild(Btnlista);


function Random(max) {
    return i = Math.floor(Math.random() * max)
}


function isKeyExists(obj, key) {
    return obj.hasOwnProperty(key);
}

function InfoHeader(chosen) {

    if (isKeyExists(chosen, 'name')) {


        h1.innerHTML = chosen.name;
        info.innerHTML = chosen.overview;
        pontuacao.innerHTML = chosen.vote_average + ' pontos';
        year.innerHTML = chosen.first_air_date.split('-')[0];
    } else {

        h1.innerHTML = chosen.title;
        info.innerHTML = chosen.overview;
        pontuacao.innerHTML = chosen.vote_average + ' pontos';
        year.innerHTML = chosen.release_date.split('-')[0];
    }




    filtro.append(h1)
    filtro.append(details)
    filtro.append(info)
    filtro.appendChild(divbtn);
    details.append(pontuacao)
    details.append(year)
};

window.onload = setInterval(() => {
    axios.get(`${Api_Base}${FilmesHeader}`)
        .then(response => {
            const i = Random(response.data.results.length - 1);

            const chosen = response.data.results[i];

            header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${chosen.backdrop_path})`;

            InfoHeader(chosen)
        })
}, 300000)

axios.get(`${Api_Base}${FilmesHeader}`)
    .then(response => {
        const i = Random(response.data.results.length - 1);

        const chosen = response.data.results[i];

        header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${chosen.backdrop_path})`;

        InfoHeader(chosen)
    });



const nav = document.getElementsByTagName('nav')[0];



window.addEventListener('scroll', () => {
    if (scrollY >= 10) {
        nav.classList.add('black')
    } else if (scrollY === 0) {
        nav.classList.remove('black')
    }
});


