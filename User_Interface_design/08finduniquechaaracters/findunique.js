function modifyString(str){
    str = str.replace(/\s/g, "");
    str = str.toLowerCase();
    return str;
}
function uniqueCharacters(str){
    let result = "";
    let freq = {};
    let c = modifyString(str);
    for (i=0;i< c.length;i++){
        let char = c[i];
        if(freq[char]){
            freq[char]++
        } 
        else{
            freq [char] = 1
            result = result+ char;
        }
    }
    return result;

}
console.log(uniqueCharacters("what is my name"))