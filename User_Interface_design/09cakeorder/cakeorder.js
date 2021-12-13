function orderCake(str){
    var s11 = str.substring(0,4);
    var s22 = str.substring(4,str.length-3);
    var s33 = str.substring(str.length-3);

    var s1 = parseInt(s11);
    var s3 = parseInt(s33);
    let r1 = s1/1000;
    let kgs = r1;

    let p1 = kgs*450;
    let price = p1;
    return "Your order for " + Math.round(kgs)+ " kg " + s22 + " cake has been taken. your resquested to pay " + Math.trunc(price) +  " Rs on the order no:"+s3;

}
console.log(orderCake("1650chocklate450"));