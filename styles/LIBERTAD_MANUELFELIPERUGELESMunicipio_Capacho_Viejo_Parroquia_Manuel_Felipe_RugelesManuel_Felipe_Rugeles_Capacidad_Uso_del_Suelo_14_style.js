var size = 0;
var placement = 'point';
function categories_LIBERTAD_MANUELFELIPERUGELESMunicipio_Capacho_Viejo_Parroquia_Manuel_Felipe_RugelesManuel_Felipe_Rugeles_Capacidad_Uso_del_Suelo_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Clase IV':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(233,44,92,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Clase V':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(44,212,167,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Clase VI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,230,98,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_LIBERTAD_MANUELFELIPERUGELESMunicipio_Capacho_Viejo_Parroquia_Manuel_Felipe_RugelesManuel_Felipe_Rugeles_Capacidad_Uso_del_Suelo_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("clase_suel");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_LIBERTAD_MANUELFELIPERUGELESMunicipio_Capacho_Viejo_Parroquia_Manuel_Felipe_RugelesManuel_Felipe_Rugeles_Capacidad_Uso_del_Suelo_14(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
