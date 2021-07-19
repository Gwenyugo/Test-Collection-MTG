// #region - Initialisation des objets (dqs)

// = Fieldsets
const fs_etp1 = document.querySelector(".fs-etp1");
const fs_etp2 = document.querySelector(".fs-etp2");

// = Champs texte
// - Étape 1
const set = document.querySelector("#set");
const txta_numColl = document.querySelector("#numColl"); // * text area contenant les numéros de collections des cartes

// = Boutons "suivant"
const btn_suiv_etp1 = document.querySelector(".btn-suiv-etp1");



// * Tableau de toute les cartes pour l'envoi vers Ninox
let tab_entiere_ninox = {
    "cards": 
    [

    ]
};

// * Tableau d'une carte pour Ninox + fonction pour la réinitialisation
let list_tab_card_ninox = [];

let tab_card_ninox = {
    "fields":
    {
        "set"            : "",    // texte               PK
        "num_collec"     : 0,     // nombre              PK
        "langue"         : "",    // sélection           PK
        "foil"           : false, // oui / non (booléen) PK
        "promo"          : false, // oui / non (booléen) PK
        "nom_fr"         : "",    // texte
        "nom_en"         : "",    // texte
        "couleurs"       : "",    // sélection multiple (ex: texte, texte, ...)
        "cout_mana"      : "",    // texte
        "cout_total_mana": 0,     // nombre
        "image_fr"       : "",    // texte
        "image_en"       : "",    // texte
        "jeton"          : false, // oui / non (booléen)
        "legendaire"     : false, // oui / non (booléen)
        "type"           : "",    // sélection (texte)
        "sous_type_fr"   : "",    // texte
        "sous_type_en"   : "",    // texte
        "set_nom"        : "",    // texte
        "rarete"         : "",    // sélection (texte)
        "description_fr" : "",    // texte
        "description_en" : "",    // texte
        "flavor_fr"      : "",    // texte
        "flavor_en"      : "",    // texte
        "artist"         : "",    // texte
        "prix"           : 0,     // nombre
        "prix_foil"      : 0,     // nombre
        "tbe"            : 0,     // nombre
        "be"             : 0,     // nombre
        "em"             : 0,     // nombre
        "me"             : 0,     // nombre
        "standard"       : "",    // sélection (texte)
        "future"         : "",    // sélection (texte)
        "historic"       : "",    // sélection (texte)
        "gladiator"      : "",    // sélection (texte)
        "pioneer"        : "",    // sélection (texte)
        "modern"         : "",    // sélection (texte)
        "legacy"         : "",    // sélection (texte)
        "pauper"         : "",    // sélection (texte)
        "vintage"        : "",    // sélection (texte)
        "penny"          : "",    // sélection (texte)
        "commander"      : "",    // sélection (texte)
        "brawl"          : "",    // sélection (texte)
        "duel"           : "",    // sélection (texte)
        "oldschool"      : "",    // sélection (texte)
        "premodern"      : ""     // sélection (texte)
    }
};

