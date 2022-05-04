Vue.createApp({
    data() {

        const childrenMenu = {
            first: {
                title: 'Smarrig plockmat',
                dish: [{
                        name: '',
                        describe: '',
                        price: 0
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            },
            second: {
                title: 'Barnens favoriter',
                dish: [{
                        name: 'Pannkakor med jordgubbssylt',
                        describe: '',
                        price: 69
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            },
            third: {
                title: 'Kladdigt var det här',
                dish: [{
                        name: 'Vaniljglass med chokladsås',
                        describe: '',
                        price: 35
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            }
        }

        const adultMenu = {
            first: {
                title: 'Förrätter',
                dish: [
                    {
                        name: 'Friterad kycklingsnacks med chilibearnaise',
                        describe: '',
                        price: 85
                    },
                    {
                        name: 'Husets toast skagen',
                        describe: 'Smörstekt surdegsbröd med räckor, kräftsjärtar, majonnäs, dill & citron toppad med löjrom',
                        price: 119
                    },
                    {
                        name: 'Chèvre chaud',
                        describe: 'Smörstekt surdegsbröd med chèvre, rödbetor, honung & valnötter',
                        price: 115
                    },
                    {
                        name: 'Skogssvampsoppa',
                        describe: 'Blandad svamp, grädde, gräslök & olivolja',
                        price: 109
                    },
                    {
                        name: 'Musslor',
                        describe: 'Grillat surdegsbröd, cocktailtomater, rödlök, fetaost, persilja & olivolja dressing',
                        price: 109
                    },
                    {
                        name: 'Skaldjurspanna',
                        describe: 'Vitlöksfrästa räkor, pilgrimsmusslor med vitt vin, champinjoner och bladspenat',
                        price: 159
                    },
                    {
                        name: 'Löjrom',
                        describe: 'Råraka, rödlök, creme fraiche & citron',
                        price: 159
                    },
                    {
                        name: 'Bruschetta',
                        describe: 'Grillat surdegsbröd, cocktailtomater, rödlök, fetaost, basilika & olivoljedressing',
                        price: 105
                    },
                    {
                        name: 'Osttallrik',
                        describe: 'Tre ostar med fikonmarmelad & kex',
                        price: 159
                    }, {
                        name: 'Ölkorv',
                        describe: '',
                        price: 45
                    }
                ]
            },
            second: {
                title: 'Varmrätter',
                dish: [
                    {
                        name: 'Skaldjurspasta',
                        describe: 'Med pilgrimsmusslor, räkor, gröna musslor, tomat, vitt vin & persilja',
                        price: 209
                    },
                    {
                        name: 'Fjällröding',
                        describe: 'Smörstekt rödingfilé med spenat, sparris, kräftstjärtar, hummersås samt kokt potatis & citron',
                        price: 239
                    },
                    {
                        name: 'Hälleflundrar',
                        describe: 'Hälleflundra med ugnsrostade höstprimörer, kokt potatis, vitvinssås, grillad citron samt toppad med knaperstekt bacon',
                        price: 249
                    }, {
                        name: 'Hjort',
                        describe: 'Grillat hjortinnanlår med rotfrukter, krämig kantarellsås, potatisterrin med västerbottenost samt svartvinbärsgelé',
                        price: 259
                    },
                    {
                        name: 'Black Angus Burgare',
                        describe: 'Med cheddarost, dressing, bacon, tomat, saltgurka, picklad rödlök, sallad & pommes frites',
                        price: 189
                    }, {
                        name: 'Oxfilé tournedos',
                        describe: 'Grillad oxfilé med stekta rotfrukter, pepparsås & potatisterrin med västerbottenost',
                        price: 279
                    },
                    {
                        name: 'Lamm',
                        describe: 'Vitlök & örtmarinerad lamminnerfilé med rotfrukter, rostad tomat, rödvinssås & potatisterrin med västerbottenost',
                        price: 259
                    }, {
                        name: 'Oxfilépasta',
                        describe: 'Oxfilé, champinjoner, paprika, zucchini, lök, grädde, sambal samt toppad med ost',
                        price: 209
                    }, {
                        name: 'Biff Rydberg',
                        describe: 'Oxfile, stekt potatis, gul lök, äggula & senapsgrädde',
                        price: 259
                    }, {
                        name: 'veganska biffar',
                        describe: 'Biff gjord på zucchini, aubergine, potatis & morot, serveras med rostad potatis, tomatsås & sallad',
                        price: 199
                    }
                ]
            },
            third: {
                title: 'Desert',
                dish: [
                    {
                        name: 'Ostbricka',
                        describe: '5 ostar med fikonmarmelad & kex',
                        price: 159
                    },
                    {
                        name: 'Hemlagat blåbärspaj',
                        describe: 'Med vaniljsås',
                        price: 80
                    },
                    {
                        name: 'Crème brûllé',
                        describe: '',
                        price: 85
                    }, {
                        name: 'Mangosorbet',
                        describe: '',
                        price: 85
                    },
                    {
                        name: 'Belgisk chokladtårta',
                        describe: 'Med vispad grädde',
                        price: 85
                    }, {
                        name: 'Styrketår',
                        describe: 'Kaffe med tryffel & 4 cl avec',
                        price: 119
                    },
                    {
                        name: 'Tryffel',
                        describe: '',
                        price: 39
                    }, {
                        name: '',
                        describe: '',
                        price: 0
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }, {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            }
        }

        const coupleMenu = {
            first: {
                title: 'Kärleksmums',
                dish: [{
                        name: '',
                        describe: '',
                        price: 0
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            },
            second: {
                title: 'Värmen finns alltid hos er',
                dish: [{
                        name: '',
                        describe: '',
                        price: 0
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            },
            third: {
                title: 'Kladdigt och gott',
                dish: [{
                        name: '',
                        describe: '',
                        price: 0
                    },
                    {
                        name: '',
                        describe: '',
                        price: 0
                    }
                ]
            }
        }

        //change here, vuxen, barn, par
        let guestType = 'vuxen'

        return {
            title: 'Meny',
            guest: guestType,
            menu: {
                first: {
                    title: (guestType === 'barn') ? childrenMenu.first.title : (guestType === 'vuxen') ? adultMenu.first.title : (guestType === 'par') ? coupleMenu.first.title : '',
                    dish: (guestType === 'barn') ? childrenMenu.first.dish : (guestType === 'vuxen') ? adultMenu.first.dish : (guestType === 'par') ? coupleMenu.first.dish : ''
                },
                second: {
                    title: (guestType === 'barn') ? childrenMenu.second.title : (guestType === 'vuxen') ? adultMenu.second.title : (guestType === 'par') ? coupleMenu.second.title : '',
                    dish: (guestType === 'barn') ? childrenMenu.second.dish : (guestType === 'vuxen') ? adultMenu.second.dish : (guestType === 'par') ? coupleMenu.second.dish : ''
                },
                third: {
                    title: (guestType === 'barn') ? childrenMenu.third.title : (guestType === 'vuxen') ? adultMenu.third.title : (guestType === 'par') ? coupleMenu.third.title : '',
                    dish: (guestType === 'barn') ? childrenMenu.third.dish : (guestType === 'vuxen') ? adultMenu.third.dish : (guestType === 'par') ? coupleMenu.third.dish : ''
                }
            }
        }
        
    }
}).mount('#app')
