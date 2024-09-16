//document
//document.body
//document.title
//document.fgColor = "red"
//// style
//document.body.style.backgroundColor = "lightgreen"

// Dom Selectors
//1- ID selector 
lst = document.getElementById("list1")

//2- class
document.getElementsByClassName("bGrey")// collection
document.getElementsByClassName("bGrey")[0]// return first element with class bGrey

// 3- tag Name 
document.getElementsByTagName("p") // return collection
//4-
document.getElementsByName("hoppy")// return list with 3 checkboxec
document.getElementsByName("hoppy")[0]

// queryselector
document.querySelector(".bGrey") // return first elemet match class bGrey

document.querySelectorAll(".bGrey")
document.querySelectorAll(".bGrey")[0]
document.querySelectorAll("#list1")[0]

/////////
tbl = document.getElementsByTagName("table")[0]
tr1 = tbl.getElementsByTagName("tr")[0]
td2 = tr1.getElementsByTagName("td")[1]
td2.innerText// cell 2
td2.innerText = "PHP"
td2.innerHTML = "<h1 align='center'><font color='red'>PHP</font></h1>"
cell4 = tbl.children[0].children[1].children[1]
tbl.getAttribute("class")//
tbl.setAttribute("class", "bPink")
tbl.setAttribute("align", "center")
h1 = document.querySelector("h1")
h1.classList.add("myclass")

chck1 = document.getElementsByName("hoppy")[0]
chck1.checked// true
chck1.checked = false
txt.value
// get any value from form using vaue prop
//===============
li = document.createElement("li")
li.innerText = "ST2024 ITI Mansoura Branch PHP G3"
li.style.color = "red"
li.style.backgroundColor="cyan"


lst.appendChild(li)
//============
imgs = document.getElementsByTagName("img")
for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.border="2px dashed red"
}











