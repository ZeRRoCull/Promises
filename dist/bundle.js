'use strict';

var moviesList = document.querySelector('#movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    moviesList.appendChild(img);
}

function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status == 200) {
                var json = JSON.parse(xhr.response);
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

var search = 'spider man';
var apikey = 'b51be06';

getData('http://www.omdbapi.com/?apikey=57d13b99&s=' + search).then(function (movies) {
    movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
}).catch(function (error) {
    return console.error(error);
});