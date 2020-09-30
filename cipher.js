//variables
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let word = prompt ("Enter a word to code", "<word goes here>");
if (word != null){
    document.getElementById("word").innerHTML = (`You would like to code ${word}`)
};
let codeWord;
//Function to shuffle array
function shuffleArray(array) {
    codeArray = [].concat(array); //creates new array so not to overwrite alphabet
    for (let i = codeArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [codeArray[i], codeArray[j]] = [codeArray[j], codeArray[i]];
    }
    return codeArray;
}; //Fixed OVERWRITING ORIGINAL ARRAY//

//Function to turn string into array
function breakStr(str){
    for (let i=0; i<str.length-1; i++){
      strArray = str.split("");
    }
    return strArray
};

//Function to create codeword
function cipher(str){
    breakStr(str);
    codeArray= shuffleArray(alphabet); //shuffles alphabet
    for (let i=0; i < strArray.length; i++){
        for (let j=0; j< codeArray.length-1; j++){ //finds matching value repeats pair
            // console.log(strArray[i]);
            // console.log(codeArray[i]);
        };
    };
    strArray.join() // joins array back into string
};

//search through string array to correlate values with letters of codealphabet
//assign value of letters in string with value of letetrs in alphabet
//match those values with the same values of code alphabet
//use values of code alphabet to create codeword
