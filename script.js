// Données des pays avec coordonnées
const countries = {
    'AF': { name: 'Afghanistan', capital: 'Kaboul', lat: 33.9391, lng: 67.0955 },
    'AL': { name: 'Albanie', capital: 'Tirana', lat: 41.3275, lng: 19.8187 },
    'DZ': { name: 'Algérie', capital: 'Alger', lat: 36.7538, lng: 3.0588 },
    'AD': { name: 'Andorre', capital: 'Andorre-la-Vieille', lat: 42.5069, lng: 1.5211 },
    'AO': { name: 'Angola', capital: 'Luanda', lat: -8.8383, lng: 13.2344 },
    'AR': { name: 'Argentine', capital: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
    'AM': { name: 'Arménie', capital: 'Erevan', lat: 40.1887, lng: 44.5086 },
    'AU': { name: 'Australie', capital: 'Canberra', lat: -35.2809, lng: 149.1300 },
    'AT': { name: 'Autriche', capital: 'Vienne', lat: 48.2082, lng: 16.3738 },
    'AZ': { name: 'Azerbaïdjan', capital: 'Bakou', lat: 40.3856, lng: 49.8671 },
    'BS': { name: 'Bahamas', capital: 'Nassau', lat: 25.0343, lng: -77.3963 },
    'BH': { name: 'Bahreïn', capital: 'Manama', lat: 26.2361, lng: 50.5544 },
    'BD': { name: 'Bangladesh', capital: 'Dacca', lat: 23.8103, lng: 90.4125 },
    'BB': { name: 'Barbade', capital: 'Bridgetown', lat: 13.2039, lng: -59.5432 },
    'BE': { name: 'Belgique', capital: 'Bruxelles', lat: 50.8503, lng: 4.3517 },
    'BZ': { name: 'Belize', capital: 'Belmopan', lat: 17.2508, lng: -88.7713 },
    'BJ': { name: 'Bénin', capital: 'Porto-Novo', lat: 6.4969, lng: 2.6289 },
    'BT': { name: 'Bhoutan', capital: 'Thimphou', lat: 27.5142, lng: 89.6386 },
    'BY': { name: 'Biélorussie', capital: 'Minsk', lat: 53.9045, lng: 27.5615 },
    'BO': { name: 'Bolivie', capital: 'La Paz', lat: -16.5000, lng: -68.1500 },
    'BA': { name: 'Bosnie-Herzégovine', capital: 'Sarajevo', lat: 43.8564, lng: 18.4131 },
    'BW': { name: 'Botswana', capital: 'Gaborone', lat: -24.6282, lng: 25.8933 },
    'BR': { name: 'Brésil', capital: 'Brasília', lat: -15.8267, lng: -47.8711 },
    'BN': { name: 'Brunei', capital: 'Bandar Seri Begawan', lat: 4.8830, lng: 114.9388 },
    'BG': { name: 'Bulgarie', capital: 'Sofia', lat: 42.6977, lng: 23.3219 },
    'BF': { name: 'Burkina Faso', capital: 'Ouagadougou', lat: 12.3714, lng: -1.5197 },
    'BI': { name: 'Burundi', capital: 'Gitega', lat: -3.5699, lng: 29.8739 },
    'KH': { name: 'Cambodge', capital: 'Phnom Penh', lat: 11.5564, lng: 104.9282 },
    'CM': { name: 'Cameroun', capital: 'Yaoundé', lat: 3.8667, lng: 11.5167 },
    'CA': { name: 'Canada', capital: 'Ottawa', lat: 45.4215, lng: -75.6972 },
    'CV': { name: 'Cap-Vert', capital: 'Praia', lat: 14.9218, lng: -23.6345 },
    'CL': { name: 'Chili', capital: 'Santiago', lat: -33.4489, lng: -70.6693 },
    'CN': { name: 'Chine', capital: 'Pékin', lat: 39.9042, lng: 116.4074 },
    'CY': { name: 'Chypre', capital: 'Nicosie', lat: 35.1264, lng: 33.4299 },
    'CO': { name: 'Colombie', capital: 'Bogotá', lat: 4.7110, lng: -74.0721 },
    'KM': { name: 'Comores', capital: 'Moroni', lat: -11.8769, lng: 43.3732 },
    'CG': { name: 'Congo', capital: 'Brazzaville', lat: -4.2634, lng: 15.2429 },
    'KP': { name: 'Corée du Nord', capital: 'Pyongyang', lat: 39.0392, lng: 125.7625 },
    'KR': { name: 'Corée du Sud', capital: 'Séoul', lat: 37.5665, lng: 126.9780 },
    'CR': { name: 'Costa Rica', capital: 'San José', lat: 9.9281, lng: -84.0907 },
    'HR': { name: 'Croatie', capital: 'Zagreb', lat: 45.8150, lng: 15.9819 },
    'CU': { name: 'Cuba', capital: 'La Havane', lat: 23.1136, lng: -82.3666 },
    'DK': { name: 'Danemark', capital: 'Copenhague', lat: 55.6761, lng: 12.5683 },
    'DJ': { name: 'Djibouti', capital: 'Djibouti', lat: 11.5897, lng: 43.1456 },
    'DM': { name: 'Dominique', capital: 'Roseau', lat: 15.2977, lng: -61.3940 },
    'EG': { name: 'Égypte', capital: 'Le Caire', lat: 30.0444, lng: 31.2357 },
    'AE': { name: 'Émirats Arabes Unis', capital: 'Abu Dhabi', lat: 24.4539, lng: 54.3773 },
    'EC': { name: 'Équateur', capital: 'Quito', lat: -0.2263, lng: -78.5249 },
    'ER': { name: 'Érythrée', capital: 'Asmara', lat: 15.3397, lng: 38.9250 },
    'ES': { name: 'Espagne', capital: 'Madrid', lat: 40.4168, lng: -3.7038 },
    'EE': { name: 'Estonie', capital: 'Tallinn', lat: 59.4370, lng: 24.7536 },
    'US': { name: 'États-Unis', capital: 'Washington D.C.', lat: 38.8951, lng: -77.0369 },
    'ET': { name: 'Éthiopie', capital: 'Addis-Abeba', lat: 9.0320, lng: 38.7469 },
    'FJ': { name: 'Fidji', capital: 'Suva', lat: -18.1416, lng: 178.4419 },
    'FI': { name: 'Finlande', capital: 'Helsinki', lat: 60.1695, lng: 24.9354 },
    'FR': { name: 'France', capital: 'Paris', lat: 48.8566, lng: 2.3522 },
    'GA': { name: 'Gabon', capital: 'Libreville', lat: 0.4162, lng: 9.4673 },
    'GM': { name: 'Gambie', capital: 'Banjul', lat: 13.4549, lng: -15.3475 },
    'GE': { name: 'Géorgie', capital: 'Tbilissi', lat: 41.7151, lng: 44.8271 },
    'GH': { name: 'Ghana', capital: 'Accra', lat: 5.5530, lng: -0.2117 },
    'GI': { name: 'Gibraltar', capital: 'Gibraltar', lat: 36.1408, lng: -5.3536 },
    'GR': { name: 'Grèce', capital: 'Athènes', lat: 37.9838, lng: 23.7275 },
    'GD': { name: 'Grenade', capital: 'Saint-Georges', lat: 12.0548, lng: -61.7456 },
    'GL': { name: 'Groenland', capital: 'Nuuk', lat: 64.1814, lng: -51.6941 },
    'GP': { name: 'Guadeloupe', capital: 'Basse-Terre', lat: 15.9971, lng: -61.3438 },
    'GU': { name: 'Guam', capital: 'Hagatna', lat: 13.4449, lng: 144.7937 },
    'GT': { name: 'Guatemala', capital: 'Guatemala', lat: 14.6318, lng: -90.5069 },
    'GG': { name: 'Guernesey', capital: 'Saint-Pierre-Port', lat: 49.4564, lng: -2.1146 },
    'GN': { name: 'Guinée', capital: 'Conakry', lat: 9.5412, lng: -13.6830 },
    'GW': { name: 'Guinée-Bissau', capital: 'Bissau', lat: 11.8625, lng: -15.5957 },
    'GQ': { name: 'Guinée équatoriale', capital: 'Malabo', lat: 3.7577, lng: 8.7891 },
    'HT': { name: 'Haïti', capital: 'Port-au-Prince', lat: 18.5944, lng: -72.2963 },
    'HN': { name: 'Honduras', capital: 'Tegucigalpa', lat: 14.0723, lng: -87.1921 },
    'HK': { name: 'Hong Kong', capital: 'Victoria', lat: 22.2793, lng: 114.1745 },
    'HU': { name: 'Hongrie', capital: 'Budapest', lat: 47.4979, lng: 19.0402 },
    'IN': { name: 'Inde', capital: 'Delhi', lat: 28.6139, lng: 77.2090 },
    'ID': { name: 'Indonésie', capital: 'Jakarta', lat: -6.2088, lng: 106.8456 },
    'IQ': { name: 'Irak', capital: 'Bagdad', lat: 33.3128, lng: 44.3615 },
    'IR': { name: 'Iran', capital: 'Téhéran', lat: 35.6892, lng: 51.3890 },
    'IE': { name: 'Irlande', capital: 'Dublin', lat: 53.3498, lng: -6.2603 },
    'IS': { name: 'Islande', capital: 'Reykjavik', lat: 64.1466, lng: -21.9426 },
    'IL': { name: 'Israël', capital: 'Jérusalem', lat: 31.7683, lng: 35.2137 },
    'IT': { name: 'Italie', capital: 'Rome', lat: 41.9028, lng: 12.4964 },
    'JM': { name: 'Jamaïque', capital: 'Kingston', lat: 17.9757, lng: -76.7597 },
    'JP': { name: 'Japon', capital: 'Tokyo', lat: 35.6762, lng: 139.6503 },
    'JE': { name: 'Jersey', capital: 'Saint-Hélier', lat: 49.1820, lng: -2.1278 },
    'JO': { name: 'Jordanie', capital: 'Amman', lat: 31.9454, lng: 35.9284 },
    'KZ': { name: 'Kazakhstan', capital: 'Astana', lat: 51.1694, lng: 71.4491 },
    'KE': { name: 'Kenya', capital: 'Nairobi', lat: -1.2921, lng: 36.8219 },
    'KG': { name: 'Kirghizistan', capital: 'Bichkek', lat: 42.8746, lng: 74.5698 },
    'KI': { name: 'Kiribati', capital: 'Tarawa', lat: 1.3382, lng: 173.0176 },
    'KW': { name: 'Koweït', capital: 'Koweït', lat: 29.3759, lng: 47.9774 },
    'LA': { name: 'Laos', capital: 'Vientiane', lat: 17.9757, lng: 102.6331 },
    'LV': { name: 'Lettonie', capital: 'Riga', lat: 56.9496, lng: 24.1052 },
    'LS': { name: 'Lesotho', capital: 'Maseru', lat: -29.6100, lng: 25.9655 },
    'LT': { name: 'Lituanie', capital: 'Vilnius', lat: 54.6872, lng: 25.2797 },
    'LB': { name: 'Liban', capital: 'Beyrouth', lat: 33.8886, lng: 35.4955 },
    'LR': { name: 'Liberia', capital: 'Monrovia', lat: 6.3156, lng: -10.8073 },
    'LY': { name: 'Libye', capital: 'Tripoli', lat: 32.8872, lng: 13.1913 },
    'LI': { name: 'Liechtenstein', capital: 'Vaduz', lat: 47.1410, lng: 9.5209 },
    'LU': { name: 'Luxembourg', capital: 'Luxembourg', lat: 49.6116, lng: 6.1319 },
    'MO': { name: 'Macao', capital: 'Macao', lat: 22.1987, lng: 113.5439 },
    'MK': { name: 'Macédoine du Nord', capital: 'Skopje', lat: 41.9973, lng: 21.4280 },
    'MG': { name: 'Madagascar', capital: 'Antananarivo', lat: -18.9386, lng: 47.5214 },
    'MY': { name: 'Malaisie', capital: 'Kuala Lumpur', lat: 3.1390, lng: 101.6869 },
    'MW': { name: 'Malawi', capital: 'Lilongwe', lat: -13.9833, lng: 33.7667 },
    'ML': { name: 'Mali', capital: 'Bamako', lat: 12.6392, lng: -8.0029 },
    'MT': { name: 'Malte', capital: 'La Valette', lat: 35.8989, lng: 14.5146 },
    'MP': { name: 'Mariannes du Nord', capital: 'Saipan', lat: 15.1200, lng: 145.7500 },
    'MA': { name: 'Maroc', capital: 'Rabat', lat: 34.0209, lng: -6.8416 },
    'MQ': { name: 'Martinique', capital: 'Fort-de-France', lat: 14.6108, lng: -61.2181 },
    'MU': { name: 'Maurice', capital: 'Port-Louis', lat: -20.1609, lng: 57.5012 },
    'MR': { name: 'Mauritanie', capital: 'Nouakchott', lat: 18.0735, lng: -15.9582 },
    'YT': { name: 'Mayotte', capital: 'Mamoudzou', lat: -12.7796, lng: 45.2278 },
    'MX': { name: 'Mexique', capital: 'Mexico', lat: 19.4326, lng: -99.1332 },
    'FM': { name: 'Micronésie', capital: 'Palikir', lat: 6.8874, lng: 158.1551 },
    'MD': { name: 'Moldavie', capital: 'Chişinău', lat: 47.1670, lng: 27.7711 },
    'MC': { name: 'Monaco', capital: 'Monaco', lat: 43.7384, lng: 7.4246 },
    'MN': { name: 'Mongolie', capital: 'Oulan-Bator', lat: 47.9165, lng: 106.8826 },
    'ME': { name: 'Monténégro', capital: 'Podgorica', lat: 42.4304, lng: 19.2594 },
    'MS': { name: 'Montserrat', capital: 'Plymouth', lat: 16.7425, lng: -62.1898 },
    'MZ': { name: 'Mozambique', capital: 'Maputo', lat: -23.8637, lng: 35.3394 },
    'MM': { name: 'Birmanie', capital: 'Naypyidaw', lat: 19.7633, lng: 96.0856 },
    'NA': { name: 'Namibie', capital: 'Windhoek', lat: -22.5597, lng: 17.0832 },
    'NR': { name: 'Nauru', capital: 'Yaren', lat: -0.5477, lng: 166.9209 },
    'NP': { name: 'Népal', capital: 'Katmandou', lat: 27.7172, lng: 85.3240 },
    'NI': { name: 'Nicaragua', capital: 'Managua', lat: 12.1150, lng: -86.2362 },
    'NE': { name: 'Niger', capital: 'Niamey', lat: 13.5116, lng: 2.1257 },
    'NG': { name: 'Nigéria', capital: 'Abuja', lat: 9.0765, lng: 7.3986 },
    'NU': { name: 'Niue', capital: 'Alofi', lat: -19.0544, lng: -169.8678 },
    'NO': { name: 'Norvège', capital: 'Oslo', lat: 59.9139, lng: 10.7522 },
    'NZ': { name: 'Nouvelle-Zélande', capital: 'Wellington', lat: -41.2865, lng: 174.7762 },
    'OM': { name: 'Oman', capital: 'Mascate', lat: 23.5859, lng: 58.3823 },
    'UG': { name: 'Ouganda', capital: 'Kampala', lat: 0.3476, lng: 32.5825 },
    'UZ': { name: 'Ouzbékistan', capital: 'Tachkent', lat: 41.2995, lng: 69.2401 },
    'PK': { name: 'Pakistan', capital: 'Islamabad', lat: 33.6844, lng: 73.0479 },
    'PW': { name: 'Palaos', capital: 'Melekeok', lat: 7.3150, lng: 134.4797 },
    'PA': { name: 'Panama', capital: 'Panama', lat: 8.9824, lng: -79.5199 },
    'PG': { name: 'Papouasie-Nouvelle-Guinée', capital: 'Port Moresby', lat: -9.4438, lng: 147.1803 },
    'PY': { name: 'Paraguay', capital: 'Asunción', lat: -25.2637, lng: -57.5759 },
    'NL': { name: 'Pays-Bas', capital: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
    'PE': { name: 'Pérou', capital: 'Lima', lat: -12.0464, lng: -77.0428 },
    'PH': { name: 'Philippines', capital: 'Manille', lat: 14.5995, lng: 120.9842 },
    'PN': { name: 'Pitcairn', capital: 'Adamstown', lat: -24.3551, lng: -130.0988 },
    'PL': { name: 'Pologne', capital: 'Varsovie', lat: 52.2297, lng: 21.0122 },
    'PF': { name: 'Polynésie française', capital: 'Papeete', lat: -17.5240, lng: -149.5724 },
    'PR': { name: 'Porto Rico', capital: 'San Juan', lat: 18.3855, lng: -66.1057 },
    'PT': { name: 'Portugal', capital: 'Lisbonne', lat: 38.7223, lng: -9.1393 },
    'QA': { name: 'Qatar', capital: 'Doha', lat: 25.2854, lng: 51.5310 },
    'RE': { name: 'Réunion', capital: 'Saint-Denis', lat: -20.8801, lng: 55.4513 },
    'RO': { name: 'Roumanie', capital: 'Bucarest', lat: 44.4268, lng: 26.1025 },
    'GB': { name: 'Royaume-Uni', capital: 'Londres', lat: 51.5074, lng: -0.1278 },
    'RU': { name: 'Russie', capital: 'Moscou', lat: 55.7558, lng: 37.6173 },
    'RW': { name: 'Rwanda', capital: 'Kigali', lat: -1.9505, lng: 29.8739 },
    'BL': { name: 'Saint-Barthélemy', capital: 'Gustavia', lat: 17.9048, lng: -62.8482 },
    'SH': { name: 'Sainte-Hélène', capital: 'Jamestown', lat: -15.9305, lng: -5.7086 },
    'KN': { name: 'Saint-Kitts-et-Nevis', capital: 'Basseterre', lat: 17.3021, lng: -62.7197 },
    'LC': { name: 'Sainte-Lucie', capital: 'Castries', lat: 14.0041, lng: -60.9789 },
    'MF': { name: 'Saint-Martin', capital: 'Marigot', lat: 18.0712, lng: -63.0842 },
    'PM': { name: 'Saint-Pierre-et-Miquelon', capital: 'Saint-Pierre', lat: 46.7752, lng: -56.1750 },
    'VC': { name: 'Saint-Vincent-et-les-Grenadines', capital: 'Kingstown', lat: 13.1939, lng: -61.2450 },
    'SG': { name: 'Singapour', capital: 'Singapour', lat: 1.3521, lng: 103.8198 },
    'SM': { name: 'Saint-Marin', capital: 'Saint-Marin', lat: 43.9424, lng: 12.4578 },
    'SK': { name: 'Slovaquie', capital: 'Bratislava', lat: 48.1486, lng: 17.1077 },
    'SI': { name: 'Slovénie', capital: 'Ljubljana', lat: 46.0569, lng: 14.5058 },
    'SB': { name: 'Salomon', capital: 'Honiara', lat: -9.4438, lng: 159.9789 },
    'SO': { name: 'Somalie', capital: 'Mogadiscio', lat: 2.0469, lng: 45.3182 },
    'ZA': { name: 'Afrique du Sud', capital: 'Pretoria', lat: -25.7461, lng: 28.2293 },
    'SS': { name: 'Soudan du Sud', capital: 'Djouba', lat: 4.8517, lng: 31.5829 },
    'SD': { name: 'Soudan', capital: 'Khartoum', lat: 15.5007, lng: 32.5599 },
    'SE': { name: 'Suède', capital: 'Stockholm', lat: 59.3293, lng: 18.0686 },
    'CH': { name: 'Suisse', capital: 'Berne', lat: 46.9479, lng: 7.4474 },
    'SR': { name: 'Suriname', capital: 'Paramaribo', lat: 5.8520, lng: -55.2038 },
    'SZ': { name: 'Eswatini', capital: 'Mbabane', lat: -26.5225, lng: 31.4659 },
    'SY': { name: 'Syrie', capital: 'Damas', lat: 33.5138, lng: 36.2765 },
    'SJ': { name: 'Svalbard et Jan Mayen', capital: 'Longyearbyen', lat: 78.2232, lng: 15.6267 },
    'TJ': { name: 'Tadjikistan', capital: 'Douchanbé', lat: 38.5598, lng: 68.7738 },
    'TW': { name: 'Taïwan', capital: 'Taipei', lat: 25.0330, lng: 121.5654 },
    'TZ': { name: 'Tanzanie', capital: 'Dar es-Salaam', lat: -6.8000, lng: 39.2833 },
    'TC': { name: 'Îles Turques-et-Caïques', capital: 'Cockburn Town', lat: 21.9945, lng: -71.9977 },
    'TL': { name: 'Timor oriental', capital: 'Dili', lat: -8.5568, lng: 125.5603 },
    'TH': { name: 'Thaïlande', capital: 'Bangkok', lat: 13.7563, lng: 100.5018 },
    'TG': { name: 'Togo', capital: 'Lomé', lat: 6.1256, lng: 1.2317 },
    'TK': { name: 'Tokelau', capital: 'Fakaofo', lat: -9.2002, lng: -171.8484 },
    'TO': { name: 'Tonga', capital: 'Nuku\'alofa', lat: -21.1393, lng: -175.2010 },
    'TT': { name: 'Trinité-et-Tobago', capital: 'Port-d\'Espagne', lat: 10.7191, lng: -61.2250 },
    'TD': { name: 'Tchad', capital: 'N\'Djamena', lat: 12.1348, lng: 15.0557 },
    'CZ': { name: 'Tchéquie', capital: 'Prague', lat: 50.0755, lng: 14.4378 },
    'TN': { name: 'Tunisie', capital: 'Tunis', lat: 36.8065, lng: 10.1815 },
    'TR': { name: 'Turquie', capital: 'Ankara', lat: 39.9334, lng: 32.8597 },
    'TM': { name: 'Turkménistan', capital: 'Achkhabad', lat: 37.9601, lng: 58.3261 },
    'TV': { name: 'Tuvalu', capital: 'Funafuti', lat: -8.5211, lng: 179.1982 },
    'UA': { name: 'Ukraine', capital: 'Kyïv', lat: 50.4501, lng: 30.5234 },
    'VA': { name: 'Vatican', capital: 'Vatican', lat: 41.9029, lng: 12.4534 },
    'VU': { name: 'Vanuatu', capital: 'Port-Vila', lat: -17.7412, lng: 168.3123 },
    'VE': { name: 'Venezuela', capital: 'Caracas', lat: 10.4806, lng: -66.9036 },
    'VN': { name: 'Viêt Nam', capital: 'Hanoi', lat: 21.0285, lng: 105.8542 },
    'VG': { name: 'Îles Vierges britanniques', capital: 'Road Town', lat: 18.4167, lng: -64.6167 },
    'VI': { name: 'Îles Vierges américaines', capital: 'Charlotte Amalie', lat: 18.3419, lng: -64.8951 },
    'WF': { name: 'Wallis-et-Futuna', capital: 'Matâ\'utu', lat: -13.7590, lng: -176.1654 },
    'YE': { name: 'Yémen', capital: 'Sana\'a', lat: 15.3694, lng: 48.2250 },
    'ZM': { name: 'Zambie', capital: 'Lusaka', lat: -15.3875, lng: 28.2883 },
    'ZW': { name: 'Zimbabwe', capital: 'Harare', lat: -17.8252, lng: 31.0335 }
};

let currentCountry = null;
let selectedCoords = null;
let selectedCountryOnMap = null;
let score = 0;
let total = 0;
let map = null;
let geoJsonLayer = null;
let countriesGeoJson = null;

// Mapping des codes ISO2 vers les noms de pays
const codeToCountry = {};
Object.entries(countries).forEach(([code, data]) => {
    codeToCountry[code] = data;
});

// Initialiser la carte avec des points au centre de chaque pays
function initMap() {
    map = L.map('map').setView([20, 0], 3);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors, © CartoDB'
    }).addTo(map);

    // Créer une couche de groupe pour les marqueurs
    geoJsonLayer = L.featureGroup();
    
    // Ajouter un point pour chaque pays
    Object.entries(countries).forEach(([code, data]) => {
        const circle = L.circleMarker([data.lat, data.lng], {
            radius: 6,
            fillColor: '#e0e0e0',
            color: '#667eea',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7
        });

        // Stocker les données du pays dans le marqueur
        circle.countryData = data;
        circle.countryCode = code;
        
        circle.on('click', function() {
            selectCountryOnMap(code, data, circle);
        });
        
        circle.on('mouseover', function() {
            this.setStyle({
                fillColor: '#667eea',
                fillOpacity: 0.9,
                radius: 8
            });
        });
        
        circle.on('mouseout', function() {
            if (selectedCountryOnMap !== code) {
                this.setStyle({
                    fillColor: '#e0e0e0',
                    fillOpacity: 0.7,
                    radius: 6
                });
            }
        });
        
        circle.addTo(geoJsonLayer);
    });
    
    geoJsonLayer.addTo(map);
}

