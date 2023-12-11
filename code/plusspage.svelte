<script>
    import Menu from "$lib/Components/Menu.svelte";
    import { Hamburger } from 'svelte-hamburgers';
    import Infobox from "$lib/Components/Infobox.svelte";
    import Geocoding from "$lib/Weather/Geocoding.svelte";
    import Map from "$lib/Components/Map.svelte";
    import WeatherInfo from "$lib/Weather/WeatherInfo.svelte";
   // import { selectedLocationName } from "$lib/store.js";

        let open = false;

    </script>


    <body>
        <Hamburger bind:open --layer-height="2rem" --layer-width="10rem"/>
        <Menu bind:open />
        <Infobox>
            <Geocoding />
                <WeatherInfo/>
            <Map />
        </Infobox>
    </body>