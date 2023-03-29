<script>
export default{
    name: 'card',
    props:{
        img: String,
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number
    }
}
</script>

<template>
    <div class="card">
        <div class="copertina">
            <img :src="img" :alt="titolo">
        </div>
        <div class="content">
            <div>
                Titolo: {{ titolo }}
            </div>
            <div>
                Titolo originale: {{ titoloOriginale }}
            </div>
            <div>
                Lingua: {{ lingua }}
            </div>
            <div>
                Voto: {{ voto }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>