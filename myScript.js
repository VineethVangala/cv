function calculateExperience() {
    today = new Date();
    tcs_start = new Date(2018,0,18);
    tcs_end = new Date(2021,5,4);
    boeing_start = new Date(2021,5,7);
    relevant_start = new Date(2018,4,20);
    document.getElementById("boeing-duration").innerText = dateDifference(boeing_start,today);
    document.getElementById("tcs-duration").innerText = dateDifference(tcs_start,tcs_end);
    document.getElementById("total-duration").innerText = dateDifference(tcs_start,today);
    document.getElementById("total2-duration").innerText = dateDifference(tcs_start,today);
    document.getElementById("relevant-duration").innerText = dateDifference(relevant_start,today);
}

function dateDifference(startDate,endDate){
    var months;
    months = endDate.getMonth() - startDate.getMonth() +  (12 * (endDate.getFullYear() - startDate.getFullYear()));
    if(endDate.getDate() < startDate.getDate()){
        months -=1;
    }
    var years = Math.floor(months / 12);
    var extraMonths = months % 12;
    return years +' years and ' +extraMonths +' months';
}

window.addEventListener("load", calculateExperience);