// Function to hide the preloader
function hidePreloader() {
    document.getElementById('preloader').style.display = 'none';
}

// Add a listener for the map's load event
var mapIframe = document.getElementById('gmap_canvas');
mapIframe.addEventListener('load', hidePreloader);