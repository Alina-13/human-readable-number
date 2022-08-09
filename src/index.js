module.exports = function toReadable (number) {
    const array1 = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
    const array2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let text = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

    if ((number = number.toString()).length > 9) {
        return 'overflow'
    }

    if (!number) {
        return ''
    }
    
    if (number == 0) {
        return 'zero'
    }

    let sting = '';

     sting += (text[1] != 0) ? (array1[Number(text[1])] || array2[text[1][0]] + ' ' + array1[text[1][1]]) + 'crore ' : '';
     sting += (text[2] != 0) ? (array1[Number(text[2])] || array2[text[2][0]] + ' ' + array1[text[2][1]]) + 'lakh ' : '';
     sting += (text[3] != 0) ? (array1[Number(text[3])] || array2[text[3][0]] + ' ' + array1[text[3][1]]) + 'thousand ' : '';
     sting += (text[4] != 0) ? (array1[Number(text[4])] || array2[text[4][0]] + ' ' + array1[text[4][1]]) + 'hundred ' : '';
     sting += (text[5] != 0) ? (array1[Number(text[5])] || array2[text[5][0]] + ' ' + array1[text[5][1]]) : '';
     return sting.trim();

}