function init_tab_card_ninox(memeCarte = false)
{
    if (memeCarte)
    {
        tab_card_ninox.fields.langue = "",   
        tab_card_ninox.fields.foil   = false,
        tab_card_ninox.fields.promo  = false,
        tab_card_ninox.fields.tbe    = 0,
        tab_card_ninox.fields.be     = 0,
        tab_card_ninox.fields.em     = 0,
        tab_card_ninox.fields.me     = 0
    }
    else
    {
        tab_card_ninox = {
        "fields":
        {
            "set"            : "",    // texte               PK
            "num_collec"     : 0,     // nombre              PK
            "langue"         : "",    // sélection           PK
            "foil"           : false, // oui / non (booléen) PK
            "promo"          : false, // oui / non (booléen) PK
            "nom_fr"         : "",    // texte
            "nom_en"         : "",    // texte
            "couleurs"       : "",    // sélection multiple (ex: texte, texte, ...)
            "cout_mana"      : "",    // texte
            "cout_total_mana": 0,     // nombre
            "image_fr"       : "",    // texte
            "image_en"       : "",    // texte
            "jeton"          : false, // oui / non (booléen)
            "legendaire"     : false, // oui / non (booléen)
            "type"           : "",    // sélection (texte)
            "sous_type_fr"   : "",    // texte
            "sous_type_en"   : "",    // texte
            "set_nom"        : "",    // texte
            "rarete"         : "",    // sélection (texte)
            "description_fr" : "",    // texte
            "description_en" : "",    // texte
            "flavor_fr"      : "",    // texte
            "flavor_en"      : "",    // texte
            "artist"         : "",    // texte
            "prix"           : 0,     // nombre
            "prix_foil"      : 0,     // nombre
            "tbe"            : 0,     // nombre
            "be"             : 0,     // nombre
            "em"             : 0,     // nombre
            "me"             : 0,     // nombre
            "standard"       : "",    // sélection (texte)
            "future"         : "",    // sélection (texte)
            "historic"       : "",    // sélection (texte)
            "gladiator"      : "",    // sélection (texte)
            "pioneer"        : "",    // sélection (texte)
            "modern"         : "",    // sélection (texte)
            "legacy"         : "",    // sélection (texte)
            "pauper"         : "",    // sélection (texte)
            "vintage"        : "",    // sélection (texte)
            "penny"          : "",    // sélection (texte)
            "commander"      : "",    // sélection (texte)
            "brawl"          : "",    // sélection (texte)
            "duel"           : "",    // sélection (texte)
            "oldschool"      : "",    // sélection (texte)
            "premodern"      : ""     // sélection (texte)
            }
        };
    }
}

// #endregion





