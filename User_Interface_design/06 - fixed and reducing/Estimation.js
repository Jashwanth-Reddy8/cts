const _Principalamount = document.getElementById("pricipalAmount");
const _interestRateYear = document.getElementById("interestRate");
const _tenureMonth = document.getElementById("tenure");

function getEmiReducing(P,N,R){
    return (P * R * (Math.pow((1+R),N) / (Math.pow((1+R),N) -1 )));
}

function EstimationReducinginterestLoan(){
    calculateEMI();
    totalPayment();
    totalinterest();
    EstimationFixedinterestLoan();
}

function EstimationReducinginterestLoan();{
    const pricipalAmount = Number(_Principalamount.value);
    const interestRateYear = Number(_interestRateYear.value);
    const tenureMonth = Number(_tenureMonth.value);

    const totalInterestFixed = pricipalAmount * interestRateYear * tenureMonth / 1200;
    const totalPaymentFixed = pricipalAmount + totalinterestFixed;
    const emiFixed = totalPaymentFixed/tenureMonth;

    document.getElementById("tInterestFixed").innerHTML = Number(totalInterestFixed).toFixed(2).toString();
    document.getElementById("tPaymentFixed").innerHTML = Number(totalPaymentFixed).toFixed(2).toString();
    document.getElementById("EMIFixed").innerHTML = Number(emiFixed).toFixed(2).toString();
}

function reducingLoan(){
    const pricipalAmount = Number(_Principalamount.value);
    const interestRateYear = Number(_interestRateYear.value);
    const interestRateMonth = Number(_interestRateYear / 1200);
    const tenureMonth = Number(_tenureMonth.value);

    const emiReducing = getEmiReducing(pricipalAmount,tenureMonth,interestRateMonth);
    const totalPaymentReducing = tenureMonth* emiReducing;
    const totalinterestReducing = totalPaymentReducing- pricipalAmount;

    return{
        emiReducing= emiReducing,
        totalPaymentReducing = totalPaymentReducing,
        totalinterestReducing = totalinterestReducing,
    };
}

function calculateEMI() {
    const emiReducing = reducingLoan().emiReducing;
    document.getElementById("EMI").innerHTML = Number(emiReducing).toFixed(2).toString();
}

function totalPayment(){
    const totalPaymentReducing = reducingLoan.totalPaymentReducing;
    document.getElementById("tpayment").innerHTML = Number(totalPaymentReducing).toFixed(2).toString();
}

function totalinterest(){
    const totalinterestReducing = reducingLoan().totalinterestReducing;
    document.getElementById("tInterest").innerHTML = Number(totalinterestReducing).toFixed(2).toString();
}


