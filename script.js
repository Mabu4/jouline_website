let shopContent = [
    {
        'headline': 'Natures Diversity',
        'size': '60x80cm',
        'material': 'Acrylic paint on canvas',
        'price': '650€',
        'description': 'This painting embodies the beauty of imperfection. It symbolizes that magic is created by the uniqueness of the individual. As soon as we recognize the beauty in everything around us, we open up to the true magic of life.',
    },
    {
        'headline': 'Through The Eyes Of The Rainforest',
        'size': '50x70cm',
        'material': 'Acrylic paint on canvas',
        'price': '-sold out-',
        'description': 'This piece symbolises the inner harmony that we achieve when we find our place in life. We begin to shine as soon as we are in the right environment for us, just as the bright colors of the toucan appear in their true splendour only in the rainforest.',
    },
    {
        'headline': 'Enlightment Of The Darkness',
        'size': '70x100cm',
        'material': 'Acrylic paint on canvas',
        'price': '',
        'description': 'This painting stands for all light aspects of life, which can be found even in the deepest darkness. Just as glowing jellyfish illuminate the depths of the deep sea, so are all the bright sides of life that can liberate us from the darkness as soon as we open ourselves up to them.',
    },
]

let shopImage0 = ['./images/blätter1.jpg', './images/blätter2.jpg', './images/blätter3.jpg', './images/blätter4.jpg']
let shopImage1 = ['./images/tucan1.jpg', './images/tucan2.jpg', './images/tucan3.jpg']
let shopImage2 = ['./images/quallen.jpg']
let position = 0;

function showImage(i){
    position = 0;
    document.getElementById('shop_view-box').classList.remove('d-none');
    let element = shopContent[i];

    document.getElementById('shop_view-box').innerHTML = /*html*/ `

            <div class="shop_view-box-inner">
                <img onclick="closeImage()" class="cancel-image" src="./images/cancel.png">
                <div class="shop_view-image-box">
                    <img onclick="lastImage(${i})" class="shop_view-arrow" src="./images/arrow-left.png">
                    <img class="shop_view-image" id="shop_view-image">
                    <img onclick="nextImage(${i})" class="shop_view-arrow" src="./images/arrow-right.png">
                </div>
                <div class="shop_view-text-box">
                    <h3 class="show_view-text-header">${element['headline']}</h3>
                    <p class="show_view-text-paragraph">
                        ${element['size']}<br>
                        ${element['material']}<br>
                        ${element['price']}<br>
                        <br>
                        ${element['description']}
                    </p>
                    <a onclick="closeImage()" class="primary-button" href="#subscribe">Contact</a>
                </div>
            </div>
    
    `;
    loadImage(i, position);
}


function loadImage(i, number){
    
    if (i == 0){
        
        let image = shopImage0[number];
        document.getElementById('shop_view-image').src = image;
    }
    if (i == 1){

        let image = shopImage1[number];
        document.getElementById('shop_view-image').src = image;
    }
    if (i == 2){

        let image = shopImage2[number];
        document.getElementById('shop_view-image').src = image;
    }
}


function closeImage(){
    document.getElementById('shop_view-box').classList.add('d-none');
}


function nextImage(i) {
    position++;

    if(i == 0) {
        if(position < shopImage0.length){
            loadImage(i, position);
        } else {
            position = 0;
            loadImage(i, position);
        }
    }
    if(i == 1) {
        if(position < shopImage1.length){
            loadImage(i, position);
        } else {
            position = 0;
            loadImage(i, position);
        }
    }
    if(i == 2) {
        if(position < shopImage2.length){
            loadImage(i, position);
        } else {
            position = 0;
            loadImage(i, position);
        }
    }
}


function lastImage(i){
    position--;

    if(i == 0) {
        if(position >= 0){
            loadImage(i, position);
        } else {
            position = shopImage0.length - 1;
            loadImage(i, position);
        }
    }
    if(i == 1) {
        if(position >= 0){
            loadImage(i, position);
        } else {
            position = shopImage1.length - 1;
            loadImage(i, position);
        }
    }
    if(i == 2) {
        if(position >= 0){
            loadImage(i, position);
        } else {
            position = shopImage2.length - 1;
            loadImage(i, position);
        }
    }
}

function validateForm() {
    let x = document.forms['form']['name'].value;
    let y = document.forms['form']['email'].value;
    let z = document.forms['form']['text'].value;
    if (x == "" || y == "" || z == "") {
      alert("Bitte Eingabefelder ausfüllen");
      return false;
    } 
}