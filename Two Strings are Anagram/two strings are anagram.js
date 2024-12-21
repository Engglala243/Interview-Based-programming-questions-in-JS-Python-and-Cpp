function areAnagrams(str1, str2){
    str1 = str1.replace(/[^\w]/g,'').toLowerCase();
    str2 = str2.replace(/[^\w]/g,'').toLowerCase();

    if(str1.length !== str2.length) return console.log("Given string's length is not same");

    let sortStr1 = str1.split('').sort().join('');
    let sortStr2 = str2.split('').sort().join('');

    if(sortStr1 === sortStr2) return console.log("Given string is Anagrams");
    console.log("Given string is not Anagrams");
}

areAnagrams('Acb','gac');
 