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
        cerca() {
            if (this.store.cerca.trim() !== '') {
                const tmp = this.store.cerca.replace(" ", "+");
                const link = this.store.configApi.linkMovie + this.store.configApi.key + this.store.configApi.query + tmp;
                axios.get(link).then((response) => {
                    this.store.movieList = response.data.results;
                }
                );
                const linkTv = this.store.configApi.linkTv + this.store.configApi.key + this.store.configApi.query + tmp;
                axios.get(linkTv).then((response) => {
                    this.store.tvList = response.data.results;
                }
                );
            }
        }
    }
}
</script>

<template>
    <AppHeader @cerca="cerca" />
    <AppMain />
</template>

<style></style>
