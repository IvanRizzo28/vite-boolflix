<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store
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
                <button @click="$emit('cerca')"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/stili/container.scss' as *;

header{
    padding: 30px 0;
    background-color: #000;
    margin-bottom: 20px;
}

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo{
    color: red;
}

input{
    padding: .625rem;
    border-radius: 4px;
    border: none;
    margin-right: .625rem;
}

button{
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: crimson;
    color: #fff;
    cursor: pointer;
}
</style>