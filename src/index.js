let displayImageMain = document.getElementById('displayImgMain')
let imageIterator = 0;
let imageIterationInterval = 3000
function change_index_of_image_src($imageIterator) {
    displayImageMain.setAttribute('src', `utilities/images/screenshot${imageIterator}.png`);
}
setInterval(() => {
    imageIterator++;
    change_index_of_image_src(imageIterator);
    if (imageIterator == 5) {
        imageIterator = 1;
        change_index_of_image_src(imageIterator)
    }
}, imageIterationInterval);