btn_suiv_etp1.addEventListener("click", () => {

    let list_value = [];

    let list_ta_cards = getArrNum(txta_numColl.value);

    console.log(list_ta_cards);

    list_ta_cards.forEach(arr_num => {

        init_tab_card_ninox();

        console.log(arr_num);

        // let promise = new Promise( (resolve, reject) => {

            let requestOptions = {
                method: 'GET'
            };
        
            fetch(`https://api.scryfall.com/cards/${set.value}/${arr_num[0]}`, requestOptions)
                .then(response => response.text())
                .then(result_en_str => {
                    console.log(typeof result_en_str);
                    let result_en = JSON.parse(result_en_str);
                    fetch(`https://api.scryfall.com/cards/${set.value}/${arr_num[0]}/fr`, requestOptions)
                        .then(response => response.text())
                        .then(result_fr_str => {
                            let result_fr = JSON.parse(result_fr_str);

                            let jeton = (result_en.layout=="token");
                            let legendaire = result_en.type_line.includes("Legendary");

                            console.log(result_en);
                            console.log("RESFR : " + result_fr.type_line);
                            console.log("NOMFR : " + result_fr.printed_name);

                            let type = idTypeCard(result_en.type_line);
                            let sous_type_fr = getSousType(result_fr.printed_type_line);
                            let sous_type_en = getSousType(result_en.type_line);

                            // resolve([result_fr, result_en, jeton, legendaire, type, sous_type_fr, sous_type_en])
                            let value = [result_fr, result_en, jeton, legendaire, type, sous_type_fr, sous_type_en];

                            //#region - remplissage tableau ninox
                            tab_card_ninox.fields.set             = value[1].set; //["set"];
                            tab_card_ninox.fields.num_collec      = value[1].collector_number; //["collector_number"];
                            // tab_card_ninox.fields.langue          = ;
                            // tab_card_ninox.fields.foil            = ;
                            // tab_card_ninox.fields.promo           = ;
                            tab_card_ninox.fields.nom_fr          = value[0].printed_name; //["printed_name"];
                            tab_card_ninox.fields.nom_en          = value[1].name; //["name"];
                            tab_card_ninox.fields.couleurs        = value[1].colors; //["colors"];
                            tab_card_ninox.fields.cout_mana       = value[1].mana_cost; //["mana_cost"];
                            tab_card_ninox.fields.cout_total_mana = value[1].cmc; //["cmc"];
                            tab_card_ninox.fields.image_fr        = value[0].image_uris.png; //["image_uris.png"];
                            tab_card_ninox.fields.image_en        = value[1].image_uris.png; //["image_uris.png"];
                            tab_card_ninox.fields.jeton           = value[2]; //["jeton"];
                            tab_card_ninox.fields.legendaire      = value[3]; //["legendaire"];
                            tab_card_ninox.fields.type            = value[4]; //["type"];
                            tab_card_ninox.fields.sous_type_fr    = value[5]; //["sous_type_fr"];
                            tab_card_ninox.fields.sous_type_en    = value[6]; //["sous_type_en"];
                            tab_card_ninox.fields.set_nom         = value[1].set_name; //["set_name"];
                            tab_card_ninox.fields.rarete          = value[1].rarity; //["rarity"];
                            tab_card_ninox.fields.description_fr  = value[0].printed_text; //["printed_text"];
                            tab_card_ninox.fields.description_en  = value[1].text; //["text"];
                            tab_card_ninox.fields.flavor_fr       = value[0].flavor_text; //["flavor_text"];
                            tab_card_ninox.fields.flavor_en       = value[1].flavor; //["flavor"];
                            tab_card_ninox.fields.artist          = value[1].artist; //["artist"];
                            tab_card_ninox.fields.prix            = value[1].prices.eur; //["prices.eur"];
                            tab_card_ninox.fields.prix_foil       = value[1].prices.eur_foil; //["prices.eur_foil"];
                            // tab_card_ninox.fields.tbe             = 0;
                            // tab_card_ninox.fields.be              = 0;
                            // tab_card_ninox.fields.em              = 0;
                            // tab_card_ninox.fields.me              = 0;
                            tab_card_ninox.fields.standard        = value[1].standard; //["standard"];
                            tab_card_ninox.fields.future          = value[1].future; //["future"];
                            tab_card_ninox.fields.historic        = value[1].historic; //["historic"];
                            tab_card_ninox.fields.gladiator       = value[1].gladiator; //["gladiator"];
                            tab_card_ninox.fields.pioneer         = value[1].pioneer; //["pioneer"];
                            tab_card_ninox.fields.modern          = value[1].modern; //["modern"];
                            tab_card_ninox.fields.legacy          = value[1].legacy; //["legacy"];
                            tab_card_ninox.fields.pauper          = value[1].pauper; //["pauper"];
                            tab_card_ninox.fields.vintage         = value[1].vintage; //["vintage"];
                            tab_card_ninox.fields.penny           = value[1].penny; //["penny"];
                            tab_card_ninox.fields.commander       = value[1].commander; //["commander"];
                            tab_card_ninox.fields.brawl           = value[1].brawl; //["brawl"];
                            tab_card_ninox.fields.duel            = value[1].duel; //["duel"];
                            tab_card_ninox.fields.oldschool       = value[1].oldschool; //["oldschool"];
                            tab_card_ninox.fields.premodern       = value[1].premodern; //["premodern"];
                            //#endregion

                            console.group
                            for (let i = 1 ; i<arr_num.length ; i++)
                            {
                                init_tab_card_ninox(true);

                                let num = arr_num[i];

                                console.log("\n\n\n\n\nTAB XLN " + num + ":");

                                if (num.match(/^[a-d]+(\.)?(\+)?(e|f)$/i))
                                {
                                    let numTemp = num;
                                    
                                    while (numTemp.match(/^[a-d]+/))
                                    {
                                        //$$ let indexEtat = numTemp.search(/[a-d]/i);
                                        
                                        switch (numTemp.charAt(0)) {
                                            case 'a':
                                                tab_card_ninox.fields.tbe += 1;
                                                console.log(tab_card_ninox.fields.tbe);
                                                break;
                                            case 'b':
                                                tab_card_ninox.fields.be += 1;
                                                console.log(tab_card_ninox.fields.be);
                                                break;
                                            case 'c':
                                                tab_card_ninox.fields.em += 1;
                                                console.log(tab_card_ninox.fields.em);
                                                break;
                                            case 'd':
                                                tab_card_ninox.fields.me += 1;
                                                console.log(tab_card_ninox.fields.me);
                                            break;
                                        
                                            default:
                                                console.log("erreur : lettre qualité innatendue");
                                                break;
                                        }

                                        numTemp = numTemp.slice(1);
                                        console.log("numT fin while : " + numTemp);
                                    }
                                    console.log("numT après while : " + numTemp);
                                    
                                    // - foil
                                    if (numTemp.charAt(0) == ".")
                                    {
                                        tab_card_ninox.fields.foil = true;
                                        numTemp = numTemp.slice(1);
                                    }
                                    else
                                        tab_card_ninox.fields.foil = false;
                                    
                                    console.log(tab_card_ninox.fields.foil);

                                    console.log("numT foil : " + numTemp);

                                    // - promo
                                    if (numTemp.charAt(0) == "+")
                                    {
                                        tab_card_ninox.fields.promo = true;
                                        numTemp = numTemp.slice(1);
                                    }
                                    else
                                        tab_card_ninox.fields.promo = false;
                                    
                                        console.log(tab_card_ninox.fields.promo);

                                    console.log("numT promo : " + numTemp);

                                    // - langue
                                    if (numTemp.charAt(0) == "f")
                                        tab_card_ninox.fields.lang = "FR";
                                    else if(numTemp.charAt(0) == "e")
                                        tab_card_ninox.fields.lang = "EN";
                                    else
                                        console.log("Erreur : langue incorrecte");
                                    console.log(tab_card_ninox.fields.lang);



                                    console.log(tab_card_ninox);
                                }
                                else console.log("Erreur : la syntaxe de quantité est incorrecte.");

                                list_tab_card_ninox.push(tab_card_ninox);

                                console.log(list_tab_card_ninox);
                            }



                        }
                    )
                    // $$ .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                }
            )
            // $$ .then(result => console.log(result))
            .catch(error => console.log('error', error));

        // })
        // .then(value => {

            

        // })
        // .catch(value => {

        // });



    });





});










// btn_suiv_etp1.addEventListener("click", () => {
    
//     let numsColl = txta_numColl.value.split("\n");
    
//     //$$ let infos_card_fr;
//     //$$ let infos_card_en;
//     // let infos_cartes = {
//     //     cards: [

//     //     ]
//     // };
//     var infos_cartes = [

//     ];
//     let list_infos_cartes = [];
//     //$$ infos_cartes.cards.
//     // let prem_card = true;
//     let prem_fois_num;
//     let numAct = 0;
//     // let envoyer = false;

//     numsColl.forEach(num => {
    
//         /**
//          * * Format de l'entrée
//          * 
//          * * Première ligne : numéro de collection d'une carte
//          * 
//          * * Lignes suivantes :
//          * * [
//          * *    quantité (nb)
//          * *    qualité ([a,b,c,d]:[TBE,BE,EM,ME])
//          * * ]*{1,4}
//          * * langue ([f,e]:[fr,en])
//          * * foil (.)
//          * * promo (+)
//          * * 
//          * * Ex: 2a.f
//          * * = 2 cartes foil en TB état en français
//          */

//         console.log("num num num num num : " + num);


//         if (num.match(/^\d{1,3}$/))
//         {
//             console.log("ENTREE DANS LE PFN");
//             prem_fois_num = false;
//             numAct = num;
//             envoyer = false;

//             // init_tab_card_ninox();

//             let promise = new Promise((resolve, reject) => {

//                 let requestOptions = {
//                     method: 'GET'
//                 };
            
//                 fetch(`https://api.scryfall.com/cards/${set.value}/${num}`, requestOptions)
//                     .then(response => response.text())
//                     .then(result_en_str => {
//                         console.log(typeof result_en_str);
//                         let result_en = JSON.parse(result_en_str);
//                         fetch(`https://api.scryfall.com/cards/${set.value}/${num}/fr`, requestOptions)
//                             .then(response => response.text())
//                             .then(result_fr_str => {
//                                 let result_fr = JSON.parse(result_fr_str);

//                                 let jeton = (result_en.layout=="token");
//                                 let legendaire = result_en.type_line.includes("Legendary");

//                                 console.log(result_en);
//                                 console.log("RESFR : " + result_fr.type_line);
//                                 console.log("NOMFR : " + result_fr.printed_name);

//                                 let type = idTypeCard(result_en.type_line);
//                                 let sous_type_fr = getSousType(result_fr.printed_type_line);
//                                 let sous_type_en = getSousType(result_en.type_line);

//                                 resolve([result_fr, result_en, jeton, legendaire, type, sous_type_fr, sous_type_en])

//                             }
//                         )
//                         // $$ .then(result => console.log(result))
//                         .catch(error => console.log('error', error));
//                     }
//                 )
//                 // $$ .then(result => console.log(result))
//                 .catch(error => console.log('error', error));

//             })
//             .then(value => {

//                 infos_cartes.push(
//                     [value[1].set,
//                     parseInt(value[1].collector_number, 10),
//                     value[0].printed_name,
//                     value[1].name,
//                     value[1].colors,
//                     value[1].mana_cost,
//                     value[1].cmc,
//                     value[0].image_uris.png,
//                     value[1].image_uris.png,
//                     value[2],
//                     value[3],
//                     value[4],
//                     value[5],
//                     value[6],
//                     value[1].set_name,
//                     value[1].rarity,
//                     value[0].printed_text,
//                     value[1].oracle_text,
//                     value[0].flavor_text,
//                     value[1].flavor_text,
//                     value[1].artist,
//                     value[1].prices.eur,
//                     value[1].prices.eur_foil,
//                     value[1].legalities.standard,
//                     value[1].legalities.future,
//                     value[1].legalities.historic,
//                     value[1].legalities.gladiator,
//                     value[1].legalities.pioneer,
//                     value[1].legalities.modern,
//                     value[1].legalities.legacy,
//                     value[1].legalities.pauper,
//                     value[1].legalities.vintage,
//                     value[1].legalities.penny,
//                     value[1].legalities.commander,
//                     value[1].legalities.brawl,
//                     value[1].legalities.duel,
//                     value[1].legalities.oldschool,
//                     value[1].legalities.premodern]
//                 );






//                 let i_infoscartes = -1;

//                 // = Itération n°2
//                 numsColl.forEach(num => {
                
//                     /**
//                      * * Format de l'entrée
//                      * 
//                      * * Première ligne : numéro de collection d'une carte
//                      * 
//                      * * Lignes suivantes :
//                      * * [
//                      * *    quantité (nb)
//                      * *    qualité ([a,b,c,d]:[TBE,BE,EM,ME])
//                      * * ]*{1,4}
//                      * * langue ([f,e]:[fr,en])
//                      * * foil (.)
//                      * * promo (+)
//                      * * 
//                      * * Ex: 2a.f
//                      * * = 2 cartes foil en TB état en français
//                      */

//                     console.log("num num num num num : " + num);
//                     // if (num.match(/^\d{1,3}$/))
//                     // {
//                     //     prem_fois_num = true;
//                     // }
//                     // console.log("PFN : " + prem_fois_num);

//                     // if (envoyer)
//                     // {
//                     //     list_tab_card_ninox.push(tab_card_ninox);
//                     //     init_tab_card_ninox(true);
//                     // }

//                     if (num.match(/^\d{1,3}$/))
//                     {
//                         console.log("ENTREE DANS LE PFN");
//                         // prem_fois_num = false;
//                         numAct = num;

//                         i_infoscartes++;

//                         init_tab_card_ninox();

//                     }
//                     else
//                     {
//                         console.log("ENTREE DANS LE NON ! PFN");

//                         init_tab_card_ninox(true);

//                         console.log("\n\n\n\n\nTAB XLN " + num + ":");

//                         if (num.match(/^[a-d]+(\.)?(\+)?(e|f)$/i))
//                         {
//                             let numTemp = num;
                            
//                             while (numTemp.match(/^[a-d]+/))
//                             {
//                                 //$$ let indexEtat = numTemp.search(/[a-d]/i);
                                
//                                 switch (numTemp.charAt(0)) {
//                                     case 'a':
//                                         tab_card_ninox.fields.tbe += 1;
//                                         console.log(tab_card_ninox.fields.tbe);
//                                         break;
//                                     case 'b':
//                                         tab_card_ninox.fields.be += 1;
//                                         console.log(tab_card_ninox.fields.be);
//                                         break;
//                                     case 'c':
//                                         tab_card_ninox.fields.em += 1;
//                                         console.log(tab_card_ninox.fields.em);
//                                         break;
//                                     case 'd':
//                                         tab_card_ninox.fields.me += 1;
//                                         console.log(tab_card_ninox.fields.me);
//                                     break;
                                
//                                     default:
//                                         console.log("erreur : lettre qualité innatendue");
//                                         break;
//                                 }

//                                 numTemp = numTemp.slice(1);
//                                 console.log("numT fin while : " + numTemp);
//                             }
//                             console.log("numT après while : " + numTemp);
                            
//                             // - foil
//                             if (numTemp.charAt(0) == ".")
//                             {
//                                 tab_card_ninox.fields.foil = true;
//                                 numTemp = numTemp.slice(1);
//                             }
//                             else
//                                 tab_card_ninox.fields.foil = false;
                            
//                             console.log(tab_card_ninox.fields.foil);

//                             console.log("numT foil : " + numTemp);

//                             // - promo
//                             if (numTemp.charAt(0) == "+")
//                             {
//                                 tab_card_ninox.fields.promo = true;
//                                 numTemp = numTemp.slice(1);
//                             }
//                             else
//                                 tab_card_ninox.fields.promo = false;
                            
//                                 console.log(tab_card_ninox.fields.promo);

//                             console.log("numT promo : " + numTemp);

//                             // - langue
//                             if (numTemp.charAt(0) == "f")
//                                 tab_card_ninox.fields.lang = "FR";
//                             else if(numTemp.charAt(0) == "e")
//                                 tab_card_ninox.fields.lang = "EN";
//                             else
//                                 console.log("Erreur : langue incorrecte");
//                             console.log(tab_card_ninox.fields.lang);



//                             console.log(tab_card_ninox);
//                         }
//                         else
//                             console.log("Erreur : la syntaxe de quantité est incorrecte.");



//                         console.log(i_infoscartes);
//                         console.log("numAct = " + numAct);
//                         console.log(infos_cartes);
//                         console.log(infos_cartes.indexOf(6));
//                         // console.log(infos_cartes.findIndex(elem => elem==numAct));
//                         // console.log(infos_cartes[0]);
//                         // console.log(infos_cartes[1]);
//                         // console.log(infos_cartes.cards.);

//                         tab_arr_card = infos_cartes.find(elem => elem[1] == numAct);
//                         console.log("\n\n\n\n\n\n" + tab_arr_card);
//                         console.log(numAct);
//                         console.log(infos_cartes.find(elem => elem[1] == numAct));
//                         console.log(infos_cartes);
//                         // infos_cartes.cards.findIndex();
                        
//                         tab_card_ninox.fields.set             = tab_arr_card[0]; //["set"];
//                         tab_card_ninox.fields.num_collec      = tab_arr_card[1]; //["collector_number"];
//                         // tab_card_ninox.fields.langue          = ;
//                         // tab_card_ninox.fields.foil            = ;
//                         // tab_card_ninox.fields.promo           = ;
//                         tab_card_ninox.fields.nom_fr          = tab_arr_card[2]; //["printed_name"];
//                         tab_card_ninox.fields.nom_en          = tab_arr_card[3]; //["name"];
//                         tab_card_ninox.fields.couleurs        = tab_arr_card[4]; //["colors"];
//                         tab_card_ninox.fields.cout_mana       = tab_arr_card[5]; //["mana_cost"];
//                         tab_card_ninox.fields.cout_total_mana = tab_arr_card[6]; //["cmc"];
//                         tab_card_ninox.fields.image_fr        = tab_arr_card[7]; //["image_uris.png"];
//                         tab_card_ninox.fields.image_en        = tab_arr_card[8]; //["image_uris.png"];
//                         tab_card_ninox.fields.jeton           = tab_arr_card[9]; //["jeton"];
//                         tab_card_ninox.fields.legendaire      = tab_arr_card[10]; //["legendaire"];
//                         tab_card_ninox.fields.type            = tab_arr_card[11]; //["type"];
//                         tab_card_ninox.fields.sous_type_fr    = tab_arr_card[12]; //["sous_type_fr"];
//                         tab_card_ninox.fields.sous_type_en    = tab_arr_card[13]; //["sous_type_en"];
//                         tab_card_ninox.fields.set_nom         = tab_arr_card[14]; //["set_name"];
//                         tab_card_ninox.fields.rarete          = tab_arr_card[15]; //["rarity"];
//                         tab_card_ninox.fields.description_fr  = tab_arr_card[16]; //["printed_text"];
//                         tab_card_ninox.fields.description_en  = tab_arr_card[17]; //["text"];
//                         tab_card_ninox.fields.flavor_fr       = tab_arr_card[18]; //["flavor_text"];
//                         tab_card_ninox.fields.flavor_en       = tab_arr_card[19]; //["flavor"];
//                         tab_card_ninox.fields.artist          = tab_arr_card[20]; //["artist"];
//                         tab_card_ninox.fields.prix            = tab_arr_card[21]; //["prices.eur"];
//                         tab_card_ninox.fields.prix_foil       = tab_arr_card[22]; //["prices.eur_foil"];
//                         // tab_card_ninox.fields.tbe             = 0;
//                         // tab_card_ninox.fields.be              = 0;
//                         // tab_card_ninox.fields.em              = 0;
//                         // tab_card_ninox.fields.me              = 0;
//                         tab_card_ninox.fields.standard        = tab_arr_card[23]; //["standard"];
//                         tab_card_ninox.fields.future          = tab_arr_card[24]; //["future"];
//                         tab_card_ninox.fields.historic        = tab_arr_card[25]; //["historic"];
//                         tab_card_ninox.fields.gladiator       = tab_arr_card[26]; //["gladiator"];
//                         tab_card_ninox.fields.pioneer         = tab_arr_card[27]; //["pioneer"];
//                         tab_card_ninox.fields.modern          = tab_arr_card[28]; //["modern"];
//                         tab_card_ninox.fields.legacy          = tab_arr_card[29]; //["legacy"];
//                         tab_card_ninox.fields.pauper          = tab_arr_card[30]; //["pauper"];
//                         tab_card_ninox.fields.vintage         = tab_arr_card[31]; //["vintage"];
//                         tab_card_ninox.fields.penny           = tab_arr_card[32]; //["penny"];
//                         tab_card_ninox.fields.commander       = tab_arr_card[33]; //["commander"];
//                         tab_card_ninox.fields.brawl           = tab_arr_card[34]; //["brawl"];
//                         tab_card_ninox.fields.duel            = tab_arr_card[35]; //["duel"];
//                         tab_card_ninox.fields.oldschool       = tab_arr_card[36]; //["oldschool"];
//                         tab_card_ninox.fields.premodern       = tab_arr_card[37]; //["premodern"];





//                         list_tab_card_ninox.push(tab_card_ninox);
//                         // init_tab_card_ninox();
//                     }


//                 }); // * Fin de l'itération des cartes et quantités

//                 console.log(list_tab_card_ninox);









//             })
//             .catch(value => {

//             });



            
//         }
//     //     else
//     //     {
//     //         console.log("ENTREE DANS LE NON ! PFN");

//     //         envoyer = true;

//     //         console.log("\n\n\n\n\nTAB XLN " + num + ":");

//     //         if (num.match(/^(\d{1,2}[a-d]){1,4}(\.)?(\+)?(e|f)$/i))
//     //         {
//     //             let numTemp = num;
                
//     //             while (numTemp.match(/^\d{1,2}[a-d]/))
//     //             {
//     //                 let indexEtat = numTemp.search(/[a-d]/i);
                    
//     //                 switch (numTemp.charAt(indexEtat)) {
//     //                     case 'a':
//     //                         tab_card_ninox.fields.tbe = parseInt(numTemp.substring(0, indexEtat), 10);
//     //                         console.log(tab_card_ninox.fields.tbe);
//     //                         break;
//     //                     case 'b':
//     //                         tab_card_ninox.fields.be = parseInt(numTemp.substring(0,indexEtat), 10);
//     //                         console.log(tab_card_ninox.fields.be);
//     //                         break;
//     //                     case 'c':
//     //                         tab_card_ninox.fields.em = parseInt(numTemp.substring(0,indexEtat), 10);
//     //                         console.log(tab_card_ninox.fields.em);
//     //                         break;
//     //                     case 'd':
//     //                         tab_card_ninox.fields.me = parseInt(numTemp.substring(0,indexEtat), 10);
//     //                         console.log(tab_card_ninox.fields.me);
//     //                     break;
                    
//     //                     default:
//     //                         console.log("erreur : lettre qualité innatendue");
//     //                         break;
//     //                 }

//     //                 numTemp = numTemp.slice(indexEtat+1);
//     //                 console.log("numT fin while : " + numTemp);
//     //             }
//     //             console.log("numT après while : " + numTemp);
                
//     //             // - foil
//     //             if (numTemp.charAt(0) == ".")
//     //             {
//     //                 tab_card_ninox.fields.foil = true;
//     //                 numTemp = numTemp.slice(1);
//     //             }
//     //             else
//     //                 tab_card_ninox.fields.foil = false;
                
//     //             console.log(tab_card_ninox.fields.foil);

//     //             console.log("numT foil : " + numTemp);

//     //             // - promo
//     //             if (numTemp.charAt(0) == "+")
//     //             {
//     //                 tab_card_ninox.fields.promo = true;
//     //                 numTemp = numTemp.slice(1);
//     //             }
//     //             else
//     //                 tab_card_ninox.fields.promo = false;
                
//     //                 console.log(tab_card_ninox.fields.promo);

//     //             console.log("numT promo : " + numTemp);

//     //             // - langue
//     //             if (numTemp.charAt(0) == "f")
//     //                 tab_card_ninox.fields.lang = "FR";
//     //             else if(numTemp.charAt(0) == "e")
//     //                 tab_card_ninox.fields.lang = "EN";
//     //             else
//     //                 console.log("Erreur : langue incorrecte");
//     //             console.log(tab_card_ninox.fields.lang);



//     //             console.log(tab_card_ninox);
//     //         }
//     //         else
//     //             console.log("Erreur : la syntaxe de quantité est incorrecte.");

//     //         list_tab_card_ninox.push(tab_card_ninox);
//     //         init_tab_card_ninox();
//     //     }


//     }); // * Fin de l'itération des cartes et quantités

//     // list_infos_cartes.forEach(elem => {
//         // "a".to
//     // });



//     // console.log(infos_cartes);
//     // tab_arr_card = infos_cartes.cards.find(elem => elem.collector_number == 6);
//     // console.log("\n\n\n\n\n\n" + tab_arr_card);
//     // console.log(6);
//     // console.log(infos_cartes.cards.find(elem => elem.collector_number == 6));
//     // console.log(infos_cartes);


    

// });





// * Fonction d'identification du type de la carte
function idTypeCard(type)
{
    if (type.includes("Creature"))
        return "Creature";
    
    else if (type.includes("Enchantement"))    
        return "Enchantement";

    else if (type.includes("Instant"))
        return "Instant";
        
    else if (type.includes("Sorcery"))
        return "Sorcery";

    else
        return "Error"

}


// * Fonction de récupération du sous type d'une carte
function getSousType(type)
{
    let indexTiret = type.search(/(-|—|:)/);
    if (indexTiret != -1)
    {
        return type.slice(indexTiret+2);
    }
}


function getArrNum(textAreaNum)
{
    let num1 = textAreaNum.split("\n\n");
    
    let num2 = [];

    num1.forEach(nb => num2.push(nb.split("\n")));

    return num2;
}




function call_api(set, num_collec)
{

    let requestOptions = {
        method: 'GET'
    };

    fetch(`https://api.scryfall.com/cards/${set.value}/${arr_num[0]}`, requestOptions)
        .then(response => response.text())
        .then(result_en_str => {
            console.log(typeof result_en_str);
            let result_en = JSON.parse(result_en_str);
            fetch(`https://api.scryfall.com/cards/${set.value}/${arr_num[0]}/fr`, requestOptions)
                .then(response => response.text())
                .then(result_fr_str => {
                
                }
            )
            // $$ .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    )
    // $$ .then(result => console.log(result))
    .catch(error => console.log('error', error));

}