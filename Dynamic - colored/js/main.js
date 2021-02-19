var typed5 = new Typed("#typed2", {
  strings: [
    "Web Scrapers",
    "Soap Clients",
    "Restful APIs",
    "MongoDb",
    "Docker Containers",
    "JWT Auth",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 500,
  startDelay: 0,
  cursorChar: "",
  shuffle: false,
  smartBackspace: false,
  loop: true,
});

// change navbar style on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
    if (window.scrollY > 860){
        document.querySelector("#navbar").style.background = 'transparent';
        document.querySelector('#navbar .nav-cta').style.background = 'black';
        document.querySelectorAll("#navbar>ul>li>a").forEach(item => item.style.color = '#040404');

    }else{
        document.querySelector("#navbar").style.opacity = 0.9;
        document.querySelector("#navbar").style.background = '#040404';
        document.querySelector('#navbar .nav-cta').style.background = '#27ae60';
        document.querySelectorAll("#navbar>ul>li>a").forEach(item => item.style.color = 'white');
    }
} else {
    // document.querySelectorAll("#navbar>ul>li>a").forEach(item => item.style.color = 'white');
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth scrolling

$("#navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    let offsetValue = hash == "#home" ? 125 : 0;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - offsetValue,
      },
      800
    );
  }
});
