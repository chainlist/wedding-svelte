<script>
  import { onMount } from 'svelte';
  import L, { Marker, icon } from 'leaflet';

  L.Marker.prototype.options.icon = icon({
    iconRetinaUrl: '/assets/marker.svg',
    iconUrl: '/assets/marker.svg',
    shadowUrl: '',
    iconSize: [54, 54],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

  onMount(() => {
    var map = L.map('map', {
        center: [19.2470763, -99.204842],
        zoom: 10
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker([19.2470763, -99.204842]).addTo(map);

  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css">
</svelte:head>

<div id="map"></div>

<style lang="scss">
#map {
  grid-column: span 2;
  width: 100%;
  height: 100%;
}
</style>