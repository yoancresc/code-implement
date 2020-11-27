function divideAndSort(numInt){    

    let numInt = typeof numInt == "number" ? numInt : "Harus angka!";
    let numString = numInt.toString();

    while (numString.substr(0,1) === '0' && numString.length>1) { 
        numString = numString.substr(1,20); 
    }

    if(numString%1 === 0){

        let separate0 = numString.split(0);
            
        let divSort = separate0.map(item => {
            return item.split('').sort().join('');
        });
                
        let joinAllnum = divSort.join(""); 
        let allNumInt = parseInt(joinAllnum);
        
        console.log(allNumInt);

    } else {
        console.log("Input harus berupa integer !");
    }
   
};

divideAndSort(000321007989);
divideAndSort(321000987);
divideAndSort('000321007989');
divideAndSort(32100798.9);