<template>
    <div class="home">
        <template v-if="coords.length === 0">
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
            coords: [{
                "id": 2,
                "lat": "55.772391",
                "lon": "37.685356",
                "box_id": 1
                },
                {
                "id": 3,
                "lat": "55.772391",
                "lon": "37.685356",
                "box_id": 1
                },
                {
                "id": 4,
                "lat": "55.772391",
                "lon": "37.685352",
                "box_id": 1
                },
                {
                "id": 5,
                "lat": "55.771391",
                "lon": "37.685352",
                "box_id": 1
                } 
            ]
        }
    },
    mounted() {
        //this.getCoord()
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