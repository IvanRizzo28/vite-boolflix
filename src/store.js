import { reactive } from "vue"; 

export const store= reactive({
    configApi:{
        key: 'api_key=ebb2c26e46be793ca430eafb09b70dfc',
        query: '&query=',
        linkMovie: 'https://api.themoviedb.org/3/search/movie?',
        linkTv: 'https://api.themoviedb.org/3/search/tv?'
    },
    movieList:[],
    tvList:[],
    cerca: ''
});