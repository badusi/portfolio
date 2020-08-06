var text = document.getElementById('intro--about');
        var typewriter = new Typewriter(text, {
            loop: true
        });

        typewriter.typeString('IDesign • IExplore • ICode')
            .pauseFor(1800)
            .deleteAll()
            .typeString('I can help you design a site that you will love')
            .pauseFor(1800)
            .deleteAll()
            .typeString('<strong>I am a front end developer!</strong>')
            .start();

var background = {}
    background.initializr = function () {
var $this = this;


//option
$this.id = "background_css3";
$this.style = {
    bubbles_color: "gold",
    stroke_width: 0,
    stroke_color: "black"
};

$this.bubbles_number = 50;
$this.speed = [1500, 8000]; //milliseconds
$this.max_bubbles_height = $this.height;
$this.shape = false ; // 1 : circle | 2 : triangle | 3 : rect | false :random

if ($("#" + $this.id).lenght > 0) {
    $("#" + $this.id).remove();
}

$this.object = $("<div style='z-inde:-1; margin:0;padding:0; overflow:hidden; position:absolute; bottom:0' id='" + 
    $this.id + "'> </div>'").appendTo("body");

$this.ww = $(window).width()
$this.wh = $(window).height()
$this.width = $this.object.width($this.ww);
$this.height = $this.object.height($this.wh);


$("body").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: " + 
    $this.style.bubbles_color + "; position: absolute}</style>");

for (i = 0; i < $this.bubbles_number; i++) {
                $this.generate_bubbles()
            }
        }


background.generate_bubbles = function () {
    var $this = this;
    var base = $("<div class='shape_background'></div>");
    var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1, 3));
    if (shape_type == 1) {
        var bolla = base.css({
            borderRadius: "50%"
        })
    }
    else if (shape_type == 2) {
        var bolla = base.css({
            width: 0,
            height: 0,
            "border-style": "solid", "border-width": "0 40px 69.3px 40px","border-color": "transparent transparent " + 
             $this.style.bubbles_xcolor + " transparent", background: "transparent"
         });
    }
    else {
        var bolla = base;
    }
    var rn_size = $this.rn(.8, 1.2);

    bolla.css({ "transform": "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)",top: $this.wh + 100,
        left: $this.rn(-60, $this.ww + 60)
         });
    bolla.appendTo($this.object);

    bolla.transit({
        top: $this.rn($this.wh / 2, $this.wh / 2 - 60), 
        "transform": "scale(" + rn_size + ") rotate(" + $this.rn(-360, 360) + "deg)", opacity: 0
            }, $this.rn($this.speed[0], $this.speed[1]), function () {
                $(this).remove();
                $this.generate_bubbles();
                })
}


background.rn = function (from, to, arr) {
if (arr) {
    return Math.random() * (to - from + 1) + from;
} 
else {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
}
background.initializr()


//ScrollReveal
 ScrollReveal({
    reset: true,
    mobile: true,});
ScrollReveal().reveal('.text-character')
ScrollReveal().reveal('.intro--name', {
    delay: 700});
ScrollReveal().reveal('.intro--particulars', {
    delay: 2100});
var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    delay: 500};

ScrollReveal().reveal('.slide-up', slideUp, );


// Toggle dark/light mode 
var wrapper = document.querySelector("body");
var darkModeToggle = document.querySelector(".dark-mode-button");

function toggleSunFlash() {
    wrapper.classList.toggle("dark");
        if (darkModeToggle.name == "flash") {
            darkModeToggle.name = "sunny";
            } 
        else {
            darkModeToggle.name = "flash";
            }
        }

function toggleDarkMode() {
    toggleSunFlash();
    }
darkModeToggle.addEventListener("click", toggleDarkMode);


//Project Card
let projects = [{
    name: "Digital Walls",
    description: "This is a Web site that allow you find and explore different app",
    technologies: ['Html', 'CSS', 'JavaScript'],
    github: 'https://github.com/Badusi',
    preview: "https://google.com",
    image: 'ancestor/img/card.jpg'},

{
    name: "Digital Walls",
    description: "This is a Web site that allow you find and explore different places in the world on the Go",
    technologies: ['Html', 'CSS', 'JavaScript'],
    github: 'https://github.com/Badusi',
    preview: "https://google.com",
    image: 'ancestor/img/Macbook.jpg'}, 
];
let projectContent = document.querySelector(".all-works");
var fragment = document.createDocumentFragment();

projects.forEach((project) => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="works__card">
                     <div class="works__card--content">
                     <div class="works__card--content--header">
                     <h2 style="color: #0dd ">${project.name}</h2>
                     </div>
                     <div class="works__card--content--about">
                     <p>${project.description}</p>
                     </div>
                     <div class="works__card--content--tech"> <span>${project.technologies[0]}</span>
                     <span>${project.technologies[1]}</span> <span>${project.technologies[2]}</span> </div>
                     <div class="works__card--content--links"> <a href="${project.github}"><span
                     class="fa fa-github"></span></a> <a href="${project.github}"><span
                     class="fa fa-link"></span></a> </div>
                     <p><a href="./indexx.html" style="text-decoration: underline">View use case</a></p>
                     </div>
                     <div class="works__card--image">
                     <img src="${project.image}" width="100%" height="auto">
                     </div>
                     </div> `;
fragment.appendChild(div)  });
projectContent.appendChild(fragment);
