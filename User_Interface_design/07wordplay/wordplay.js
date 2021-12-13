let number = 45;
function wordPlay(number){
    let res = "";
    if(number<1){
        return 'Not Valid';
    }
    else if(number> 50){
        return 'Range is High'
    }
    else {
        for (var i = 1; i<number;i++){
            if (i %3==0 && i % 5 == 0){
                res = res + " jump"; 
            }
            else if(i % 3 == 0){
                res = res + " Tap";
            }
            else if(i % 5 == 0) {
                res = res + " Clap";
            }
            else{
                res = res + " "+i;
            }
        }
        return res;
    }

}