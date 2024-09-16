window.addEventListener("load", function () {
    const prev = document.getElementsByTagName("input")[0];
    const nxt = document.getElementsByTagName("input")[1];
    const slid_show = document.getElementsByTagName("input")[2];
    const stop_show = document.getElementsByTagName("input")[3];
    const img = document.querySelector('img');
    let counter = 1;
    let intervalID; // Declare intervalID here

    nxt.addEventListener('click', function() {
        counter++;
        if (counter > 7) { // Corrected to > 7
            counter = 1;
        }
        img.src = "images/" + counter + ".png";
    }); // next

    prev.addEventListener('click', function() {
        counter--;
        if (counter < 1) { // Corrected to < 1
            counter = 7;
        }
        img.src = "images/" + counter + ".png";
    }); // previous

    slid_show.addEventListener('click', function() {
        clearInterval(intervalID); // Clear any existing interval
        intervalID = setInterval(() => {
            counter++;
            if (counter > 7) { // Corrected to > 7
                counter = 1;
            }
            img.src = "images/" + counter + ".png"; // Move this line inside the interval
        }, 1000);
    }); // slid_show

    stop_show.addEventListener('click', function() {
        clearInterval(intervalID); // Stop the interval
    }); // stop
});