
$(document).ready(function () {
    $('select').formSelect();
    generateSpecification();
    countofitem();
});


const data = {
    "products": {
        "featuresList": [
            {
                "features": [
                    {
                        "featureName": "Size",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "108 cm (43)",
                            "TVSF2WYUE4PWNJKM": "80 cm (32)",
                            "TVSE8FMZ9AQMEGC6": "102 cm (40)",
                            "TVSF3J7HUJF5XUBT": "138.71 cm (55)"
                        }
                    },
                    {
                        "featureName": "Screen Type",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "LED",
                            "TVSF2WYUE4PWNJKM": "LED",
                            "TVSE8FMZ9AQMEGC6": "QLED",
                            "TVSF3J7HUJF5XUBT": "LED"
                        }
                    },
                    {
                        "featureName": "HD Technology & Resolution",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "Full HD, 1920 x 1080 Pixels",
                            "TVSF2WYUE4PWNJKM": "HD Ready, 1366 x 768 Pixels",
                            "TVSE8FMZ9AQMEGC6": "Full HD, 1920 x 1080",
                            "TVSF3J7HUJF5XUBT": "Ultra HD (4K), 3840 x 2160 Pixels"
                        }
                    },
                    {
                        "featureName": "3D",
                        "properties": {
                            "isDifferent": false
                        },
                        "values": {
                            "TVSF2WYXTKAR7RAF": "No",
                            "TVSF2WYUE4PWNJKM": "No",
                            "TVSE8FMZ9AQMEGC6": "No",
                            "TVSF3J7HUJF5XUBT": "No"
                        }
                    }
                ],
                "title": "Display"
            },
            {
                "features": [
                    {
                        "featureName": "Smart TV",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "Yes",
                            "TVSF2WYUE4PWNJKM": "Yes",
                            "TVSE8FMZ9AQMEGC6": "Yes",
                            "TVSF3J7HUJF5XUBT": "Yes"
                        }
                    },
                    {
                        "featureName": "Curve TV",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "Yes",
                            "TVSF2WYUE4PWNJKM": "No",
                            "TVSE8FMZ9AQMEGC6": "No",
                            "TVSF3J7HUJF5XUBT": "No"
                        }
                    },
                    {
                        "featureName": "Touchscreen",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "Yes",
                            "TVSF2WYUE4PWNJKM": "No",
                            "TVSE8FMZ9AQMEGC6": "No",
                            "TVSF3J7HUJF5XUBT": "No"
                        }
                    },
                    {
                        "featureName": "Motion Sensor",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "No",
                            "TVSF2WYUE4PWNJKM": "No",
                            "TVSE8FMZ9AQMEGC6": "No",
                            "TVSF3J7HUJF5XUBT": "No"
                        }
                    },
                    {
                        "featureName": "Launch Year",
                        "values": {
                            "TVSF2WYXTKAR7RAF": "2018",
                            "TVSF2WYUE4PWNJKM": "2018",
                            "TVSE8FMZ9AQMEGC6": "2015",
                            "TVSF3J7HUJF5XUBT": "2018"
                        }
                    }
                ],
                "title": "General Features"
            },
            {
                "features": [
                    {
                        "featureName": "Built In Wi-Fi",
                        "properties": {
                            "isDifferent": true
                        },
                        "values": {
                            "TVSF2WYXTKAR7RAF": "Yes",
                            "TVSF2WYUE4PWNJKM": "Yes",
                            "TVSE8FMZ9AQMEGC6": "Yes",
                            "TVSF3J7HUJF5XUBT": "Yes"
                        }
                    },
                    {
                        "featureName": "3G Dongle Plug and Play",
                        "properties": {
                            "isDifferent": false
                        },
                        "values": {
                            "TVSF2WYXTKAR7RAF": "No",
                            "TVSF2WYUE4PWNJKM": "No",
                            "TVSE8FMZ9AQMEGC6": "No",
                            "TVSF3J7HUJF5XUBT": "No"
                        }
                    },
                    {
                        "featureName": "Ethernet (RJ45)",
                        "properties": {
                            "isDifferent": true
                        },
                        "values": {
                            "TVSF2WYXTKAR7RAF": "1",
                            "TVSF2WYUE4PWNJKM": "1",
                            "TVSE8FMZ9AQMEGC6": "0",
                            "TVSF3J7HUJF5XUBT": "1"
                        }
                    },
                    {
                        "featureName": "Wireless Ready",
                        "properties": {
                            "isDifferent": true
                        },
                        "values": {
                            "TVSF2WYXTKAR7RAF": "Yes",
                            "TVSF2WYUE4PWNJKM": "Yes",
                            "TVSE8FMZ9AQMEGC6": "Yes",
                            "TVSF3J7HUJF5XUBT": "Yes"
                        }
                    }
                ],
                "title": "Internet Features"
            }
        ],
        "compareSummary": {
            "images": {
                "TVSF2WYXTKAR7RAF": "https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/r/a/f/mi-l43m5-ai-original-imaf34hgjzc4xr62.jpeg?q=100",
                "TVSF2WYUE4PWNJKM": "https://rukminim1.flixcart.com/image/1000/1000/jefzonk0/television/j/k/m/mi-l32m5-ai-original-imaf34hfqb2fekxx.jpeg?q=100",
                "TVSE8FMZ9AQMEGC6": "https://rukminim1.flixcart.com/image/1000/1000/jj367bk0/television/g/c/6/vu-40d6575-original-imaf6qqy4vfneabe.jpeg?q=100",
                "TVSF3J7HUJF5XUBT": "https://rukminim1.flixcart.com/image/1000/1000/jgffp8w0/television/u/b/t/iffalcon-55k2a-original-imaf4z2mn6xrxk5f.jpeg?q=100"
            },
            "titles": {
                "TVSF2WYXTKAR7RAF": {
                    "subtitle": null,
                    "title": "Mi LED Smart TV 4A 108 cm (43)"
                },
                "TVSF2WYUE4PWNJKM": {
                    "subtitle": null,
                    "title": "Mi LED Smart TV 4A 80 cm (32)"
                },
                "TVSE8FMZ9AQMEGC6": {
                    "subtitle": "40D6575",
                    "title": "Vu 102cm (40 inch) Full HD LED TV"
                },
                "TVSF3J7HUJF5XUBT": {
                    "subtitle": "55K2A",
                    "title": "iFFALCON K2A 138.71cm (55 inch) Ultra HD (4K) LED Smart TV"
                }
            },
            "productPricingSummary": {
                "TVSF2WYXTKAR7RAF": {
                    "finalPrice": "22999.00",
                    "price": "25999.00",
                    "totalDiscount": 11
                },
                "TVSF2WYUE4PWNJKM": {
                    "finalPrice": "13999.00",
                    "price": "15999.00",
                    "totalDiscount": 14
                },
                "TVSE8FMZ9AQMEGC6": {
                    "finalPrice": "16999.00",
                    "price": "11999.00",
                    "totalDiscount": 11
                },
                "TVSF3J7HUJF5XUBT": {
                    "finalPrice": "26999.00",
                    "price": "23999.00",
                    "totalDiscount": 13
                }
            }
        }
    }
}