// Sélectionner un pays sur la carte
function selectCountryOnMap(code, data, selectedCircle) {
    // Réinitialiser tous les pays précédents
    geoJsonLayer.eachLayer(function(layer) {
        layer.setStyle({
            fillColor: '#e0e0e0',
            fillOpacity: 0.7,
            radius: 6
        });
    });
    
    // Sélectionner le nouveau
    selectedCountryOnMap = code;
    selectedCircle.setStyle({
        fillColor: '#ff6b6b',
        fillOpacity: 0.9,
        radius: 10
    });
    
    selectedCoords = { lat: data.lat, lng: data.lng };
    document.getElementById('latDisplay').textContent = data.lat.toFixed(4);
    document.getElementById('lngDisplay').textContent = data.lng.toFixed(4);
    
    // Centrer la carte sur le pays avec zoom
    map.setView([data.lat, data.lng], 6);
}
function loadRandomFlag() {
    const countryCode = Object.keys(countries)[Math.floor(Math.random() * Object.keys(countries).length)];
    currentCountry = countries[countryCode];
    
    // Charger le drapeau depuis Flagpedia
    const flagUrl = `https://flagcdn.com/h120/${countryCode.toLowerCase()}.png`;
    document.getElementById('flagImage').src = flagUrl;
    
    // Réinitialiser les champs
    document.getElementById('countryName').value = '';
    document.getElementById('capital').value = '';
    selectedCoords = null;
    selectedCountryOnMap = null;
    document.getElementById('latDisplay').textContent = '-';
    document.getElementById('lngDisplay').textContent = '-';
    
    // Réinitialiser la sélection sur la carte
    if (geoJsonLayer) {
        geoJsonLayer.eachLayer(function(layer) {
            layer.setStyle({
                fillColor: '#e0e0e0',
                fillOpacity: 0.7,
                radius: 6
            });
        });
    }
    
    // Zoom arrière pour voir toute la carte
    if (map) {
        map.setView([20, 0], 3);
    }
    
    // Réinitialiser les feedback labels
    document.getElementById('countryNameFeedback').textContent = '';
    document.getElementById('countryNameFeedback').className = 'feedback-text';
    document.getElementById('capitalFeedback').textContent = '';
    document.getElementById('capitalFeedback').className = 'feedback-text';
    document.getElementById('coordinatesFeedback').textContent = '';
    document.getElementById('coordinatesFeedback').className = 'feedback-text';
}

