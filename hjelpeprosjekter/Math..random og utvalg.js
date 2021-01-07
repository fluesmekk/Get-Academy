let seasonNumber = '';
seasonNumber = Math.floor(Math.random() * 4);
console.log(seasonNumber)



let season = '' || seasonNumber;

switch (season) {
    case 0:
        console.log('Its summer!');
        break;
    case 1:
        console.log('Its winter!');
        break;
    case 2:
        console.log('its Fall!');
        break;
    case 3:
        console.log('Its spring!');
        break;
}