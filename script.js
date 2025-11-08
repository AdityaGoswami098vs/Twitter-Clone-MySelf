const input = document.querySelector(".after-nav-input-icon-btn input");
const postButton = document.querySelector(".after-nav-btn button");

input.addEventListener('input', function () {
    if (this.value.trim() !== '') {
        postButton.style.backgroundColor = 'ghostwhite';
    } else {
        postButton.style.backgroundColor = 'rgb(120, 122, 122)';
    };
});

const inputSearch = document.querySelector(".right-2 .search-bar input");
const searchBorder = document.querySelector(".right-2 .search-bar");

inputSearch.addEventListener("focus", function() {
    searchBorder.style.border = "2px solid rgb(29, 155, 240)";
});

inputSearch.addEventListener("blur", function() {
    searchBorder.style.border = "1px solid #2f3336";
});

const moreBtn = document.querySelector('.more');
const moreBoxContainer = document.querySelector('.on-more-click');

moreBtn.addEventListener('click', function (event) {
  event.preventDefault();        // stop the link from navigating
  event.stopPropagation();       // stop it from triggering document click
  moreBoxContainer.style.display = 'block';  // show the box
});

// hide the box when clicking outside
document.addEventListener('click', function (event) {
  if (!moreBoxContainer.contains(event.target) && event.target !== moreBtn) {
    moreBoxContainer.style.display = 'none';
  }
});

const closeBtn = document.querySelector(".box-2 .box-2-headline img");
const Box2 = document.querySelector(".right-2 .boxes .box-2")

closeBtn.addEventListener("click", function(){
  Box2.style.display = "none";
});