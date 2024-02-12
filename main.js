//Contains an array of all of our data that will be used on the dom.
const houses = [
    {
        id: 1,
        name: " Terry Boot",
        house: " Ravenclaw",
        value:" Wisdom, Wit, and Learning",
        imageUrl:"https://images.ctfassets.net/usf1vwtuqyxm/t6GVMDanqSKGOKaCWi8oi/74b6816d9f913623419b98048ec87d25/LunaLovegood_WB_F5_LunaLovegoodPromoCloseUp_Promo_080615_Port.jpg?w=1200&fit=fill&f=top"
    },
    {
        id: 2,
        name: " Harry Potter",
        house: " Gryffindor",
        value: " Bravery, Daring, Nerve, and Chivalry.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShJ6D3Se0PqsjCeVkYOi3zWHnZ0FkFMKceVHkcLvIuBoEFODxAbVMLB5VOvg6tcL_tyo&usqp=CAU"
    },
    {
        id: 3,
        name: " Susan Bones",
        house: " Hufflepuff",
        value: " Justice, Loyalty, and Patience",
        imageUrl: "https://i.redd.it/wy4jbgxxyem71.jpg"
    },
    {
        id: 4,
        name: " Draco Malfoy",
        house: " Slytherin",
        value: " Ambition, Cunning, and Resourcefulness",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdm4DWA__oq_hUhKPaTR3lfxMzzedrbttUw&usqp=CAU"
    }
]

const darkArmy = []

//***** UTILITY FUNCTION *****/
//Created to render any html component we create throughout or code such as cards, bodies, etc...
const renderToDom = (divId, renderHtml) => {
    const selectedElement = document.querySelector(divId);
    selectedElement.innerHTML = renderHtml; 
    };

/***** CARD COMPONENTS *****/
// Created a card component that displays the cards listed in the houses array. 
const cardsOnDom = () => {
    let domString ="";
    houses.map((house) => {
    domString += `
     <div id ="cardGroup" style="width: 18rem;">
     <img src="${house.imageUrl}" id="imageUrl" class="card-img-top" alt="...">
     <div class="card-body">
       <h4 class="card-title">${house.name}</h4>
       <p class="card-text">House: ${house.house}</p>
       <p class="card-text" id="value">Core Values:${house.value}</p>
       <button class="btn btn-danger" id="delete--${house.id}">Expel Student!</button>
     </div>
   </div>`;
 });
 renderToDom("#studentCards", domString);
};

// Created a component that displays the cards showing expelled students that will be recruited into Voldermort's Army!
const darkArmyOnDom = () => {
  let domString ="";
  houses.map((darkArmys) => {
  domString += `
   <div id ="cardGroup" style="width: 18rem;">
   <img src="${darkArmys.imageUrl}" id="imageUrl" class="card-img-top" alt="...">
   <div class="card-body">
     <h4 class="card-title">${darkArmys.name}</h4>
     <p class="card-text">House: ${darkArmys.house}</p>
     <p class="card-text" id="value">Core Values:${darkArmys.value}</p>
     <button class="btn btn-danger" id="delete--${darkArmys.id}">Expel Student!</button>
   </div>
 </div>`;
});
renderToDom("#expelledStudents", domString);
};

/**** BUTTON COMPONENT ****/
// Created a component that contains a set of buttons that are meant to sortout the cards on the dom.

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
};

/***** FORM COMPONENT *****/
//We have a component that contains the logic to display buttons and cards on the dom when clicked.
//const welcomeToHogwarts = () => {
const studForm = document.querySelector("#newStudentForm");
   
