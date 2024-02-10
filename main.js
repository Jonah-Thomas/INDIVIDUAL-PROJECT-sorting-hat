//Contains an array of all of our data that will be used on the dom.
const houses = [
    {
        id: 1,
        name: "Terry Boot",
        house: "Ravenclaw",
        value:"wisdom, wit, and learning",
        imageUrl:"https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?w=1200&fit=fill&f=top"
    },
    {
        id: 2,
        name: "Harry Potter",
        house: "Gryffindor",
        value: "bravery, daring, nerve, and chivalry.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShJ6D3Se0PqsjCeVkYOi3zWHnZ0FkFMKceVHkcLvIuBoEFODxAbVMLB5VOvg6tcL_tyo&usqp=CAU"
    },
    {
        id: 3,
        name: "Susan Bones",
        house: "Hufflepuff",
        value: "justice, loyalty, and patience",
        imageUrl: "https://i.redd.it/wy4jbgxxyem71.jpg"
    },
    {
        id: 4,
        name: "Draco Malfoy",
        house: "Slytherin",
        value: "ambition, cunning, and resourcefulness",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdm4DWA__oq_hUhKPaTR3lfxMzzedrbttUw&usqp=CAU"
    }
]

const darkArmy = [
    {
        id: 4,
        name: "Draco Malfoy",
        house: "Slytherin",
        value: "ambition, cunning, and resourcefulness",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdm4DWA__oq_hUhKPaTR3lfxMzzedrbttUw&usqp=CAU"
    }
]

//Created to render any html component we create throughout or code such as cards, bodies, etc...
const renderToDom = (divId, renderHtml) => {
    const selectedElement = document.querySelector(divId);
    selectedElement.innerHTML = renderHtml; 
    };

/**** CARD COMPONENT ****/
// Created a card component that displays the cards listed in the houses array. 
const cardsOnDom = () => {
    let domString ="";
    houses.map((house) => {
    domString += `
     <div id ="cardGroup" style="width: 18rem;">
     <img src=${house.imageUrl} class="card-img-top" alt="...">
     <div class="card-body">
       <h4 class="card-title">${house.name}</h4>
       <p class="card-text">House: ${house.house} </p>
       <p class="card-text">Values: ${house.value} </p>
       <button class="btn btn-danger" id="delete--${house.id}">Expel Student!</button>
     </div>
   </div>`;
 });
 renderToDom("#studentCards", domString);
};

/**** BUTTON COMPONENT ****/
// Created a component that contains a set of buttons that are meant to sortout the cards on the dom.
// Created a component that contains a set of cards showing expelled students that are recruited into Voldermort's Army!
const studentBtnGroup = () => {
let btnGroup = ` 
    <h5>Choose Your House!</h5>
    <div class="btn-group" role="group">
       <button type="button" class="btn btn-secondary" id="allHouses">All Houses</button>
       <button type="button" class="btn btn-primary" id="ravenClaw">Ravenclaw</button>
       <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
       <button type="button" class="btn btn-warning" id="gryffindor">Gryffindor</button>
       <button type="button" class="btn btn-dark" id="hufflepuff">Hufflepuff</button>
    </div>`;
    renderToDom("#studentBtnGroup", btnGroup);
}


/***** FORM COMPONENT *****/
// created a component that contains the form logic and functions to display buttons and cards on the dom when clicked.
const somethingElse = () => {
    const studForm = document.querySelector("#newStudent");
    
    //TO DO 1
    //check if studForm is null
    // student form is null *done*
    //TO DO 2
    //check how the event is being called to the dom. changed it as it was crossed out *done*
   
    // Form event listener, Added logic here that if the id of newStudents button is clicked it will run the code within the function.
    studForm.addEventListener("click", (e) => {
    e.preventDefault();
    //inserted logic here that replaces our previous button with a form upon clicking.
      if (e.target.id === "newStudent") {
        let studentForm = `
        <h3>Enter First Year Students:</h3>
        <form class="row g-6 justify-content-center" >
        <div class="col-auto">
          <label>Students:</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control" id="user-text">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3" id="cNS">Find Your Favorite First Year!</button>
        </div>
      </form>`;
       renderToDom("#newStudent", studentForm);
      };

    

    });



const targetcard = document.querySelector("button");
console.log("selected submit button", targetcard);

   //New Student card component.
    const newStudentCards = (e) => {
    e.preventDefault();
    const newStudent = {
        id: houses.length + 1,
        name: document.querySelector("input").value,
        house: houses[Math.floor (Math.random() * 4)],
        value: document.querySelector("#value").value,
        imageUrl: document.querySelector("#imageUrl").value
    };
     houses.push(newStudent);
     cardsOnDom(houses);
};


targetcard.addEventListener("click", newStudentCards); 
console.log("Listening to submit button", targetcard);

};
  




    


const startApp = () => {
    somethingElse();
};


startApp();