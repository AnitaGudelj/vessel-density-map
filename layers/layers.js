ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1013778.975074, 3643870.739470, 3076726.454033, 6708973.582885]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SailingPC_Ljeto_2017_2023_mean_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SailingPC_Ljeto_2017_2023_mean<br />\
    <img src="styles/legend/SailingPC_Ljeto_2017_2023_mean_1_0.png" /> 0,0000<br />\
    <img src="styles/legend/SailingPC_Ljeto_2017_2023_mean_1_1.png" /> 0,1444<br />\
    <img src="styles/legend/SailingPC_Ljeto_2017_2023_mean_1_2.png" /> 0,2888<br />\
    <img src="styles/legend/SailingPC_Ljeto_2017_2023_mean_1_3.png" /> 0,4331<br />\
    <img src="styles/legend/SailingPC_Ljeto_2017_2023_mean_1_4.png" /> 0,5775<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SailingPC_Ljeto_2017_2023_mean_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9763441.130289, 1684718.735672, 10868458.806786, 22743541.353028]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_SailingPC_Ljeto_2017_2023_mean_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SailingPC_Ljeto_2017_2023_mean_1];
