// palindrom kata

function palindrom(kata){

    let alphabets = /[A-Za-z]/;

    if(alphabets.test(kata)){

        let normalWord = kata.toLowerCase();
        let reverseWord = [];

        for(let i = normalWord.length-1;i>=0;i--){
            reverseWord = reverseWord + normalWord[i];
        }
    
        if(reverseWord === normalWord){
            console.log(kata + " adalah palindrom");
        } else {
            console.log(kata + " bukan palindrom");
        }    
        
    } else {
        console.log("Input harus berupa huruf!");
    }

}

palindrom("Malam");

// palindrom teks

function teksPalindrom(text) {

    if(typeof text === "string"){
        
        let lowText = text.toLowerCase();
        let cleanText = lowText.replace(/[^a-z0-9]+/g, '');
        let reverseText = cleanText.split('').reverse().join('');

        if(cleanText === reverseText){
            console.log(text + " adalah palindrom");
        } else {
            console.log(text + " bukan palindrom");
        }

    } else {
        console.log("Input text harus berupa string!");
    }

}

teksPalindrom("kerok korek");

//reverse word

function reverseKalimat(sentence){    

    if(typeof sentence == "string"){

        let reverseSentence = [];
        let splitSentence = sentence.split(" ");
        
        for(let i = splitSentence.length-1; i>=0; i--){
          
            if(i === splitSentence.length-1){
                reverseSentence += '\0';
            } else {
                reverseSentence += " ";
            }
        reverseSentence += splitSentence[i];
        }
        console.log(reverseSentence);
    } else {
        console.log("Kalimat harus berupa string!");
    }
}

reverseKalimat("Saya makan nasi");