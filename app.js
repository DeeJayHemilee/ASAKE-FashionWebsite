
var availableKeyword = [
      `Women Tops`,
      `Male Shirt`,
      `Street Wear`,
      `Pant Trouser`,
      `Cargo Pants`,
      `Hoodie`,
      `Joggers`,
      `Gowns`,
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
      var result = [];
      var input = inputBox.value;
      if (input.length) {
            result = availableKeyword.filter((keyword) => {
                  return keyword.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
      }
      display(result);

      if (!result.length) {
            resultsBox.innerHTML = ""; 
      }
};  

function display(result){
      const content = result.map((list) => {
            return "<li onclick=selectInput(this)>" + list + "</li>";
      });

      resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
     inputBox.value = list.innerHTML 
     resultsBox.innerHTML = "";
}



document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  var swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000, // Adjust the interval between slides as needed
    },
  });
});



function closePopup() {
  var overlay = document.querySelector('.overlay');
  overlay.classList.remove('active');
}

window.onload = function() {
  var overlay = document.querySelector('.overlay');
  overlay.classList.add('active');
};