// Vérifier les réponses
function checkAnswers() {
    if (!currentCountry) return;

    const inputCountry = document.getElementById('countryName').value.trim().toLowerCase();
    const inputCapital = document.getElementById('capital').value.trim().toLowerCase();
    
    let correct = true;
    
    // Vérifier le pays
    if (inputCountry === currentCountry.name.toLowerCase()) {
        document.getElementById('countryNameFeedback').textContent = '✓ Correct!';
        document.getElementById('countryNameFeedback').className = 'feedback-text feedback-correct';
    } else {
        correct = false;
        document.getElementById('countryNameFeedback').textContent = `✗ Réponse: ${currentCountry.name}`;
        document.getElementById('countryNameFeedback').className = 'feedback-text feedback-incorrect';
    }
    
    // Vérifier la capitale
    if (inputCapital === currentCountry.capital.toLowerCase()) {
        document.getElementById('capitalFeedback').textContent = '✓ Correct!';
        document.getElementById('capitalFeedback').className = 'feedback-text feedback-correct';
    } else {
        correct = false;
        document.getElementById('capitalFeedback').textContent = `✗ Réponse: ${currentCountry.capital}`;
        document.getElementById('capitalFeedback').className = 'feedback-text feedback-incorrect';
    }
    
    // Vérifier les coordonnées
    if (selectedCoords) {
        const distance = calculateDistance(selectedCoords.lat, selectedCoords.lng, currentCountry.lat, currentCountry.lng);
        if (distance < 500) { // Moins de 500 km
            document.getElementById('coordinatesFeedback').textContent = `✓ Correct! (Distance: ${Math.round(distance)} km)`;
            document.getElementById('coordinatesFeedback').className = 'feedback-text feedback-correct';
        } else {
            correct = false;
            document.getElementById('coordinatesFeedback').textContent = `✗ Distance réelle: ${Math.round(distance)} km`;
            document.getElementById('coordinatesFeedback').className = 'feedback-text feedback-incorrect';
        }
    } else {
        correct = false;
        document.getElementById('coordinatesFeedback').textContent = '✗ Aucun point placé';
        document.getElementById('coordinatesFeedback').className = 'feedback-text feedback-incorrect';
    }
    
    // Mettre le bon point en vert sur la carte
    geoJsonLayer.eachLayer(function(layer) {
        if (layer.countryCode === Object.keys(countries).find(code => countries[code] === currentCountry)) {
            layer.setStyle({
                fillColor: '#28a745',
                fillOpacity: 0.9,
                radius: 10
            });
        }
    });
    
    if (correct) {
        score++;
    }
    total++;
    updateScore();
}

