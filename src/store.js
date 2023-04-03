import { reactive } from "vue"; 

export const store= reactive({
    configApi:{
        key: 'api_key=ebb2c26e46be793ca430eafb09b70dfc',
        query: '&query=',
        linkMovie: 'https://api.themoviedb.org/3/search/movie?',
        linkTv: 'https://api.themoviedb.org/3/search/tv?',
        linkGeneriMovie: 'https://api.themoviedb.org/3/genre/movie/list?',
        linkGeneriTv: 'https://api.themoviedb.org/3/genre/tv/list?',
    },
    movieList:[],
    tvList:[],
    cerca: '',
    filter: {
        generiTv: [],
        generiMovie: [],
        tv: false,
        movie: false,
        filterMovie: -1,
        filterTv: -1
    }
});