/*
const url = "https://www.mocky.io/v2/5e86ec5531000011d8814754";

/*
/----Asynchronous Ajax made to server
/----Using Async Await
/---- Products JSON will be returned 
*/


/*
const getProducts = async (url) => {
    const response = await fetch(url)
    if (response.status === 200) {
        data = await response.json();
       
        let dataLength = data.length;
    }
    else {
        throw new Error("unable to fetch response");
    }
}

getProducts(url);

*/
let selected = false;
const spec = document.querySelector(".spec");
const imagecontainer = document.querySelector(".image");
const name = document.querySelector(".name");
const price = document.querySelector(".price");
const imagecontainer2 = document.querySelector(".image2");
const name2 = document.querySelector(".name2");
const price2 = document.querySelector(".price2");
let productOneInfoDisplay = document.querySelector(".product1-info");
let productTwoInfoDisplay = document.querySelector(".product2-info");


var count = 0;









//conditional ad product name .
name2.innerHTML = "Add a product";

//conditional ad product name .
name.innerHTML = "Add a product";
//(selected)?"some data": price.appendChild





function generateSpecification() {
    result = data.products.featuresList;
    result.forEach((innerObj) => {
        let specul = document.createElement("ul");
        specul.innerHTML = innerObj.title;
        let objfeatures = innerObj.features;
        objfeatures.forEach((item) => {
            //featureName will be li
            let specli = document.createElement("li");
            specli.innerHTML = item.featureName;
            specul.appendChild(specli);
            spec.appendChild(specul);
        })

    })
}

function countofitem() {
    var itemcount = document.querySelector(".countOfitem-selected");
    let firstproductdiv = document.querySelector(".product1");
    let secondproductdiv = document.querySelector(".product2");

    if (firstproductdiv.firstChild && secondproductdiv.firstChild) {

        count = 2;
        itemcount.innerHTML = count + " " + `Item selected`;

    }
    else if (firstproductdiv.firstChild || secondproductdiv.firstChild) {
        count = 1;
        itemcount.innerHTML = count + " " + `Item selected`;
    }
    else {
        itemcount.innerHTML = count + " " + `Item selected`;
    }
}

