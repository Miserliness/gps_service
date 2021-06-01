<template>
  <div id="map" class="map"></div>
</template>

<script>
import 'ol/ol.css';
import {Map, View} from 'ol';
import Point from 'ol/geom/Point.js'
import Feature from 'ol/Feature';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer'
import {OSM, Vector as VectorSource} from 'ol/source'
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import { fromLonLat,transform } from 'ol/proj.js'

export default {
    props: ["points"],
    mounted() {
        this.initMap()
    },
    methods: {
        initMap() {
            const lon = Number(this.points[0].lon)
            const lat = Number(this.points[0].lat)
            
            this.source = new VectorSource()
            this.vector = new VectorLayer({source: this.source})
            this.feature = new Feature({
                geometry: new Point(
                    fromLonLat([lon, lat]),
                )
            })
            this.layer = new VectorLayer({
                source: this.source
            }) 
            
            this.map = new Map({
                target: "map",
                layers: [
                    new TileLayer({
                        source: new OSM(),
                        preload: 3,
                        crossOrigin: null
                    })
                ],
                view: new View({
                    center: fromLonLat([this.points[0].lon, this.points[0].lat]),
                    zoom: 17
                })
            })
            let pixels = null;
            this.map.addLayer(this.layer)
            const self = this
            this.points.forEach(p => this.addIcon(this.transformPoint(p), p.id))
        },
        addIcon(coordinate, id) {
            const featureToAdd = new Feature({
                geometry: new Point(coordinate)
            })
            featureToAdd.set("id", id)
            const style = new Style({
                image:  new CircleStyle({
                    radius: 5,
                    fill: new Fill({color: 'red'}),
                    stroke: new Stroke({color: 'black', width: 1}),
                })
            })
            featureToAdd.setStyle(style)
            if(this.needClear) this.source.clear()
            this.source.addFeatures([featureToAdd])
        },
        transformPoint({lon, lat}) {
            return transform([lon, lat], 'EPSG:4326', 'EPSG:3857')
        },
        setCenter({lon, lat}) {
            const view = new View({
                center: fromLonLat([ lon, lat ]),
                zoom: 17
            });
            this.map.setView(view)
        }
    }
}
</script>

<style lang="scss">
.map {
    height: 100vh;
}
</style>