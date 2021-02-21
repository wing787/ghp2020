var map = L.map('map');

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
}).addTo(map);

//marker_イメージ
//L.marker([35.6727333,139.7997436]).addTo(map).bindPopup("場所：数矢小学校</br>不足物資:トイレットペーパー");

//GeoJSON
$.getJSON("https://ghp-voice.s3-ap-northeast-1.amazonaws.com/sample.geojson", function (data) {
    L.geoJson(data, {
      onEachFeature: function (feature, layer) {
    var field = '場所 :   ' + feature.properties.place + '<br>' + 
                '不足物資 :   ' + feature.properties.Supplies;
    layer.bindPopup(field);
}}).addTo(map);
});


// search
// var options = {
//             geojsonServiceAddress: "https://ghp-voice.s3-ap-northeast-1.amazonaws.com/sample.geojson",
//             placeholderMessage: "(例： 〇〇小学校、トイレットペーパー)",
//             notFoundMessage: "に一致する検索対象がありません。",
//             notFoundHint: "検索条件を変えて再検索してください。",
//             pointGeometryZoomLevel:   15
//         };
 
//         $("#searchContainer").GeoJsonAutocomplete(options);



// search 2
// var controlSearch = new L.Control.Search({
//     　　　　position:'topright',
//     　　　　layer: searchLayer,
//     　　　　initial: false,
//     　　　　zoom: 15,
//     　　　　marker: True
//     　　});
//      mymap.addControl( controlSearch );

map.setView([35.6599926,139.7442758], 13);
