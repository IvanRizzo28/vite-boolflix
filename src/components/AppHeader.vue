<script>
import {store} from '../store.js';

export default{
    name: 'AppHeader',
    data(){
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <h1>Logo</h1>
        <div>
            <input type="text" placeholder="Cerca" v-model="store.cerca">
            <button @click="$emit('cerca')">Cerca</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/stili/container.scss' as *;
</style>