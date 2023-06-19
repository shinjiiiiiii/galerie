import '../css/style.css';
import '../css/reset.css';

const articlescontainer = document.getElementById('articlescontainer')
const data = {
    pages: [
        {
            articles: [
                {
                    title: "chien ",
                    imgSrc: "../img/image_1.jpg",
                    cat: 1,
                },
                {
                    title: "shrek coincer",
                    imgSrc: "../img/image_2.jpg",
                    cat: 2,
                },
                {
                    title: "singe",
                    imgSrc: "../img/image_3.jpg",
                    cat: 3,
                },
                {
                    title: "paresseux modo dicord",
                    imgSrc: "../img/image_4.jpg",
                    cat: 1,
                },
                {
                    title: "chien oeuf",
                    imgSrc: "../img/image_5.jpg",
                    cat: 2,
                },
                {
                    title: "canard banane scotcher ",
                    imgSrc: "../img/image_6.jpg",
                    cat: 3,
                },
                {
                    title: "m&m humain",
                    imgSrc: "../img/image_7.jpg",
                    cat: 1,
                },
                {
                    title: "coq klaxon",
                    imgSrc: "../img/image_8.jpg",
                    cat: 2,
                },
                {
                    title: "peach bourré",
                    imgSrc: "../img/image_9.jpg",
                    cat: 3,
                }
            ]
        },{
            articles: [
                {
                    title: "mini porc",
                    imgSrc: "../img/image_10.jpg",
                    cat: 1,
                },
                {
                    title: "nez gru",
                    imgSrc: "../img/image_11.jpg",
                    cat: 2,
                },
                {
                    title: "green land",
                    imgSrc: "../img/image_12.jpg",
                    cat: 3,
                },
                {
                    title: "frog",
                    imgSrc: "../img/image_13.jpg",
                    cat: 1,
                },
                {
                    title: "cringe",
                    imgSrc: "../img/image_14.jpg",
                    cat: 2,
                },
                {
                    title: "elroux",
                    imgSrc: "../img/image_15.jpg",
                    cat: 3,
                },
                {
                    title: "chinois market",
                    imgSrc: "../img/image_16.jpg",
                    cat: 1,
                },
                {
                    title: "twist it",
                    imgSrc: "../img/image_17.jpg",
                    cat: 2,
                },
                {
                    title: "chat",
                    imgSrc: "../img/image_18.jpg",
                    cat: 3,
                }
            ]
        },{
            articles: [
                {
                    title: "shiba",
                    imgSrc: "../img/image_19.jpg",
                    cat: 1,
                },
                {
                    title: "pokeboulle",
                    imgSrc: "../img/image_20.jpg",
                    cat: 2,
                },
                {
                    title: "poisson poulet",
                    imgSrc: "../img/image_21.jpg",
                    cat: 3,
                },
                {
                    title: "linge",
                    imgSrc: "../img/image_22.jpg",
                    cat: 1,
                },
                {
                    title: "spongieux",
                    imgSrc: "../img/image_23.jpg",
                    cat: 2,
                },
                {
                    title: "lien planteux",
                    imgSrc: "../img/image_24.jpg",
                    cat: 3,
                },
                {
                    title: "stefler",
                    imgSrc: "../img/image_25.jpg",
                    cat: 1,
                },
                {
                    title: "shregga",
                    imgSrc: "../img/image_26.jpg",
                    cat: 2,
                },
                {
                    title: "shrek coquin",
                    imgSrc: "../img/image_27.jpg",
                    cat: 3,
                }
            ]
        }
    ]
}

const plus = document.getElementById('+')
const moin = document.getElementById('-')
let title_cat = document.getElementById('title_cat')

let currentPage = 0 

title_cat.innerHTML = `Category 0`

plus.addEventListener('click',()=>{
    if(currentPage !== 2){
        currentPage ++ 
        generatArticle(data.pages[currentPage].articles)
        title_cat.innerHTML = `Category ${currentPage}`
    }
})
moin.addEventListener('click',()=>{
    if(currentPage !== 0){
        currentPage --
        generatArticle(data.pages[currentPage].articles)
        title_cat.innerHTML = `Category ${currentPage}`
    }
})

function generatArticle(articles){
    
    articlescontainer.innerHTML = ``

    for(const article of articles ){
        articlescontainer.innerHTML += `
            <li class="main--section--ul--li">
                <article class="main--section--article">
                    <img class="main--section--img" src="${article.imgSrc}" alt="${article.title}">
                    <h3>${article.title}</h3>
                </article>
            </li>
        `
    }

}generatArticle(data.pages[0].articles)


let cat1 = document.getElementById('cat1')
let cat2 = document.getElementById('cat2')
let cat3 = document.getElementById('cat3')

// cat1.addEventListener('click',(articles)=>{
//     if(articles.cat === 1){

//     }
    
// })