function firstproductSelectHandler() {
    let product1 = document.querySelector(".product1");
    while (product1.firstChild) {
        product1.removeChild(product1.firstChild);

    }


    let selectValue = document.getElementById("selectid").value;
    selected = true;



    result = data.products.featuresList;
    result.forEach((innerObj) => {
        let prodinfoul = document.createElement("ul");
        prodinfoul.innerHTML = " ";
        let objfeatures = innerObj.features;
        objfeatures.forEach((item) => {
            let iterateObj = item.values;
            for (let key in iterateObj) {
                if (key === selectValue) {
                    let prodinfoli = document.createElement("li");
                    prodinfoli.innerHTML = iterateObj[key];
                    prodinfoul.appendChild(prodinfoli);
                    product1.appendChild(prodinfoul);

                }

            }
            countofitem();
        })
    })
    while (imagecontainer.firstChild) {
        imagecontainer.removeChild(imagecontainer.firstChild);

    }
    let imageresult = data.products.compareSummary.images;
    for (let intkey in imageresult) {
        if (intkey === selectValue) {
            let image = document.createElement("img");
            image.src = imageresult[intkey];
            image.style.height = '100px';
            image.style.width = '200px';
            imagecontainer.appendChild(image);
        }
    }

    let productName = data.products.compareSummary.titles;
    let prodName = document.querySelector(".name");
    while (prodName.firstChild) {
        prodName.removeChild(prodName.firstChild);

    }

    for (let names in productName) {
        if (names === selectValue) {

            prodName.innerHTML = productName[names].title;
        }
    }

    let pricingresult = data.products.compareSummary.productPricingSummary;
    for (let pricing in pricingresult) {
        if (pricing === selectValue) {
            let fp = document.querySelector(".finalPrice");
            let pricevalue = document.querySelector(".pricevalue");
            let totaldiscount = document.querySelector(".totaldiscount");
            fp.innerHTML = `&#8377;` + pricingresult[pricing].finalPrice;
            pricevalue.innerHTML = `&#8377;` + pricingresult[pricing].price;
            totaldiscount.innerHTML = pricingresult[pricing].totalDiscount + "%" + " " + "Off";
        }
    }


}

function secondproductSelectHandler() {


    let product2 = document.querySelector(".product2");
    while (product2.firstChild) {
        product2.removeChild(product2.firstChild);
    }

    let selectValue2 = document.getElementById("select2id").value;
    selected = true;
    countofitem();

    result = data.products.featuresList;
    result.forEach((innerObj) => {
        let prodinfoul = document.createElement("ul");
        prodinfoul.innerHTML = " ";
        let objfeatures = innerObj.features;
        objfeatures.forEach((item) => {
            let iterateObj = item.values;
            for (let key in iterateObj) {
                if (key === selectValue2) {
                    let prodinfoli = document.createElement("li");
                    prodinfoli.innerHTML = iterateObj[key];
                    prodinfoul.appendChild(prodinfoli);
                    product2.appendChild(prodinfoul);
                }
            }
            countofitem();
        })
    })


    let productName = data.products.compareSummary.titles;
    let secondprodName = document.querySelector(".name2");
    while (secondprodName.firstChild) {
        secondprodName.removeChild(secondprodName.firstChild);

    }

    for (let names in productName) {
        if (names === selectValue2) {

            secondprodName.innerHTML = productName[names].title;
        }
    }



    while (imagecontainer2.firstChild) {
        imagecontainer2.removeChild(imagecontainer2.firstChild);

    }
    let imageresult = data.products.compareSummary.images;
    for (let intkey in imageresult) {
        if (intkey === selectValue2) {
            let image = document.createElement("img");
            image.src = imageresult[intkey];
            image.style.height = '100px';
            image.style.width = '200px';
            imagecontainer2.appendChild(image);
        }
    }



    let pricingresult = data.products.compareSummary.productPricingSummary;
    for (let pricing in pricingresult) {
        if (pricing === selectValue2) {
            let fp2 = document.querySelector(".finalPrice2");
            let pricevalue2 = document.querySelector(".pricevalue2");
            let totaldiscount2 = document.querySelector(".totaldiscount2");
            fp2.innerHTML = `&#8377;` + pricingresult[pricing].finalPrice;
            pricevalue2.innerHTML = `&#8377;` + pricingresult[pricing].price;
            totaldiscount2.innerHTML = pricingresult[pricing].totalDiscount + "%" + " " + "Off";
        }
    }
}






