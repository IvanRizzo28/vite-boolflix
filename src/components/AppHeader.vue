<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            menuFilter: false
        }
    },
    methods: {
        setMenuFilter() {
            this.menuFilter = !this.menuFilter;
        },
        applicaFiltri(){
            this.menuFilter=false;
            console.log(this.store.filter.filterMovie,this.store.filter.filterTv,this.store.filter.movie,this.store.filter.tv);
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <h1 class="logo">LOGO</h1>
            <div>
                <input type="text" placeholder="Cerca" v-model="store.cerca">
                <button @click="$emit('cerca')" class="mr"><font-awesome-icon
                        icon="fa-solid fa-magnifying-glass" /></button>
                <button class="filter" @click="setMenuFilter">
                    Filtra
                </button>
            </div>
        </div>
        <div id="filterMenu" :class="(menuFilter) && 'show'">
            <font-awesome-icon icon="fa-solid fa-xmark" @click="setMenuFilter" class="i"/>
            <div>
                <select name="generiTv" id="gTv" v-model="store.filter.filterTv">
                    <option value="-1">Scegli un genere</option>
                    <option v-for="element in store.filter.generiTv" :value="element.id">{{ element.name }}</option>
                </select>
                <select name="generiMovie" id="gMovie" v-model="store.filter.filterMovie">
                    <option value="-1">Scegli un genere</option>
                    <option v-for="element in store.filter.generiMovie" :value="element.id">{{ element.name }}</option>
                </select>
            </div>
            <div>
                <label for="serieTv">Serie tv</label>
                <input type="checkbox" name="Serie tv" id="serieTv" v-model="store.filter.tv">
                <label for="film">film</label>
                <input type="checkbox" name="Film" id="film" v-model="store.filter.movie">
            </div>
            <button @click="applicaFiltri">Applica</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/stili/container.scss' as *;

.mr {
    margin-right: .3125rem;
}

header {
    padding: 30px 0;
    background-color: #000;
    margin-bottom: 20px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: red;
}

input {
    padding: .625rem;
    border-radius: 4px;
    border: none;
    margin-right: .625rem;
}

button {
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: crimson;
    color: #fff;
    cursor: pointer;

    &.filter {
        background-color: darkblue;
        position: relative;
    }
}

#filterMenu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -100%;
    background-color: #000;
    transition: 0.5s;
    padding: 20px;
    color: #fff;
    z-index: 100;

    .i{
        font-size: 1.5625rem;
        cursor: pointer;
    }
    select{
        display: block;
        padding: .3125rem 1.25rem;
        border: none;
        margin: 10px 0;
        width: 100%;
    }
    label{
        margin-right: .3125rem;
    }
    button{
        margin-top: .625rem;
    }
}

#filterMenu.show {
    right: 0;
}
</style>