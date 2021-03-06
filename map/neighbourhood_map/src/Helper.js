const apiCall = 'https://api.foursquare.com/v2/venues/search?client_id=O1W14F1AL2SS5JIKXXYMTOHERT0IV4AFKEVJGI3J2JNOJTVL&client_secret=O3PYRRN0HJOE0WWJ3Z2BL0UQBUJMLZ1NPVLSZQCNAI1WXXMC&v=20180323&limit=50&ll=53.54872,9.97855&query=restaurant'

export function venues() {
  return fetch(apiCall)
  .then(response => response.json().then(function(x){return x.response.venues}))
  .catch(e => alert("Something is wrong with your internet connection. Map cannot be displayed"))}

export function uniqueCategories(cuisines){
  const result = cuisines.reduce((current, next)=>{
    if(!current.some(a=> a.name === next.name)){
      current.push(next)}
      return current},[]);
  return result
}

export function populateInfoWindow(marker, infowindow, map) {
  if (infowindow.marker !== marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div><h3>'+ marker.name + '</h3>' + marker.address + '<h4>' + marker.category + '</h3></div>');
    infowindow.open(map, marker);
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
      marker.setAnimation(null)
    });
  }
}

export function handleError(error){
  if(error){alert("Google Maps do not respond. Please try again")}
}
