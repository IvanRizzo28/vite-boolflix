<script>
import AppCard from './AppCard.vue';
import {store} from '../store.js';

export default{
    name: 'AppMain',
    components:{
        AppCard
    },
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <h2 v-show="this.store.movieList.length > 0">Film</h2>
    <div class="row" id="movie">
        <div class="col" v-for="element in store.movieList">
            <AppCard 
                :img="element.poster_path"
                :titolo="element.title"
                :titoloOriginale="element.original_title"
                :lingua="element.original_language"
                :voto="element.vote_average"
            />
        </div>
    </div>
    <h2 v-show="this.store.tvList.length > 0">Serie Tv</h2>
    <div class="row" id="tv">
        <div class="col" v-for="element in store.tvList">
            <AppCard 
                :img="element.poster_path"
                :titolo="element.name"
                :titoloOriginale="element.original_name"
                :lingua="element.original_language"
                :voto="element.vote_average"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>