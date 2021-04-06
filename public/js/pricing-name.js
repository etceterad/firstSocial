"use strict";

document.addEventListener('DOMContentLoaded', function() {

    function Pack(name, price) {
        this.name = name;
        this.price = price;
    
        return;
    }
    
    const starterPack = new Pack("Starter", 29);
    const enterpricePack = new Pack("Enterprice", 49);
    const professionalPack = new Pack("Professional", 99);
    const luxuryPack = new Pack("Luxury", 149);
    const vipPack = new Pack("VIP", 199);
    const godlikePack = new Pack("Godlike", 299);

    const starterButton = document.getElementById('starter'),
          professionalButton = document.getElementById('professional'),
          enterpriceButton = document.getElementById('enterprice'),
          luxuryButton = document.getElementById('luxury'),
          vipButton = document.getElementById('vip'),
          godlikeButton = document.getElementById('godlike'),
          title = document.querySelector('.purchase-popup__title');

    // const replaceTitleVar = function replaceTitle(pack) {
    //     const name = pack.name,
    //           price = pack.price;

    //     console.log(pack);
    //     title.innerHTML = `You want to buy ${name}? It will cost ${price}$`;
    // };

    function replaceTitle(packet) {
        console.log(packet);
        const name = packet.name,
              price = packet.price;

        title.innerHTML = `You want to buy ${name}? <br> It will cost ${price}$`;
    }


    starterButton.addEventListener('click', () => replaceTitle(starterPack));

    enterpriceButton.addEventListener('click', () => replaceTitle(enterpricePack));

    professionalButton.addEventListener('click', () => replaceTitle(professionalPack));

    luxuryButton.addEventListener('click', () => replaceTitle(luxuryPack));

    vipButton.addEventListener('click', () => replaceTitle(vipPack));

    godlikeButton.addEventListener('click', () => replaceTitle(godlikePack));
    


});