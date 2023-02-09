document.getElementById('menu-button').addEventListener('click',()=>{
console.log("Toggle navigation");
document.getElementById('icon-hamburger').classList.toggle('sm-hidden');
document.getElementById('icon-close').classList.toggle('sm-hidden');
document.getElementById('primary-nav').classList.toggle('sm-hidden');
});

let indicators = document.getElementsByClassName('carousel-indicator');
Array(indicators.length).fill().forEach((i, index)=>{
    indicators.item(index).addEventListener('click', ()=>{
        console.log(`item-${index+1}`);
        document.getElementById(`item-${index+1}`).scrollIntoView({block:"center"});
        Array(indicators.length).fill().forEach((i, index)=>{
            indicators.item(index).classList.remove('active');
        });
        indicators.item(index).classList.add('active');
    });
});