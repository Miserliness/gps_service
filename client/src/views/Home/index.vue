<template>
    <div class="home">
        <template v-if="coords.length === 0">
            <div class="loader">
                <loader></loader>
            </div>
        </template>
        <Map v-else :points="coords" class="home__map"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Map from '@/components/Map.vue'
import Loader from '../../components/Loader.vue'
export default {
    components: { 
        Map,
        Loader 
    },
    data() {
        return {
            loading: true,
            coords: []
        }
    },
    mounted() {
        this.checkUser()
        this.getCoord()
        this.startInterval()
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        checkUser() {
            if (!this.user) {
                this.$router.push('/auth')
            }
        },
        startInterval() {
            setInterval(() => {
                this.getCoord()
            }, 30000)
        },
        getCoord() {
            fetch("http://164.90.171.231:8080/api/lastCoord?id=1")
                .then(res => res.json())
                .then(json => {
                    this.coords = json.map(i => {
                        return {
                            id: i.id,
                            lat: i.lat,
                            lon: i.lng,
                            box_id: i.box_id
                        }
                    })
                    this.loading = false
                })
        }
    }
}
</script>

<style lang="scss">
.home {
    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }
}
</style>