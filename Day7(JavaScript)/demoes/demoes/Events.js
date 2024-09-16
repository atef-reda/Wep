addEventListener('load', function () {
    function fun1() {
        document.title = "updated"
    }

    updatebtn.onclick = function () {
        document.body.style.backgroundColor = "lightgreen"
    }
    updatebtn.addEventListener('click', fun1)
    updatebtn.addEventListener('click', function () {

        document.title = "updated"

    })

    div = document.querySelector("div")
    div.addEventListener('mouseover', function (event) {
        //console.log("mouseover")
        //console.log(this)
        console.log(event)
    })// mouseover

    div.addEventListener('mousemove', function (event) {

        //console.log("mousemove")
        this.innerHTML="<h1 align='center'><font color='darkcyan'>"+event.x+" : "+event.y+"</font></h1>"

    })// mousemove

    div.addEventListener('mouseout', function () {
        //console.log("mouseout")
    })// mouseout



    myselect = document.querySelector("select")
    span = document.querySelector("span")
    myselect.addEventListener('change', function () {
        span.style.font = "bold 25px tahoma"
        span.style.color = "red"
        span.innerText=this.value
    })

    //

    // keydown
    //txt.addEventListener('keydown', function () {
    //    span.style.font = "bold 25px tahoma"
    //    span.style.color = "blue"
    //    span.innerText=this.value

    //})


    //key up
    //txt.addEventListener('keyup', function () {
    //    span.style.font = "bold 25px tahoma"
    //    span.style.color = "magenta"
    //    span.innerText = this.value

    //})

    //keypress

    txt.addEventListener('keypress', function () {
        span.style.font = "bold 25px tahoma"
        span.style.color = "magenta"
        span.innerText = this.value

    })









});// load