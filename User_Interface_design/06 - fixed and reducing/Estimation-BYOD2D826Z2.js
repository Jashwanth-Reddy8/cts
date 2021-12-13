const _Principalamount = document.getElementById("pricipalAmount");
const _intrestRateYear = document.getElementById("intrestRate");
const _tenureMonth = document.getElementById("tenure");

function getEmiReducing(P,N,R){
    return (P * R * (Math.pow((1+R),N) / (Math.pow((1+R),N) -1 )));
}

function EstimationReducingIntrestLoan(){
    calculateEMI();
    totalPayment();
    totalIntrest();
    EstimationFixedIntrestLoan();
}

function reduingLoan();

