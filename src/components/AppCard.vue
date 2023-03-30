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
            return this.imgLink + this.img;
        },
        getVoto(){
            return Math.ceil(this.voto);
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
                Voto: {{ getVoto }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>