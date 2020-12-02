/** @returns string */
const find = function(inputString) {
    const lastSemi = inputString.lastIndexOf(';');
    const closeEmp = inputString.indexOf(')');
    const hash = inputString.indexOf('#');
    const blank = inputString.indexOf(' ', hash);

    const angle = Number(inputString.substring(lastSemi+2, closeEmp));
    const planet = inputString.substring(hash+1, blank);

    return Number(angle > 90).toString() + ' ' + planet;
}

find('M13 (323.7; 23.4; 24.15) G-312#3 79262531879');