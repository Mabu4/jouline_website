let shopContent = [
  {
    headline: "Nature´s Diversity",
    size: "80x60cm",
    material: "Acrylfarbe auf Leinwand",
    price: "Preis auf Anfrage",
    description:
      "Dieses Bild steht für all die Schönheit, die den unperfekten Dingen inne wohnt. So wie die Laubkrone eines Baumes erst durch die vielen unterschiedlich geformten Blätter in seiner vollen Pracht erstrahlen kann, so können auch wir uns dem ganzen Zauber des Lebens nur öffnen, indem wir die Schönheit in unserer eigenen Individualität und in den uns alltäglich umgebenden Dinge entdecken.",
  },
  {
    headline: "Through The Eyes Of The Rainforest",
    size: "70x50cm",
    material: "Acrylfarbe auf Leinwand",
    price: "-verkauft-",
    description:
      "Dieses Bild steht symbolisch für die innere & äußere Harmonie, die wir erreichen, sobald wir unseren wahren Platz in der Welt gefunden haben. Nirgends erscheinen die Farben des Tucans so leuchtend wie im Regenwald. Und genau so ist es auch mit uns. Wir erstrahlen nirgends so hell, wie in dem Entfaltungsraum, für den unsere Seele erschaffen wurde",
  },
  {
    headline: "Enlightment Of The Darkness",
    size: "100x70cm",
    material: "Acrylfarbe auf Leinwand",
    price: "Preis auf Anfrage",
    description:
      "Dieses Bild steht für alle Lichtaspekte des Lebens, die man selbst in der tiefsten Dunkelheit, an den düstersten Orten, noch finden kann. Genau wie leuchtende Quallen die Tiefen der Tiefsee zum Erleuchten bringen, So kann jeder einzelne Mensch ein Licht für seine Umgebung sein und nach und nach all die Schatten um sich herum, wieder im Hellen erstrahlen lassen.",
  },
  {
    headline: "Soap Bubble Hearts",
    size: "50x70cm",
    material: "Acrylfarbe auf Leinwand",
    price: "Preis auf Anfrage",
    description:
      "Dieses Bild steht sinnbildlich für die Magie des Wandels und der Kurzlebigkeit. Eine Seifenblase empfinden wir vor  deshalb als wunderschön und magisch, da sie nur für eine begrenzte, meist kurze Zeit, für uns greifbar ist. Doch diese Magie umgibt in Wahrheit jeden Moment unseres Lebens, denn wir wissen auch hier niemals, wie lange uns gewisse Menschen, Situationen oder Gegebenheiten tatsächlich erhalten bleiben.",
  },
  {
    headline: "Chaotic Mind",
    size: "60x60cm",
    material: "Acrylfarbe auf Leinwand",
    price: "Preis auf Anfrage",
    description:
      "Dieses Bild steht sinnbildlich für die wandelnde Natur des Geistes. Spielerisch nimmt es Bezug auf das Gedankenwirrwarr, dass einem Jeden innewohnt. Ein solch chaotischer Geist drückt sich in unterschiedlicher Art und Weise aus. Doch obwohl aufsteigende Gedanken oft zusammenhangslos und willkürlich erscheinen, folgen sie in Wahrheit ganz spezifischen unbewussten Programmierungen, welche wir, sobald wir uns ihrer bewusst werden, völlig neu umschreiben können.",
  },
  {
    headline: "Golden Hour of Strength",
    size: "80x60cm",
    material: "Acrylfarbe auf Leinwand",
    price: "Preis auf Anfrage",
    description:
      "Dieses Bild steht symbolisch für die innere Stärke, die jedem von uns innewohnt. Der Hirsch versinnbildlicht die Fähigkeit ruhig und fokussiert zu bleiben, auch wenn die umgebende Außenwelt hektisch und chaotisch zu sein erscheint. Anmut, innere Gelassenheit und Urvertrauen sind weitere Attribute, die er alleine durch sein bloßes Sein verkörpert. Er ruft uns dazu auf, tief in uns selbst verwurzelt zu sein, um den Einwirkungen der Außenwelt in friedvoller Haltung standzuhalten zu können.",
  },
  {
    headline: "Kämpfernatur",
    size: "70x50cm",
    material: "Acrylfarbe auf Leinwand",
    price: "-verkauft-",
    description:
      "Dieses Werk steht für die uns innewohnende Kraft, die oft verschleiert hinter falschen Glaubensmustern und Ängsten liegt. Der Kampffisch, als ein zartes Geschöpf wirkt auf den ersten Blick zerbrechlich. Dabei zählt man sie mit zu tatsächlich den angriffslustigsten Süßwasserfischen. Dieses Beispiel verdeutlicht, wie trügerisch der äußere Schein sein vermag, besonders dann wenn es um unser eigenes innewohnendes Potenzial geht.",
  },
];

