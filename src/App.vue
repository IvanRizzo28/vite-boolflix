<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getMovie(tmp) {
            const link = this.store.configApi.linkMovie + this.store.configApi.key + this.store.configApi.query + tmp;
            axios.get(link).then((response) => {
                this.store.movieList = response.data.results;
                console.log(response.data.results);
            }
            );
        },
        getTv(tmp) {
            const linkTv = this.store.configApi.linkTv + this.store.configApi.key + this.store.configApi.query + tmp;
            axios.get(linkTv).then((response) => {
                this.store.tvList = response.data.results;
            }
            );
        },
        getGeneriTv(){
            const linkTv = this.store.configApi.linkGeneriTv + this.store.configApi.key;
            axios.get(linkTv).then((response) => {
                this.store.filter.generiTv = response.data.genres;
            }
            );
        },
        getGeneriMovie(){
            const link = this.store.configApi.linkGeneriMovie + this.store.configApi.key;
            axios.get(link).then((response) => {
                this.store.filter.generiMovie = response.data.genres;
            }
            );
        },
        cerca() {
            if (this.store.cerca.trim() !== '') {
                this.getMovie(this.store.cerca.replace(" ", "+"));
                this.getTv(this.store.cerca.replace(" ", "+"));
                this.store.cerca='';
            }
        }
    },
    created(){
        this.getGeneriTv();
        this.getGeneriMovie();
    }
}
</script>

<template>
    <AppHeader @cerca="cerca" />
    <AppMain />
</template>

<style></style>
