AOS.init();

//Work active tabs
document.getElementById("open").click();
function OpenWork(evt, Comp_name) {
  var i, description, work;
  description = document.getElementsByClassName("description");
  for (i = 0; i < description.length; i++) {
    description[i].style.display = "none";
  }
  work = document.getElementsByClassName("work");
  for (i = 0; i < work.length; i++) {
    work[i].className = work[i].className.replace("active", "");
  }
  document.getElementById(Comp_name).style.display = "block";
  evt.currentTarget.className += " active";
}

// navbar collapse thing after onclick
$('.navbar-collapse a').click(function(){
           $(".navbar-collapse").collapse('hide');
       });

//reach the skies
var sky = document.getElementById("scroll-up");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(), top_progress_bar()};
function scrollFunction()
{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  {
    sky.style.display = "block";
  }
  else
  {
    sky.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Page Progress Bar
function top_progress_bar() {
  var Scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (Scroll / height) * 100;
  document.getElementById("progress_bar").style.width = scrolled + "%";
}


// stars animation down
// function createStars(type, Quantity){
//   for (let i=0; i<Quantity+Quantity; i++){
//     var star=document.createElement('div');
//     star.classList.add('star',`type-${type}`);
//     star.style.left=`${randomNumber(1,99)}%`;
//     star.style.bottom=`${randomNumber(1,100)}%`;
//     star.style.animationDuration=`${randomNumber(10,11)}s`;
//     document.body.appendChild(star);
//   }
// }
// function randomNumber(min,max){
//   return Math.floor(Math.random()*max)+min;
// }
// createStars(1,100);
// createStars(2,85);
// createStars(3,70);