let shopImage = [
  [
    "./images/blätter1.jpg",
    "./images/blätter2.jpg",
    "./images/blätter3.jpg",
    "./images/blätter4.jpg",
  ],
  ["./images/tucan1.jpg", "./images/tucan2.jpg", "./images/tucan3.jpg"],
  ["./images/quallen.jpg"],
  ["./images/bubble1.jpg", "./images/bubble3.jpg"],
  ["./images/abstrakt.jpg"],
  ["./images/reh1.jpg", "./images/reh2.jpg", "./images/reh3.jpg"],
  ["./images/fisch1.jpg", "./images/fisch2.jpg"],
];

let position = 0;

function showImage(i) {
  position = 0;
  document.getElementById("shop_view-box").classList.remove("d-none");
  let element = shopContent[i];

  document.getElementById("shop_view-box").innerHTML = /*html*/ `

            <div class="shop_view-box-inner">
                <img onclick="closeImage()" class="cancel-image" src="./images/cancel.png">
                <div class="shop_view-image-box">
                    <img onclick="lastImage(${i})" class="shop_view-arrow" src="./images/arrow-left.png">
                    <img class="shop_view-image" id="shop_view-image">
                    <img onclick="nextImage(${i})" class="shop_view-arrow" src="./images/arrow-right.png">
                </div>
                <div class="shop_view-text-box">
                    <h3 class="show_view-text-header">${element["headline"]}</h3>
                    <p class="show_view-text-paragraph">
                        ${element["size"]}<br>
                        ${element["material"]}<br>
                        ${element["price"]}<br>
                        <br>
                        ${element["description"]}
                    </p>
                    <a onclick="closeImage()" class="primary-button" href="#subscribe">Contact</a>
                </div>
            </div>
    
    `;
  loadImage(i, position);
}

function showInfo() {
  document.getElementById("shop_view-box").classList.remove("d-none");
  document.getElementById("shop_view-box").innerHTML = /*html*/ `

            <div class="shop_view-box-inner" >
                <img onclick="closeImage()" class="cancel-image" src="./images/cancel.png">
                <div class="shop_view-text-box" style="width: 100%">
                    <h3 class="show_view-text-header">Seelenportraits</h3>
                    <p class="show_view-text-paragraph">
                    Seelenportraits sind individuelle Energiebilder, 
                    welche ich mit Hilfe eines Seelenreadings auf intuitive und künstlerische Art und Weise für den jeweiligen Menschen greifbar mache. 
                    Ich lasse mich dabei ganz von meiner Wahrnehmung leiten und versuche so authentisch wie möglich das Empfangene auf die Leinwand zu bringen. 
                    Die Bilder können bei längerer Betrachtung 
                    Gefühle der Verbundenheit oder anderer Emotionen hervorrufen. 
                    Sie sollen dabei unterstützend wirken wieder in die eigene Kraft und Mitte zurückzufinden und im Einklang mit dem persönlichen Seelenweg voranzuschreiten. 
                    So spiegeln sie einerseits Seelenaspekte des jeweiligen Menschen wider, 
                    ergänzen ihn aber auch durch weitere Impulse,
                    die eigenen Schattenthemen anzuschauen und ggf. zu bearbeiten. 
                    Jedes von mir gemalte Seelenbild verkörpert übergeordnet Liebe & Harmonie und erinnert uns dadurch wieder an unseren göttlichen Ursprung.   
                    <br><br>
                    Die Seelenbilder werden im Format 60x50cm angeboten
                    
                    </p>
                    <a onclick="closeImage()" class="primary-button" href="#subscribe">Contact</a>
                </div>
            </div>
    
    `;
}

function loadImage(i, number) {
  let image = shopImage[i][number];
  document.getElementById("shop_view-image").src = image;
}

function closeImage() {
  document.getElementById("shop_view-box").classList.add("d-none");
}

function nextImage(i) {
  position++;
  if (position < shopImage[i].length) {
    loadImage(i, position);
  } else {
    position = 0;
    loadImage(i, position);
  }
}

function lastImage(i) {
  position--;
  if (position >= 0) {
    loadImage(i, position);
  } else {
    position = shopImage[i].length - 1;
    loadImage(i, position);
  }
}

function validateForm() {
  let x = document.forms["form"]["name"].value;
  let y = document.forms["form"]["email"].value;
  let z = document.forms["form"]["text"].value;
  if (x == "" || y == "" || z == "") {
    alert("Bitte Eingabefelder ausfüllen");
    return false;
  }
}
