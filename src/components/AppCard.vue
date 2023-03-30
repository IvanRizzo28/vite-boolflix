<script>
export default {
    name: 'card',
    props: {
        img: String,
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number,
        overview: String
    },
    data() {
        return {
            flagLink: 'https://www.countryflagicons.com/FLAT/24/',
            imgLink: 'https://image.tmdb.org/t/p/w342'
        }
    },
    computed: {
        getFlag() {
            switch (this.lingua) {
                case 'en': return this.flagLink + "GB.png";
                case 'ja': return this.flagLink + "JP.png";
                case 'ko': return this.flagLink + "KR.png";
                case 'zh': return this.flagLink + "CN.png";
                default: return this.flagLink + this.lingua.toLocaleUpperCase() + ".png";
            }
        },
        getImg() {
            if (this.img === null) return "https://placehold.jp/30/dd6699/ffffff/342x513.png?text=Immagine+non+trovata"; /* "https://placehold.co/342x513" */
            return this.imgLink + this.img;
        },
        getVoto() {
            let tmp = Math.ceil(this.voto / 2);
            return tmp;
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="copertina">
            <img :src="getImg" :alt="titolo">
        </div>
        <div class="content">
            <div>
                <span>Titolo:</span> {{ titolo }}
            </div>
            <div v-show="titolo !== titoloOriginale">
                <span>Titolo originale:</span> {{ titoloOriginale }}
            </div>
            <div>
                <!--    <font-awesome-icon icon="fa-regular fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-brands fa-twitter" /> -->
                <span>Voto:</span> {{ getVoto }}
            </div>
            <div>
                <img :src="getFlag">
            </div>
            <div class="overview" v-if="overview !== ''">
                <span>Overview:</span> {{ overview }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 100%;
    position: relative;
    &:hover .copertina{
        opacity: 0.2;
    }
    &:hover .content{
        opacity: 1;
        z-index: 2;
    }
}


.content {
    position: absolute;
    transition: 0.5s;
    padding: .625rem;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    color: #fff;
    opacity: 0;
    z-index: -1;
    overflow-y: auto;

    & > div{
        margin-bottom: .3125rem;

        span{
            font-weight: bold;
            font-size: 1.0625rem;
        }
    }
}

.copertina {
    opacity: 1;
    transition: 0.5s;

    img {
        width: 100%;
        aspect-ratio: 1/1.5;
        object-fit: cover;
        transition: 1s;
    }
}
</style>