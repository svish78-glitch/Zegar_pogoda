const IMIE_DATA = {
    1: { // Styczeń
        1: "Mieszka, Mieczysława", 2: "Izydora, Grzegorza", 3: "Danuty, Genowefy", 4: "Anieli, Tytusa", 5: "Edwarda, Szymona",
        6: "Kacpra, Melchiora", 7: "Lucjana, Juliana", 8: "Seweryna, Teofila", 9: "Marceliny, Marianny", 10: "Wilhelma, Dobrosława",
        11: "Matyldy, Honoraty", 12: "Arkadiusza, Benedykta", 13: "Weroniki, Bogumiła", 14: "Feliksa, Hilarego", 15: "Pawła, Izydora",
        16: "Marcelego, Włodzimierza", 17: "Antoniego, Jana", 18: "Małgorzaty, Piotra", 19: "Henryka, Marty", 20: "Fabiana, Sebastiana",
        21: "Agnieszki, Marcela", 22: "Anastazego, Wincentego", 23: "Ildefonsa, Rajmunda", 24: "Felicji, Rafała", 25: "Pawła, Miłosza",
        26: "Michała, Tytusa", 27: "Angeliki, Juliana", 28: "Walerego, Karola", 29: "Franciszka, Józefa", 30: "Macieja, Martyny", 31: "Jana, Marceli"
    },
    2: { // Luty
        1: "Brygidy, Ignacego", 2: "Marii, Mirosława", 3: "Błażeja, Oskara", 4: "Andrzeja, Weroniki", 5: "Agaty, Adelajdy",
        6: "Doroty, Bogdana", 7: "Ryszarda, Teodora", 8: "Hieronima, Sebastiana", 9: "Apolonii, Cyryla", 10: "Elwiry, Jacka",
        11: "Grzegorza, Lucjana", 12: "Eulalii, Radosława", 13: "Grzegorza, Katarzyny", 14: "Walentego, Cyryla", 15: "Faustyna, Jowity",
        16: "Danuty, Juliana", 17: "Łukasza, Donata", 18: "Konstancji, Szymona", 19: "Konrada, Arnolda", 20: "Leona, Ludomira",
        21: "Eleonory, Feliksa", 22: "Marty, Małgorzaty", 23: "Romany, Damiana", 24: "Macieja, Bogusza", 25: "Wiktora, Cezarego",
        26: "Mirosława, Aleksandra", 27: "Gabriela, Anastazji", 28: "Romana, Ludomira", 29: "Lecha, Oswalda"
    },
    3: { // Marzec
        1: "Albiny, Antoniego", 2: "Heleny, Karola", 3: "Kunegundy, Maryny", 4: "Kazimierza, Łucji", 5: "Adriana, Fryderyka",
        6: "Róży, Wiktora", 7: "Felicji, Tomasza", 8: "Beaty, Wincentego", 9: "Franciszki, Brunona", 10: "Cypriana, Aleksandra",
        11: "Konstantego, Edwina", 12: "Bernarda, Grzegorza", 13: "Bożeny, Krystyny", 14: "Leona, Matyldy", 15: "Longina, Klemensa",
        16: "Izabeli, Hilarego", 17: "Patryka, Zbigniewa", 18: "Cyryla, Edwarda", 19: "Józefa, Bogdana", 20: "Eufemii, Klaudii",
        21: "Ludomira, Benedykta", 22: "Katarzyny, Bogusława", 23: "Pelagii, Konrada", 24: "Marka, Gabriela", 25: "Marioli, Wieńczysława",
        26: "Emanuela, Teodora", 27: "Lidii, Ernesta", 28: "Anieli, Sykstusa", 29: "Wiktora, Eustachego", 30: "Amelii, Jana", 31: "Balbiny, Kornelii"
    },
    4: { // Kwiecień
        1: "Grażyny, Ireny", 2: "Franciszka, Władysława", 3: "Ryszarda, Pankracego", 4: "Izydora, Benedykta", 5: "Ireny, Wincentego",
        6: "Celestyna, Wilhelma", 7: "Donata, Rufina", 8: "Dionizego, Julii", 9: "Marii, Marcelego", 10: "Michała, Makarego",
        11: "Filipa, Leona", 12: "Juliusza, Ludosława", 13: "Przemysława, Idy", 14: "Bereniki, Waleriana", 15: "Anastazji, Bazylego",
        16: "Bernadety, Julii", 17: "Roberta, Rudolfa", 18: "Alicji, Bogusława", 19: "Adolfa, Tymona", 20: "Czesława, Agnieszki",
        21: "Bartosza, Feliksa", 22: "Łukasza, Gai", 23: "Wojciecha, Jerzego", 24: "Aleksego, Horacego", 25: "Marka, Jarosława",
        26: "Marzeny, Klaudiusza", 27: "Zyty, Felicji", 28: "Pawła, Walerii", 29: "Piotra, Pawła", 30: "Mariana, Donata"
    },
    5: { // Maj
        1: "Józefa, Jeremiasza", 2: "Zygmunta, Anatola", 3: "Marii, Aleksandra", 4: "Moniki, Floriana", 5: "Ireny, Waldemara",
        6: "Filipa, Jakuba", 7: "Benedykta, Gizeli", 8: "Stanisława, Wiktora", 9: "Bożydara, Grzegorza", 10: "Antoniego, Izydora",
        11: "Mamerta, Ignacego", 12: "Pankracego, Dominika", 13: "Serwacego, Glorii", 14: "Bonifacego, Dobiesława", 15: "Zofii, Nadziei",
        16: "Andrzeja, Szymona", 17: "Weroniki, Sławomira", 18: "Eryka, Feliksa", 19: "Piotra, Iwa", 20: "Bazylego, Bernarda",
        21: "Wiktora, Kryspina", 22: "Heleny, Wiesławy", 23: "Iwony, Dezyderego", 24: "Joanny, Zuzanny", 25: "Grzegorza, Urbana",
        26: "Filipa, Pauliny", 27: "Jana, Juliusza", 28: "Augustyna, Jaromira", 29: "Teodozji, Magdaleny", 30: "Feliksa, Ferdynanda", 31: "Anieli, Petroneli"
    },
    6: { // Czerwiec
        1: "Jakuba, Konrada", 2: "Erazma, Marianny", 3: "Leszka, Tamary", 4: "Franciszka, Karola", 5: "Waltera, Bonifacego",
        6: "Norberta, Pauliny", 7: "Roberta, Wiesława", 8: "Maksyma, Medarda", 9: "Felicjana, Pelagii", 10: "Bogumiła, Małgorzaty",
        11: "Barnaby, Radomiła", 12: "Jana, Onufrego", 13: "Lucjana, Antoniego", 14: "Elizy, Bazylego", 15: "Jolanty, Witolda",
        16: "Aliny, Benona", 17: "Adolfa, Laury", 18: "Marka, Elżbiety", 19: "Gerwazego, Protazego", 20: "Bogny, Florentyny",
        21: "Alicji, Alojzego", 22: "Pauliny, Tomasza", 23: "Wandy, Zenona", 24: "Jana, Danuty", 25: "Łucji, Wilhelma",
        26: "Jana, Pawła", 27: "Marii, Władysława", 28: "Ireneusza, Leona", 29: "Piotra, Pawła", 30: "Emilii, Lucyny"
    },
    7: { // Lipiec
        1: "Haliny, Mariana", 2: "Jagody, Urbana", 3: "Jacka, Anatola", 4: "Odweta, Malwiny", 5: "Marii, Antoniego",
        6: "Dominiki, Łucji", 7: "Estery, Benedykta", 8: "Adriana, Eugenii", 9: "Łukasza, Weroniki", 10: "Filipa, Amalii",
        11: "Olgi, Benedykta", 12: "Jana, Brunona", 13: "Ernesta, Małgorzaty", 14: "Bonawentury, Stelli", 15: "Dawida, Henryka",
        16: "Marii, Eustachego", 17: "Bogdana, Aleksego", 18: "Kamila, Szymona", 19: "Wincentego, Wodzisława", 20: "Czesława, Hieronima",
        21: "Daniela, Dalidy", 22: "Marii, Magdaleny", 23: "Bogny, Apolinarego", 24: "Kingi, Krystyny", 25: "Jakuba, Krzysztofa",
        26: "Anny, Mirosławy", 27: "Julii, Natalii", 28: "Wiktora, Innocentego", 29: "Olaf, Marty", 30: "Julity, Ludmiły", 31: "Ignacego, Heleny"
    },
    8: { // Sierpień
        1: "Piotra, Juliana", 2: "Gustawa, Kariny", 3: "Lidii, Augusta", 4: "Dominika, Protazego", 5: "Marii, Oswalda",
        6: "Jakuba, Sławy", 7: "Kajetana, Doroty", 8: "Cypriana, Dominika", 9: "Romana, Edyty", 10: "Borysa, Wawrzyńca",
        11: "Zuzanny, Filomeny", 12: "Klary, Lecha", 13: "Diany, Hipolita", 14: "Alfreda, Euzebiusza", 15: "Marii, Napoleona",
        16: "Rocha, Stefana", 17: "Jacka, Anity", 18: "Heleny, Bronisława", 19: "Bolesława, Juliana", 20: "Bernarda, Samuela",
        21: "Joanny, Kazimiery", 22: "Cezarego, Zygfryda", 23: "Filipa, Apolinarego", 24: "Jerzego, Bartłomieja", 25: "Ludwika, Luizy",
        26: "Marii, Zefiryny", 27: "Moniki, Cezarego", 28: "Augustyna, Patrycji", 29: "Beaty, Sabiny", 30: "Róży, Szczęsnego", 31: "Bogdana, Ramony"
    },
    9: { // Wrzesień
        1: "Idziego, Bronisława", 2: "Juliana, Stefana", 3: "Izabeli, Szymona", 4: "Rozalii, Róży", 5: "Doroty, Wawrzyńca",
        6: "Beaty, Eugeniusza", 7: "Reginy, Melchiora", 8: "Marii, Adrianny", 9: "Sergiusza, Ścibora", 10: "Łukasza, Mikołaja",
        11: "Jacka, Dagny", 12: "Gwidona, Amadeusza", 13: "Eugenii, Aureliusza", 14: "Roksany, Bernarda", 15: "Albina, Nikodema",
        16: "Edyty, Kornela", 17: "Franciszka, Roberta", 18: "Ireny, Józefa", 19: "Konstancji, Januarego", 20: "Filipa, Eustachego",
        21: "Mateusza, Hipolita", 22: "Tomasza, Maurycego", 23: "Bogny, Tekli", 24: "Gerarda, Teodora", 25: "Aurelii, Władysława",
        26: "Justyny, Cypriana", 27: "Damiana, Kosmy", 28: "Wacława, Marka", 29: "Michała, Gabriela", 30: "Zofii, Hieronima"
    },
    10: { // Październik
        1: "Danuty, Remigiusza", 2: "Teofila, Dionizego", 3: "Teresy, Heliodora", 4: "Rozalii, Franciszka", 5: "Igora, Placyda",
        6: "Artura, Brunona", 7: "Marii, Marka", 8: "Pelagii, Brygidy", 9: "Ludwika, Dionizego", 10: "Pauliny, Daniela",
        11: "Aldony, Emila", 12: "Eustachego, Maksymiliana", 13: "Edwarda, Teofila", 14: "Dominika, Bernarda", 15: "Jadwigi, Teresy",
        16: "Aurelii, Gawła", 17: "Małgorzaty, Wiktora", 18: "Łukasza, Juliana", 19: "Ziemowita, Izaaka", 20: "Ireny, Kleopatry",
        21: "Urszuli, Hilarego", 22: "Filipa, Korduli", 23: "Seweryna, Marlena", 24: "Rafała, Marcina", 25: "Darii, Sambora",
        26: "Lucjana, Ewarysta", 27: "Sabiny, Iwony", 28: "Tadeusza, Szymona", 29: "Euzebii, Narcyza", 30: "Przemysława, Zenobii", 31: "Augustyna, Łukasza"
    },
    11: { // Listopad
        1: "Seweryna, Wiktora", 2: "Bohdany, Tobiasza", 3: "Sylwii, Huberta", 4: "Karola, Olgierda", 5: "Elżbiety, Sławomira",
        6: "Feliksa, Leonarda", 7: "Antoniego, Ernesta", 8: "Seweryna, Gotfryda", 9: "Urszuli, Teodora", 10: "Leny, Ludomira",
        11: "Marcina, Bartłomieja", 12: "Renaty, Witolda", 13: "Mikołaja, Stanisława", 14: "Rogera, Serafina", 15: "Alberta, Leopolda",
        16: "Gertrudy, Edmunda", 17: "Grzegorza, Salomei", 18: "Anieli, Romana", 19: "Elżbiety, Seweryna", 20: "Feliksa, Anatola",
        21: "Janusza, Konrada", 22: "Cecylii, Marka", 23: "Adelajdy, Klemensa", 24: "Flory, Emmy", 25: "Katarzyny, Erazma",
        26: "Konrada, Sylwestra", 27: "Waleriana, Maksyma", 28: "Grzegorza, Lesława", 29: "Błażeja, Saturnina", 30: "Andrzeja, Konstantego"
    },
    12: { // Grudzień
        1: "Natalii, Eligiusza", 2: "Balbiny, Pauliny", 3: "Franciszka, Ksawerego", 4: "Barbary, Krystiana", 5: "Saby, Krystyny",
        6: "Mikołaja, miana", 7: "Marcina, Ambrożego", 8: "Marii, Wirginiusza", 9: "Wiesława Leokadii", 10: "Julii, Daniela",
        11: "Damazego, Waldemara", 12: "Aleksandry, Joanny", 13: "Łucji, Otalii", 14: "Izydora, Alfreda", 15: "Ireny, Niny",
        16: "Albiny, Zdzisławy", 17: "Olimpii, Łazarza", 18: "Gracjana, Bogusława", 19: "Dariusza, Gabrieli", 20: "Bogumiły, Dominika",
        21: "Tomasza, Honoraty", 22: "Zenona, Honoraty", 23: "Wiktorii, Sławomira", 24: "Adama, Ewy", 25: "Anastazji, Eugenii",
        26: "Szczepana, Dionizego", 27: "Jana, Żanety", 28: "Cezarego, Teofili", 29: "Dawida, Tomasza", 30: "Rainera, Eugeniusza", 31: "Sylwestra, Melanii"
    }
};

function getImieniny(month, day) {
    return IMIE_DATA[month] ? IMIE_DATA[month][day] || "Brak danych" : "Brak danych";
}
