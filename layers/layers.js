ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([79.075868, 17.998548, 80.225517, 19.048549]);
var wms_layers = [];

var lyr_idw_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "idw",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/idw_0.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [79.072177, 18.055754, 79.954252, 18.948901]
                            })
                        });
var format_pointsamplingelevatedgpkg_1 = new ol.format.GeoJSON();
var features_pointsamplingelevatedgpkg_1 = format_pointsamplingelevatedgpkg_1.readFeatures(json_pointsamplingelevatedgpkg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pointsamplingelevatedgpkg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointsamplingelevatedgpkg_1.addFeatures(features_pointsamplingelevatedgpkg_1);
var lyr_pointsamplingelevatedgpkg_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pointsamplingelevatedgpkg_1, 
                style: style_pointsamplingelevatedgpkg_1,
                popuplayertitle: "pointsamplingelevated.gpkg",
                interactive: true,
                title: '<img src="styles/legend/pointsamplingelevatedgpkg_1.png" /> pointsamplingelevated.gpkg'
            });

lyr_idw_0.setVisible(true);lyr_pointsamplingelevatedgpkg_1.setVisible(true);
var layersList = [lyr_idw_0,lyr_pointsamplingelevatedgpkg_1];
lyr_pointsamplingelevatedgpkg_1.set('fieldAliases', {'fid': 'fid', 'P5_PAN_CD_N18_000_E079_000_DEM_30m': 'P5_PAN_CD_N18_000_E079_000_DEM_30m', });
lyr_pointsamplingelevatedgpkg_1.set('fieldImages', {'fid': '', 'P5_PAN_CD_N18_000_E079_000_DEM_30m': '', });
lyr_pointsamplingelevatedgpkg_1.set('fieldLabels', {'fid': 'no label', 'P5_PAN_CD_N18_000_E079_000_DEM_30m': 'no label', });
lyr_pointsamplingelevatedgpkg_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});