// Calculer la distance entre deux points (formule de Haversine)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Afficher le feedback en dessous des inputs
function showFeedback(title, content) {
    document.getElementById('feedbackTitle').textContent = title;
    document.getElementById('feedbackDetails').innerHTML = content;
    document.getElementById('feedbackSection').style.display = 'block';
    
    // Scroll vers le feedback
    document.getElementById('feedbackSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Afficher le modal (legacy - kept for compatibility)
function showModal(title, content) {
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultDetails').innerHTML = content;
    document.getElementById('resultModal').style.display = 'block';
}

// Fermer le modal
function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
    loadRandomFlag();
}

// Masquer le feedback
function hideFeedback() {
    document.getElementById('feedbackSection').style.display = 'none';
}

// Mettre à jour le score
function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = total;
}

// Passer la question
function skipQuestion() {
    total++;
    updateScore();
    loadRandomFlag();
}

// Événements
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    loadRandomFlag();
    
    document.getElementById('newFlagBtn').addEventListener('click', loadRandomFlag);
    document.getElementById('submitBtn').addEventListener('click', checkAnswers);
    document.getElementById('skipBtn').addEventListener('click', skipQuestion);
    
    // Permettre de valider avec Entrée
    document.getElementById('capital').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') checkAnswers();
    });
});
