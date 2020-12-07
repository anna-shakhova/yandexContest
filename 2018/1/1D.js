/***
 * @param container {Node} ссылка на DOM-node, в которую нужно вписать строку ‘str‘
 * @param str {string} строка, которую необходимо вписать. Максимальная длина равняется 100 символам
 * @param min {number} минимальный размер шрифта (целое число, min >= 1)
 * @param max {number} максимальный размер шрифта (целое число, max >= min >= 1)
 * @return {number | null} искомый размер шрифта (целое число) или null, если текст вписать нельзя
 */
function calcFontSize(container, str, min, max) {
    let header = document.createElement('span');
    header.style.whiteSpace = 'nowrap';
    header.innerText = str;
    container.appendChild(header);

    header.style.fontSize = `${max}`+'px';
    if ((header.offsetWidth <= container.offsetWidth)
         && (header.offsetHeight <= container.offsetHeight)) return max;

    header.style.fontSize = `${min}`+'px';
    if ((header.offsetWidth > container.offsetWidth)
        || (header.offsetHeight > container.offsetHeight)) return null;

    let idealSize = Math.floor(Math.min(min * container.offsetWidth/header.offsetWidth,
                                              min * container.offsetHeight/header.offsetHeight));
    header.style.fontSize = `${idealSize}`+'px';
    while ((header.offsetWidth <= container.offsetWidth)
           && (header.offsetHeight <= container.offsetHeight)) {
        idealSize++;
        header.style.fontSize = `${idealSize}`+'px';
    }
    while ((header.offsetWidth > container.offsetWidth)
        || (header.offsetHeight > container.offsetHeight)) idealSize--;

console.log(idealSize);
return idealSize;
}

calcFontSize(document.getElementById("container"), "Топ-10 jQuery-плагинов недели", 10, 100)