// Form event listener, Added logic here that if the id of newStudents button is clicked it will run the code within the function.
  studForm.addEventListener("click", (e) => {
  e.preventDefault();
//inserted logic here that replaces our previous button with a form upon clicking.
  if (e.target.id === "welcomeBtn") {
        let studentForm = `
        <h3>Enter First Year Students:</h3>
        <form class="row g-6 justify-content-center">
        <div class="col-auto">
          <label id="stud" class="justify-content-center">Students:</label>
          <label class="row g-6 justify-content-center" id="studentPhoto">Student Photo:</label>
        </div>
        <div class="col-auto">
          <input type="text" class="form-control" id="name"  placeholder="Enter Student Name!">
          <input type="url" class="form-control" id="imageUrl" placeholder="Enter Photo Url!">
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3" id="cNS">Find Your Favorite First Year!</button>
        </div>
      </form>`;
       //this here allows me to remove the Welcome Button when pressed
       //Using dot notation, we pass the remove button class into the .classlist property using the toggle method.
       //in which the target element is now given the class name "removeButton".
       const element = document.getElementById("welcomeBtn");
       element.classList.toggle("removeButton");
       renderToDom("#newStudentForm", studentForm);
  };

//Here we created an event listener for the button that submits on the form.
const form = document.querySelector("#cNS");
//console.log("selected submit button", form);

   //***** Create New Sudent Component *****
    const newStudentCards = (e) => {
    e.preventDefault();

    //Here we declare both the house and values to the array keys that match each house and core value.
    //the reason for this is because there was no reasonable way to  randomize eath of these using existing values within the houses array.
    let housess = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"];
    let coreValuess = [" ambition, cunning, and resourcefulness", " justice, loyalty, and patience", " bravery, daring, nerve, and chivalry.", " wisdom, wit, and learning"];
    
    //here we are setting the random indexes between each house and its core values according to this math.random method used below.
    //by setting them both to the same method they share the same random index.
    let randomHouseNValues = Math.floor(Math.random()*4);

    //This is our Turney that will contain our new array that contains the key pair data from our form and random index declarations above.
    const newStudent = {
        id: houses.length + 1,
        name: document.querySelector("#name").value,
        house: housess[randomHouseNValues],
        value: coreValuess[randomHouseNValues],
        imageUrl: document.querySelector("#imageUrl").value
    };
     houses.push(newStudent);
     //form.reset();
     cardsOnDom(houses);
     studentBtnGroup();
     //darkArmyOnDom(darkArmy);   
};
//This is our event listener that upon being clicked runs the function "newStudentCards()" the reason why we dont need the () is because newStudentCards below is a callback function which is a way of calling a function after other code has been ran. 
form.addEventListener("click", newStudentCards);
//console.log("Listening to submit button", newStudentCards);

/***** FILTER COMPONENT ****/
//Filter function for each house. 
//We assign the filter to the house names, then push and return the house to the array.
//typeString and houseName are both paramaters set for better readability of the code.
const filter = (typeString) => {
  const houseArray = [];
  // the for loop here is use to iterate over the array to find the type of pet passed through the filter.
  houses.forEach((houseName) =>{
    if (houseName.house === typeString) {
      houseArray.push(houseName);
    }

  });
cardsOnDom(houseArray);
};

const allHousesBtn = document.querySelector("#allHouses");
const ravenClawBtn = document.querySelector("#ravenClaw");
const slytherinBtn = document.querySelector("#slytherin");
const gryffindorBtn = document.querySelector("#gryffindor");
const hufflepuffBtn = document.querySelector("#hufflepuff");

//Each button here calls to a filter function that points to the specific type the user intends to partake in.
allHousesBtn.addEventListener("click", () => {
  cardsOnDom(houses);
});
ravenClawBtn.addEventListener("click", () => {
  const ravenclaw = filter("ravenclaw");
  cardsOnDom(ravenclaw);
});
slytherinBtn.addEventListener("click", () => {
  const slytherin = filter("slytherin");
  cardsOnDom(slytherin);
});
gryffindorBtn.addEventListener("click", () => {
  const gryffindor = filter("gryffindor");
  cardsOnDom(gryffindor);
});
hufflepuffBtn.addEventListener("click", () => {
  const hufflepuff = filter("hufflepuff");
  cardsOnDom(hufflepuff);
});

});//*** End of FORM COMPNOENT ***


//Delete Component
//Here we are creating a delete


//}
/*
const startApp = () => {
    somethingElse();
};
startApp();*/