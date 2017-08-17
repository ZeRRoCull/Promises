
let moviesList = document.querySelector('#movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    moviesList.appendChild(img);
}

function getData(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function () {
            if (xhr.status == 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

let search = 'spider man';
let apikey = 'b51be06';

getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`)
    .then(movies => {
        movies.forEach(movie => addMovieToList(movie));
    })
    .catch(error => console.error(error));