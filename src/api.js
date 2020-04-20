import axios from 'axios'

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key :"6b9bd926342ea831942d632cc9886879",
        language : "en-US"

    }
})
// instance.get("movie/now_playing")
// instance.interceptors.request.use(config => {
//     config.params = config.params || {};
//     console.log(config)
//     config.params['api_key'] = "6b9bd926342ea831942d632cc9886879";
//     config.params['language'] = 'en-US';
//     return config;
// })

export const movieApi = {
    nowPlaying : ()=> instance.get('movie/now_playing'),
    upcoming : () => instance.get('movie/upcoming'),
    popular : () => instance.get('movie/popular'),
    details : (movie_id) => instance.get(`movie/${movie_id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (title) => instance.get('/search/movie', {
        params : {
            query : encodeURIComponent(title)
        }     
    })
}


export const tvApi = {
    topRated : () => instance.get('tv/top_rated'),
    popular : ()=> instance.get('tv/popular'),
    airingToday : () => instance.get('tv/airing_today'),
    details : (tv_id) => instance.get(`tv/${tv_id}`, {
        params : {
            append_to_response : "videos"
        }
    }),
    search : (title) => instance.get('/search/tv', {
        params : {
            query : encodeURIComponent(title)
        } 
    })
}

// export default instance