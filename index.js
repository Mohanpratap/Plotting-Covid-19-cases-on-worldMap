const rec = document.querySelector(".btnr");
const inf = document.querySelector(".btni");
inf.addEventListener('click', updateMapi);
rec.addEventListener('click', updateMapr);
function updateMapi() {

    fetch("data.json").then(response => response.json()).then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.infected;

            if (cases > 255)
                color = 'rgb(255,0,0)';
            else {
                color = `rgb(${cases},0,0)`;
            }
            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        })
    })
}

function updateMapr() {

    fetch("data.json").then(response => response.json()).then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            recover = element.recovered;

            if (recover > 255)
                rcolor = 'rgb(0,255,0)';
            else {
                rcolor = `rgb(0,${recover},0)`;
            }
            new mapboxgl.Marker({
                draggable: false,
                color: rcolor
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        })
    })
}

