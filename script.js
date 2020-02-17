/*
température DONE
humidité DONE
vit vent DONE
picto DONE

input pour changer de ville DONE
*/
var buttonS = document.querySelector('#submit');

function meteo(city) {
    const Http = new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',france&lan=fr&units=metric&appid=34939a24bb0bdd18cbaa8ab286d22b79';

    Http.open("GET", url, true);
    Http.send();

    Http.addEventListener('readystatechange', function() {

        if (this.readyState == 4 && this.status == 200) {
            //Transformation de la REQUEST en JSON 
            var meteo = JSON.parse(this.responseText);
            console.log(meteo);
            //Récupération des différentes données du JSON et affichage
            document.querySelector('#town').innerHTML = meteo.name;
            document.querySelector('#tempHumi').innerHTML = parseInt(meteo.main.temp) + "°C. Humidité : " + meteo.main.humidity;
            document.querySelector('#windSpeed').innerHTML = meteo.wind.speed + "km/h.";
            document.querySelector('#weatherSign').src = "http://openweathermap.org/img/wn/" + meteo.weather[0].icon + "@2x.png";

            var borne = [{
                    "Numero de la borne": 0,
                    "Commune": "Arleux",
                    "NomDeLaBorne": "Arleux- Eglise",
                    "AdresseImplantation": "2 Rue Georges Lefebvre",
                    "Code postal": 59151,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9231235.44,
                    "x_coord_cc50": 1707458.69,
                    "POINT_X_wgs84": 3.10465,
                    "POINT_Y_wgs84": 50.28079
                },
                {
                    "Numero de la borne": 2,
                    "Commune": "Cuincy",
                    "NomDeLaBorne": "Cuincy- Mediatheque",
                    "AdresseImplantation": "Place Edith Piaf",
                    "Code postal": 59553,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9242777.64,
                    "x_coord_cc50": 1703385.2,
                    "POINT_X_wgs84": 3.0476,
                    "POINT_Y_wgs84": 50.3846
                },
                {
                    "Numero de la borne": 3,
                    "Commune": "Cuincy",
                    "NomDeLaBorne": "Cuincy - Rue Cardinal Allen",
                    "AdresseImplantation": "2 Rue du Cardinal Allen",
                    "Code postal": 59553,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9242620.71,
                    "x_coord_cc50": 1704041.67,
                    "POINT_X_wgs84": 3.05683,
                    "POINT_Y_wgs84": 50.38318
                },
                {
                    "Numero de la borne": 4,
                    "Commune": "Dechy",
                    "NomDeLaBorne": "Dechy - Centre Hospitalier",
                    "AdresseImplantation": "Centre Hospitalier",
                    "Code postal": 59187,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9237476.97,
                    "x_coord_cc50": 1707144.63,
                    "POINT_X_wgs84": 3.10036,
                    "POINT_Y_wgs84": 50.33691
                },
                {
                    "Numero de la borne": 5,
                    "Commune": "Dechy",
                    "NomDeLaBorne": "Dechy - Parc d'activites du Luc",
                    "AdresseImplantation": "Parc d'activites du Luc",
                    "Code postal": 59187,
                    "PuissanceElectrique": "45-50 kva",
                    "y_coord_cc50": 9238528.73,
                    "x_coord_cc50": 1708286.78,
                    "POINT_X_wgs84": 3.11643,
                    "POINT_Y_wgs84": 50.34635
                },
                {
                    "Numero de la borne": 6,
                    "Commune": "Dechy",
                    "NomDeLaBorne": "Dechy - Ilet Goulois",
                    "AdresseImplantation": "2 rue Leon Gambetta",
                    "Code postal": 59187,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9239328.88,
                    "x_coord_cc50": 1708954.9,
                    "POINT_X_wgs84": 3.12584,
                    "POINT_Y_wgs84": 50.35353
                },
                {
                    "Numero de la borne": 7,
                    "Commune": "Flers En Escrebieux",
                    "NomDeLaBorne": "Flers en Escrebieux - Place du Marche",
                    "AdresseImplantation": "32-62 Rue du Marche",
                    "Code postal": 59128,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9244314.05,
                    "x_coord_cc50": 1706123.1,
                    "POINT_X_wgs84": 3.08612,
                    "POINT_Y_wgs84": 50.39839
                },
                {
                    "Numero de la borne": 8,
                    "Commune": "Flines-lez-Raches",
                    "NomDeLaBorne": "Flines Lez Reches - Rue Dupire",
                    "AdresseImplantation": "Rue Dupire",
                    "Code postal": 59148,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9247381.06,
                    "x_coord_cc50": 1712963.72,
                    "POINT_X_wgs84": 3.18244,
                    "POINT_Y_wgs84": 50.42585
                },
                {
                    "Numero de la borne": 9,
                    "Commune": "Lallaing",
                    "NomDeLaBorne": "Lallaing - Maire",
                    "AdresseImplantation": "Place Jean Jaures",
                    "Code postal": 59167,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9243433.25,
                    "x_coord_cc50": 1712011.6,
                    "POINT_X_wgs84": 3.16892,
                    "POINT_Y_wgs84": 50.39038
                },
                {
                    "Numero de la borne": 10,
                    "Commune": "Lambres-lez-Douai",
                    "NomDeLaBorne": "Lambres Lez Douai - Mairie",
                    "AdresseImplantation": "272 Rue Jean Jaures",
                    "Code postal": 59552,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9239254.33,
                    "x_coord_cc50": 1704554.83,
                    "POINT_X_wgs84": 3.064,
                    "POINT_Y_wgs84": 50.35291
                },
                {
                    "Numero de la borne": 11,
                    "Commune": "Roost-Warendin",
                    "NomDeLaBorne": "Roost Warendin - Parc d'activites du Chevalement",
                    "AdresseImplantation": "6 Rue des Molettes",
                    "Code postal": 59286,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9245670.21,
                    "x_coord_cc50": 1707689.76,
                    "POINT_X_wgs84": 3.10819,
                    "POINT_Y_wgs84": 50.41056
                },
                {
                    "Numero de la borne": 12,
                    "Commune": "Roost-Warendin",
                    "NomDeLaBorne": "Roost Warendin - Mairie",
                    "AdresseImplantation": "210 rue pierre Brossolette",
                    "Code postal": 59286,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9246537.95,
                    "x_coord_cc50": 1707235.52,
                    "POINT_X_wgs84": 3.10181,
                    "POINT_Y_wgs84": 50.41837
                },
                {
                    "Numero de la borne": 13,
                    "Commune": "Sin-le-Noble",
                    "NomDeLaBorne": "Sin Le Noble - Eco Park",
                    "AdresseImplantation": "Eco Park",
                    "Code postal": 59450,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9238819.83,
                    "x_coord_cc50": 1708222.7,
                    "POINT_X_wgs84": 3.11554,
                    "POINT_Y_wgs84": 50.34897
                },
                {
                    "Numero de la borne": 14,
                    "Commune": "Sin le noble",
                    "NomDeLaBorne": "Sin Le Noble - Place Centrale",
                    "AdresseImplantation": "Place Jean Jaures",
                    "Code postal": 59450,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240528.11,
                    "x_coord_cc50": 1708026.4,
                    "POINT_X_wgs84": 3.11281,
                    "POINT_Y_wgs84": 50.36433
                },
                {
                    "Numero de la borne": 15,
                    "Commune": "Sin Le Noble",
                    "NomDeLaBorne": "Sin le Noble -Piscine Tournesol",
                    "AdresseImplantation": "Piscine Tournesol",
                    "Code postal": 59450,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240280.31,
                    "x_coord_cc50": 1708255.24,
                    "POINT_X_wgs84": 3.11602,
                    "POINT_Y_wgs84": 50.3621
                },
                {
                    "Numero de la borne": 16,
                    "Commune": "Sin Le Noble",
                    "NomDeLaBorne": "Sin Le Noble - Sourceane",
                    "AdresseImplantation": "Centre aquatique Sourceane",
                    "Code postal": 59450,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9238870.95,
                    "x_coord_cc50": 1707198.84,
                    "POINT_X_wgs84": 3.10115,
                    "POINT_Y_wgs84": 50.34944
                },
                {
                    "Numero de la borne": 17,
                    "Commune": "Auby",
                    "NomDeLaBorne": "Auby - Parc des Pres Loribes",
                    "AdresseImplantation": "Parc d'activites les Pres Loribes",
                    "Code postal": 59950,
                    "PuissanceElectrique": "45-50 kva",
                    "y_coord_cc50": 9245481.05,
                    "x_coord_cc50": 1704483.05,
                    "POINT_X_wgs84": 3.06307,
                    "POINT_Y_wgs84": 50.4089
                },
                {
                    "Numero de la borne": 18,
                    "Commune": "Waziers",
                    "NomDeLaBorne": "Waziers - Parking Lycee Paul Langevin",
                    "AdresseImplantation": "Rue Paul Langevin",
                    "Code postal": 59119,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9243089.48,
                    "x_coord_cc50": 1707261.38,
                    "POINT_X_wgs84": 3.10211,
                    "POINT_Y_wgs84": 50.38737
                },
                {
                    "Numero de la borne": 19,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai- Boulevard Breguet",
                    "AdresseImplantation": "1 Boulevard Louis Breguet",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9242296.53,
                    "x_coord_cc50": 1705681.54,
                    "POINT_X_wgs84": 3.07988,
                    "POINT_Y_wgs84": 50.38026
                },
                {
                    "Numero de la borne": 20,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Hetel Communautaire",
                    "AdresseImplantation": "797-821 Rue Jean Perrin",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9244204.51,
                    "x_coord_cc50": 1707283.63,
                    "POINT_X_wgs84": 3.10244,
                    "POINT_Y_wgs84": 50.39739
                },
                {
                    "Numero de la borne": 21,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Parking Gare SNCF",
                    "AdresseImplantation": "134 Boulevard de Liege",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241540.39,
                    "x_coord_cc50": 1706366.3,
                    "POINT_X_wgs84": 3.0895,
                    "POINT_Y_wgs84": 50.37345
                },
                {
                    "Numero de la borne": 22,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Parc Jacques VERNER",
                    "AdresseImplantation": "Parc Jacques Vernier",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9242477.96,
                    "x_coord_cc50": 1706568.73,
                    "POINT_X_wgs84": 3.09236,
                    "POINT_Y_wgs84": 50.38188
                },
                {
                    "Numero de la borne": 23,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - La clochette",
                    "AdresseImplantation": "106 Rue Gabriel Faure",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241898.31,
                    "x_coord_cc50": 1706808.23,
                    "POINT_X_wgs84": 3.09572,
                    "POINT_Y_wgs84": 50.37666
                },
                {
                    "Numero de la borne": 24,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Piscine des Glacis",
                    "AdresseImplantation": "195 Rue d'Arleux",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240283.69,
                    "x_coord_cc50": 1705704.4,
                    "POINT_X_wgs84": 3.08017,
                    "POINT_Y_wgs84": 50.36216
                },
                {
                    "Numero de la borne": 25,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Arkeos",
                    "AdresseImplantation": "4300 Route de Tournai",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9245517.71,
                    "x_coord_cc50": 1709226.54,
                    "POINT_X_wgs84": 3.1298,
                    "POINT_Y_wgs84": 50.40917
                },
                {
                    "Numero de la borne": 26,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Cinema le Majestic",
                    "AdresseImplantation": "600 Boulevard de la Republique",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241787.32,
                    "x_coord_cc50": 1705364.98,
                    "POINT_X_wgs84": 3.07542,
                    "POINT_Y_wgs84": 50.37568
                },
                {
                    "Numero de la borne": 27,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Arsenal",
                    "AdresseImplantation": "97 Rue Pierre Dubois",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241614.06,
                    "x_coord_cc50": 1706114.12,
                    "POINT_X_wgs84": 3.08595,
                    "POINT_Y_wgs84": 50.37412
                },
                {
                    "Numero de la borne": 28,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Place Carnot",
                    "AdresseImplantation": "137 Place Carnot",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241389.17,
                    "x_coord_cc50": 1706133.3,
                    "POINT_X_wgs84": 3.08622,
                    "POINT_Y_wgs84": 50.37209
                },
                {
                    "Numero de la borne": 29,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Place du Barlet",
                    "AdresseImplantation": "170 Place du Barlet",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240588.56,
                    "x_coord_cc50": 1705847.14,
                    "POINT_X_wgs84": 3.08218,
                    "POINT_Y_wgs84": 50.3649
                },
                {
                    "Numero de la borne": 30,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Place Schumann",
                    "AdresseImplantation": "Place Robert Schumann",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240947.4,
                    "x_coord_cc50": 1705957.09,
                    "POINT_X_wgs84": 3.08374,
                    "POINT_Y_wgs84": 50.36812
                },
                {
                    "Numero de la borne": 31,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Tribunal",
                    "AdresseImplantation": "Place Charles de Pollinchove",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241193.97,
                    "x_coord_cc50": 1705556.53,
                    "POINT_X_wgs84": 3.07811,
                    "POINT_Y_wgs84": 50.37034
                },
                {
                    "Numero de la borne": 32,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Fonderie",
                    "AdresseImplantation": "57 Rue de la Fonderie",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240901.3,
                    "x_coord_cc50": 1705282.78,
                    "POINT_X_wgs84": 3.07426,
                    "POINT_Y_wgs84": 50.36772
                },
                {
                    "Numero de la borne": 33,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Mairie",
                    "AdresseImplantation": "2 Rue Francis Godin",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240861.71,
                    "x_coord_cc50": 1705715.01,
                    "POINT_X_wgs84": 3.08033,
                    "POINT_Y_wgs84": 50.36736
                },
                {
                    "Numero de la borne": 34,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Rue Charles Bourseul",
                    "AdresseImplantation": "600 Rue Charles Bourseul",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9242019.33,
                    "x_coord_cc50": 1705008.96,
                    "POINT_X_wgs84": 3.07042,
                    "POINT_Y_wgs84": 50.37777
                },
                {
                    "Numero de la borne": 35,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Rue Guynemer",
                    "AdresseImplantation": "477 Rue Geoges Guymener",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9241373.09,
                    "x_coord_cc50": 1704242.08,
                    "POINT_X_wgs84": 3.05963,
                    "POINT_Y_wgs84": 50.37197
                },
                {
                    "Numero de la borne": 36,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Avenue De Tassigny",
                    "AdresseImplantation": "245 Avenue du Marechal de Tassigny",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9242380,
                    "x_coord_cc50": 1704706.35,
                    "POINT_X_wgs84": 3.06617,
                    "POINT_Y_wgs84": 50.38101
                },
                {
                    "Numero de la borne": 37,
                    "Commune": "Lambres-lez-Douai",
                    "NomDeLaBorne": "Lambres Lez Douai - Parc d'activites de l'Ermiatge 1",
                    "AdresseImplantation": "Parc d'activites Ermitage 1",
                    "Code postal": 59552,
                    "PuissanceElectrique": "45-50 kva",
                    "y_coord_cc50": 9238996.66,
                    "x_coord_cc50": 1702854.49,
                    "POINT_X_wgs84": 3.04011,
                    "POINT_Y_wgs84": 50.35061
                },
                {
                    "Numero de la borne": 38,
                    "Commune": "Raimbeaucoiurt",
                    "NomDeLaBorne": "Raimbeaucourt - Mairie",
                    "AdresseImplantation": "Place Clemenceau",
                    "Code postal": "",
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9248886.03,
                    "x_coord_cc50": 1707148.43,
                    "POINT_X_wgs84": 3.10063,
                    "POINT_Y_wgs84": 50.43948
                },
                {
                    "Numero de la borne": 39,
                    "Commune": "Douai",
                    "NomDeLaBorne": "Douai - Boulevard Pasteur",
                    "AdresseImplantation": "373 Boulevardd Pasteur",
                    "Code postal": 59500,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9240508.13,
                    "x_coord_cc50": 1705196.51,
                    "POINT_X_wgs84": 3.07304,
                    "POINT_Y_wgs84": 50.36418
                },
                {
                    "Numero de la borne": 40,
                    "Commune": "AUBY",
                    "NomDeLaBorne": "Auby - Mediatheque",
                    "AdresseImplantation": "Place de la Republique",
                    "Code postal": 59950,
                    "PuissanceElectrique": "3-22 kva",
                    "y_coord_cc50": 9246139.44,
                    "x_coord_cc50": 1703857.19,
                    "POINT_X_wgs84": 3.05427,
                    "POINT_Y_wgs84": 50.41482
                }
            ];

            //Création de la map via API
            var divMap = document.createElement('div');
            divMap.id = 'map';
            var sectionMap = document.querySelector('#insertMap');
            sectionMap.appendChild(divMap);

            var map = L.map('map').setView([meteo.coord.lat, meteo.coord.lon], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([meteo.coord.lat, meteo.coord.lon]).addTo(map);

            //Rajout de marqueur pour les bornes de recharge électrique Région Douai
            for (var i = 0; i < borne.length; i++) {
                var marker = L.marker([borne[i].POINT_Y_wgs84, borne[i].POINT_X_wgs84]).addTo(map);
                marker.bindPopup(borne[i].NomDeLaBorne + "</br>" + borne[i].AdresseImplantation + "</br>" + borne[i].PuissanceElectrique);
            }
        };
    });
};

window.addEventListener('load', meteo("Paris"));

buttonS.addEventListener('click', function() {
    if (document.querySelector('#where').value != "") {

        meteo(document.querySelector('#where').value);
        var mapToDel = document.querySelector('#map');
        document.querySelector('#insertMap').removeChild(mapToDel);
    }
});