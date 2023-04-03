<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
    computed:{
        getMovieFilter(){
            if (!this.store.filter.movie && this.store.filter.filterMovie > -1){
                return this.store.movieList.filter(element => {
                    let tmp=false;
                    element.genre_ids.forEach(e => {
                       if (e === this.store.filter.filterMovie) tmp=true; 
                    });
                    if (tmp) return element;
                });
            }
            else if (this.store.filter.movie) return;
            return this.store.movieList;
        },
        getTvFilter(){
            if (!this.store.filter.tv && this.store.filter.filterTv > -1){
                return this.store.tvList.filter(element => {
                    let tmp=false;
                    element.genre_ids.forEach(e => {
                       if (e === this.store.filter.filterTv) tmp=true; 
                    });
                    if (tmp) return element;
                });
            }
            else if (this.store.filter.tv) return;
            return this.store.tvList;
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 v-show="this.store.movieList.length > 0">Film</h2>
        <div class="row" id="movie">
            <div class="col" v-for="element in getMovieFilter">
                <AppCard :img="element.poster_path" :titolo="element.title" :titoloOriginale="element.original_title"
                    :lingua="element.original_language" :voto="element.vote_average" :overview="element.overview"/>
            </div>
        </div>
        <h2 v-show="this.store.tvList.length > 0">Serie Tv</h2>
        <div class="row" id="tv">
            <div class="col" v-for="element in getTvFilter">
                <AppCard :img="element.poster_path" :titolo="element.name" :titoloOriginale="element.original_name"
                    :lingua="element.original_language" :voto="element.vote_average" :overview="element.overview" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/stili/container.scss' as *;

h2{
    font-size: 1.5625rem;
    color: #fff;
    text-transform: uppercase;
}
</style>