var wms_layers = [];
var lyr_Cartedespaysages2019_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carte des paysages 2019",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cartedespaysages2019_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [373912.101903, 6523923.132359, 411412.795053, 6561423.825509]
                            })
                        });var lyr_Cartedespaysages2050_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carte des paysages 2050",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cartedespaysages2050_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [373912.101903, 6523923.132359, 411412.795053, 6561423.825509]
                            })
                        });var lyr_Toponymie_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Toponymie",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Toponymie_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [373912.101903, 6523923.132359, 411412.795053, 6561423.825509]
                            })
                        });

lyr_Cartedespaysages2019_0.setVisible(true);lyr_Cartedespaysages2050_1.setVisible(true);lyr_Toponymie_2.setVisible(false);
var layersList = [lyr_Cartedespaysages2019_0,lyr_Cartedespaysages2050_1,lyr_Toponymie_2];
