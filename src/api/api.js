import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})
const key = 'api_key=a144f963c5ebd832183a3863807b2deb&language=ru'

export const movieAPI = {
    getMovieTop(page) {
        return instance.get(`movie/popular?${key}&page=${page}`)
    },
    getAboutMovie(id) {
        return instance.get(`movie/${id}?${key}`)
    },
    searchMovieByName(name) {
        return instance.get(`search/movie?${key}&query=${name}&page=1`)
    }
}

/*


https://api.themoviedb.org/3/search/movie?api_key=a144f963c5ebd832183a3863807b2deb&language=ru&query='такси'&page=1


*/