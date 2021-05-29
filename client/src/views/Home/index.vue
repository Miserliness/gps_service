<template>
    <div class="home">
        <template v-if="loading">
            Загрузка...
        </template>
        <Map v-else :points="coords" class="home__map"/>
    </div>
</template>

<script>
import Map from '@/components/Map.vue'
export default {
    components: { 
        Map 
    },
    data() {
        return {
            loading: true,
            coords: null
        }
    },
    methods: {
        getCoord() {
            fetch("/api/coordinates?id=1")
                .then(res => res.json())
                .then(json => {
                    this.coords = json
                    this.loading = false
                })
        }
    }
}
</script>

<style lang="scss">
.home {
    
}
</style>