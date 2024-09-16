addEventListener('load', function () {
    nxt = document.getElementById("nxt")
    prev = document.getElementById("prev")
    img = document.querySelector("img")

    counter = 1;
    nxt.addEventListener('click', function () {
        counter++;
        if (counter == 8)
        counter=1
        img.src="images/"+counter+".png"

    })// next


    prev.addEventListener('click', function () {
        counter--;
        if (counter == 0)
            counter = 7
        img.src = "images/" + counter + ".png"

    })// prev


})//load