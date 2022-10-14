//we start by selecting our empty list and store it in a variable 
const ul = document.querySelector(".nav-bar");
//then we select our sections to keep a count of them 
const sections = document.querySelectorAll(".section");

makeNavBar();



//this here is to change the active section we listen for a scroll then we activate our function
document.addEventListener('scroll', () =>{
        //i start by iterating over my section 
        sections.forEach((section)=> {
              if(isInViewport(section))//if my section is in the viewport i add the active-state class to it
              {
                  section.classList.add("active-state");
                  let id = section.getAttribute("id");
                  document.getElementById(`nav-${id}`).classList.add("active-link");
              }
            else//if not i remove the class from it
            {
                section.classList.remove("active-state");
                let id = section.getAttribute("id");
                  document.getElementById(`nav-${id}`).classList.remove("active-link");
            }
        });
});


let isScrolling;
document.onscroll = () =>{
    ul.style.display = "flex";
    clearTimeout(isScrolling);
    isScrolling = setTimeout( () => {
         ul.style.display = "none";
    }, 1000);
};


//This function is responsiple for creating the dyamic navigation bar
function makeNavBar()
{
    //i created a document fragment to attach all my links to it then append it to my list to improve the performance
    const temp = document.createDocumentFragment(); 
    
    sections.forEach((section) => {
        const link = section.getAttribute("id");
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${link}" id="nav-${link}" class="nav-link"> Section ${link} </a>`;
        temp.appendChild(li);
    });
    
    ul.appendChild(temp);//after creating all the links w append the document fragment to our list
}


//this function detects if my section is in my viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3 // i check if the section is in the middle of screen
    );
}


