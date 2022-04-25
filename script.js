var formEl = document.getElementById("form")
var cookies = 0; 
var cpc = 1;
var h2Heading = document.getElementById("h2")


formEl.addEventListener("submit", function(e){
    e.preventDefault();
    sendData(formEl, 9, cookies);
})

function startGame(){
    bakeCookie();
    // hireBaker();
}

function bakeCookie(){
    cookies += cpc;
    document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;

    setTimeout(function() {
        gameOver();
        h2Heading.innerHTML = "Tiden er ute. Du har tilsammen " + cookies + " cookies.";
      }, 30000)
};

function hireBaker() {
    if(cookies >= 20) {
        cpc += 1;
        cookies -= 20;
        document.getElementById("cookie-text").innerHTML = "Cookies " + cookies;
    }else{
        alert("You need at least 20 cookies in order to pursue.");
    }
};

function gameOver(){
    bakeCookie=false;
    // document.getElementById("baker").disabled=true;
    
}

