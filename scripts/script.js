/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Zorgt ervoor dat je op de zoekbalk kan klikken zonder dat het menu weggaat

document.getElementById("myDropdown").addEventListener("click",
function(e) {

e.stopPropagation();

});

  
// Dark mode:

const body = document.querySelector('body')
toggle = body.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


// Popup warning

// => : shorthand om een functie te definiëren (bijv. in plaats van .. function() )

const showButton = document.querySelectorAll(".delete-btn"); // hiermee selecteer ik alle 6 buttons
const dialog = document.querySelector("dialog"); // hiermee selecteer ik de eerste popup/dialog
const closeButton = document.getElementById("popup-close"); // hiermee selecteer ik de knop met "nee, annuleren" om uit de eerste popup te gaan
const deleteButton = document.getElementById("popup-delete"); // hiermee selecteer ik de knop met "ja, verwijderen" om naar de volgende popup te gaan
const dialogSuccess = document.getElementById("dialog-success"); // hiermee selecteer ik de volgende popup/dialog (succes melding)
const closeButtonSuccess = document.getElementById("success-close"); // hiermee selecteer ik het kruisje om uit de popup te gaan


// Openen waarchuwing popup
showButton.forEach((button) => // forEach zorgt ervoor dat hij door elke button met de class .delete-btn loopt zodat je op alle 6 prullenbakjes kan klikken
button.addEventListener("click", () => {
  dialog.showModal(); //opent de popup als je op de prullenbak klikt
  document.querySelector("body").classList.add("dont-scroll"); //toggled de class dat ervoor zorgt dat je in de popup niet kan scrollen
})
);

// Sluit de waarschuwing popup als gebruiker op nee klikt
closeButton.addEventListener("click", () => {
  dialog.close();
  document.querySelector("body").classList.remove("dont-scroll"); // verwijderd de classlist zodat je weer kan scrollen
});

// Opent succesvolle melding als gebruiker op ja klikt
deleteButton.addEventListener("click", () => {
  dialog.close();
  dialogSuccess.showModal();
} )

// Sluit de succes melding als de gebruiker op het kruisje klikt
closeButtonSuccess.addEventListener("click", () => {
  dialogSuccess.close();
  document.querySelector("body").classList.remove("dont-scroll"); // verwijderd de classlist zodat je weer kan scrollen
})
