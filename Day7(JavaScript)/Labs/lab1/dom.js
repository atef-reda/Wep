        //- Using document object method 
        // a- Find all images in page by two ways (document default collection and 
        // document methods)
        document.getElementsByTagName("img")
        document.querySelectorAll("img")
        document.images
        // b- Find all options for City drop down list 
        cityOptions = document.querySelectorAll("option")
        // c- Find all rows for second table in page 
        document.getElementsByTagName("table")[1].rows
        document.querySelectorAll("table:nth-of-type(2) tr")
        // d- Find all elements that contain class name fontBlue
        document.querySelectorAll(".fontBlue")



        // 2- Do the following actions on the following HTML elements 
        // a- Get first anchor inside the second table then change its’ href property to 
        // training.com and it’s text to “Training” 
        anchor=document.querySelector('table:nth-of-type(2)').rows[0].children[0].children[0]
        anchor.href='https://training.com'
        anchor.textContent ="Training"; 
        // b- Find last image and change its borders to : solid pink 2px 
        lastimg=document.images[1] 
        lastimg.style.border='solid pink 2px'
        // c- create Javascript function to Find all checkboxes (checked) in userData form 
        // and alert their values
        function alertCheckedCheckboxes() {
            checkboxes = document.querySelectorAll('#UserData input[type="checkbox"]:checked');
            values = Array.from(checkboxes).map(checkbox => checkbox.value);
            alert(values.join(', ')); // Alert the values of checked checkboxes
        }
        // d- Find element with id value “example” then change it’s background color to 
        // pink 
        document.querySelectorAll('#example')[0].style.background='pink'
