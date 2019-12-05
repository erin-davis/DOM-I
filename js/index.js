const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//do this to loop through the nav and put those words in
//for the number part, it will have to be able to change so something like
//`${i}` in there to get it to change!

let navText = document.querySelectorAll('nav a');

navText.forEach((e, i) => {
        e.textContent = siteContent["nav"][`nav-item-${i}`];
    })
    //^^ important note there: the second parm of forEach is Index... which i totally did not know


//add on header imag here
const circleCode = document.querySelector('#cta-img');
circleCode.src = siteContent["cta"]["img-src"];

//put the header text here
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

//cta button goes here
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

//now all that main content will go here not including that img

//an array so i can write less code
const orderArr = ["features", "about", "services", "product", "vision"];
//titles here
let allHeaders = document.querySelectorAll('.text-content h4');

allHeaders.forEach((e, i) => {
    e.textContent = siteContent["main-content"][`${orderArr[i]}-h4`];
})

/* the most undry code ever

allHeaders[0].textContent = siteContent["main-content"]["features-h4"];
allHeaders[1].textContent = siteContent["main-content"]["about-h4"];
allHeaders[2].textContent = siteContent["main-content"]["services-h4"];
allHeaders[3].textContent = siteContent["main-content"]["product-h4"];
allHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

will keep these as reference to show what i was doing this time around

*/

// paragraphs here
let allPara = document.querySelectorAll('.text-content p');

allPara.forEach((e, i) => {
    e.textContent = siteContent["main-content"][`${orderArr[i]}-content`];
})

//now the image gets put in

let midImg = document.querySelector('.middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

//onto the contact. might be able to loop here as well

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];


let contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent["contact"]["contact-h4"];

//copyright goes here

let foot = document.querySelector('footer');
foot.textContent = siteContent["footer"]["copyright"];


//task 3 from here

//change the nav text to green

navText.forEach((e) => {
    e.style.color = "green";
})

//adds the new things to the dom but doesn't change their colors lol
let newNavItem1 = document.createElement('a');
let newNavItem2 = document.createElement('a');

newNavItem1.textContent = "Log In";
newNavItem2.textContent = "Delete Site";

let navCont = document.querySelector('nav');
navCont.prepend(newNavItem2);
navCont.append(newNavItem1);

newNavItem1.style.color = "green";
newNavItem2.style.color = "green";



//make the button change colors on click?

const colorArr = ["red", "blue", "pink", "green", "violet", "hotpink", "lightslategray"];

let random = Math.floor(Math.random() * ((colorArr.length) - 0) + 0);
let random2 = Math.floor(Math.random() * ((colorArr.length) - 0) + 0);
let random3 = Math.floor(Math.random() * ((colorArr.length) - 0) + 0);

let buttonStyle = document.querySelector('button');

buttonStyle.addEventListener('mouseover', (e) => {
    buttonStyle.style.backgroundColor = `${colorArr[random]}`;
})
buttonStyle.addEventListener('mouseout', (e) => {
    buttonStyle.style.backgroundColor = `${colorArr[random2]}`;
})
console.log(random);
console.log(random2);