//CREATE A FUNCTION THAT WILL CHECK IF A VALUE HAS BEEN CLICKED
//IF THE ELEMENT HAS BEEN CLICKED, ADD CLASS ACTIVE
//IF ANOTHER ELEMENT IS CLICKED, 
//DELETE THE CLASS ACTIVE ON THE PREVIOUS ELEMENT
//THEN ADD THE CLASSNAME TO THE PRESENTLY CLICKED
//ELEMENT
const submit = document.querySelector(".submit");
let placeholder = null;
activeRadio = () => {
    const label = document.querySelectorAll("label");
    label.forEach(item => {
        item.addEventListener('click', () => {
          const wasActive = item.classList.contains('active');
          label.forEach(item => {
            item.classList.remove('active');
          });
          if (!wasActive) {
            item.classList.add('active');
            placeholder = item.innerHTML; //get the value to paste into the new page  
            // console.log(placeholder);
          }
          
        });
      });
    }


//create a function that will hold the value that was submitted
function confirmation (){
    const container = document.querySelector(".container");
    while (container.hasChildNodes()) {    //will remove first child until none left
        container.removeChild(container.firstChild);
        container.classList.remove("container");
    }
    createBody();
        
}

function createBody(){
    const div = document.querySelector("div");
    let img = document.createElement("img");
    const firstParagraph = document.createElement("p");
    const h2 = document.createElement("h2");
    const secondParagraph = document.createElement("p");
    bodyContent();

    
    function bodyContent(){
      containerConfirmed();
      createImage();
      createFirstParagraph();
      createGreetings();
      creatClosing();
    }

    function containerConfirmed(){
      div.classList.add("container_confirmed");
    }

    function createImage(){
      div.appendChild(img);
      img.src = "App/images/illustration-thank-you.svg";
      img.classList.add("thank-you-img");
    }

    function createFirstParagraph(){
      let firstParagraphText = `You selected ${placeholder} out of 5`;
      firstParagraph.innerHTML = firstParagraphText;
      firstParagraph.classList.add("rating");
      div.appendChild(firstParagraph);
    }

    function createGreetings(){
      h2.classList.add("thank-you");
      h2.innerHTML = "Thank you!";
      div.appendChild(h2);
    }

    function creatClosing(){
      secondParagraph.classList.add("closing");
      secondParagraph.innerHTML = `We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!`;
      div.appendChild(secondParagraph);
    }
}

activeRadio();
submit.addEventListener("click", confirmation);



