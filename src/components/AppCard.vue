<script>
export default{
    name: 'card',
    props:{
        img: String,
        titolo: String,
        titoloOriginale: String,
        lingua: String,
        voto: Number
    },
    data(){
        return {
            flagLink: 'https://www.countryflagicons.com/FLAT/24/',
            imgLink: 'https://image.tmdb.org/t/p/w342'
        }
    },
    computed:{
        getFlag(){
            switch(this.lingua){
                case 'en':  return this.flagLink +"GB.png";
                case 'ja':  return this.flagLink +"JP.png";
                case 'ko':  return this.flagLink +"KR.png";
                case 'zh':  return this.flagLink +"CN.png";
                default: return this.flagLink + this.lingua.toLocaleUpperCase() + ".png";
            }
        },
        getImg(){
            if (this.img === null) return "https://placehold.jp/30/dd6699/ffffff/342x513.png?text=Immagine+non+trovata"; /* "https://placehold.co/342x513" */
            return this.imgLink + this.img;
        },
        getVoto(){
            let tmp= Math.ceil(this.voto/2);
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
            <div v-show="titolo !== titoloOriginale">
                Titolo: {{ titolo }}
            </div>
            <div>
                Titolo originale: {{ titoloOriginale }}
            </div>
            <div>
                <img :src="getFlag">
                Lingua: {{ lingua }}
            </div>
            <div>
            <!--    <font-awesome-icon icon="fa-regular fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-brands fa-twitter" /> -->
                Voto: {{ getVoto }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>