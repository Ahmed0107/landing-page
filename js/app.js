
//bring all sections to a nodelist
const secs = document.querySelectorAll("section");

//bring the menu 
const myUl = document.getElementById("navbar__list");

//add an anonymous fragment to improve performance 
const frag = document.createDocumentFragment();


    secs.forEach((el, index) => {
        let lnkText = el.getAttribute('data-nav');
        let nwLink = document.createElement("a");

        // add styling class to anchors
        nwLink.classList.add('menu__link')

        //create a list item
        let txtNod = document.createTextNode(lnkText);
        let nwLi = document.createElement("li");

        //apped things
        nwLink.appendChild(txtNod);
        nwLi.appendChild(nwLink);
        
        //add smoth behavior the the page
        nwLink.addEventListener('click', ()=> {
            el.scrollIntoView({behavior: "smooth"})
        })
        
        //apend link to the frag
        frag.appendChild(nwLi);
    })

    //append frag to UL
    myUl.appendChild(frag)


// Add class 'active' to section when near top of viewport
function setActiveClasses(){
 
    //loop for sections

    secs.forEach((sec) => {
            //get the current section position and store it in a variable
        let secPos = sec.getBoundingClientRect();

        if (secPos.top > 0 &&  secPos.top < 300) {

            //check section if not contains  an active class
            if(!sec.classList.contains('your-active-class')){
                
                //add an active class
                sec.classList.add('your-active-class');
            }
            
        }
        else{
            //remove an active class
            sec.classList.remove('your-active-class');
        }
    })
}

//Set an Active Calss on scroll
document.addEventListener('scroll', setActiveClasses)




