// Set the date we're counting down to
let countDownDate = new Date().getTime() + (1*24*60*60*1000) + (20*60*60*1000) + (1*60*1000) + (20*1000);

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector("svg");

        if (content.classList.contains("show")) {
            content.classList.remove("show");
            arrow.classList.remove("rotate");
        } else {
            document.querySelectorAll(".faq-content").forEach(c => c.classList.remove("show"));
            document.querySelectorAll(".faq-header svg").forEach(a => a.classList.remove("rotate"));
            content.classList.add("show");
            arrow.classList.add("rotate");
        }
    });
});
