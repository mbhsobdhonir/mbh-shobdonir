// MBH শব্দনীড় Website JavaScript


// Smooth Scrolling
document.querySelectorAll('nav a[href^="#"], .btn[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Footer Year Auto Update
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Header Shadow On Scroll
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    }
    else{
        header.style.boxShadow = "none";
    }

});


// Welcome Message
console.log("Welcome to MBH শব্দনীড় 📚");
