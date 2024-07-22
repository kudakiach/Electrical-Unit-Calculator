window.addEventListener('DOMContentLoaded', () => {

    const flatRate = 0.20;
    const standingCharges = 0.04;
    const vatTariff = 0.135;

    
    const errors = document.getElementById("error");
    const res1 = document.getElementById("result1");
    const res2 = document.getElementById("result2");
    const units = document.getElementById("units");
    const period = document.getElementById("billing");
    document.getElementById("submit").addEventListener('click', (e) => { 
        e.preventDefault();
        res1.innerHTML = "";
        res1.innerHTML = "";
        
        if(units.value === "" ){
            let msg = "Fill in the amount of units";
            errors.innerText = msg;
            return false;
        }

        if((isNaN(units.value)) || (isNaN(period.value))){
            let msg = "Only Numbers are Required";
            errors.innerText = msg;
             return false;
        }

        if(period.value === ""){
            let msg = "Provide Billing Period";
            errors.innerText = msg;
             return false;
        }

        const billWithoutVat = (parseInt(units.value) * flatRate) + (parseInt(period.value) * standingCharges);
        const totalAmountWithVat = billWithoutVat + (billWithoutVat * vatTariff);

        res1.innerHTML = "Amount of Bill without VAT: <span class='res'> &nbsp;$" + billWithoutVat.toFixed(2) + "</span>";;
        res2.innerHTML = "Total payable amount including VAT (13.5%): <span class='res'> &nbsp;$" + totalAmountWithVat.toFixed(2) + "</span>";
        errors.innerHTML = "";
       
    })
  })