const reviews = [
    {
        id : 1,
        name: "Jhon Doe" ,
        job : "Web Designer",
        img: "http://dev.otelms.com/tectonic1.0.1/admin_html/assets/demo/avatar/2.jpg",
        info: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization"
    },
    {
        id : 2,
        name: "Mizanur Rahman" ,
        job : "UI Designer",
        img: "http://dev.otelms.com/tectonic1.0.1/admin_html/assets/demo/avatar/1.jpg",
        info: "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience"
    },
    {
        id : 3,
        name: "Shakib Rahman" ,
        job : "Graphic Designer",
        img: "http://dev.otelms.com/tectonic1.0.1/admin_html/assets/demo/avatar/3.jpg",
        info: "A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design. A graphic designer creates the graphics primarily for published, printed, or electronic media, such as brochures and advertising"
    },
]


// Select All the items
const personImg = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.querySelector(".info");

// Select All Btn
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Add global value
let currentItem = 0;

//Add Event Listener
window.addEventListener("DOMContentLoaded",()=>{
    showPerson(currentItem);
})

function showPerson(person){
    const item = reviews[person]
    personImg.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1 ;
    }
    showPerson(currentItem)
});

nextBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
})
// randomBtn.addEventListener("click",()=>{
//     currentItem = Math.floor(Math.random() * reviews.length);
//     console.log(currentItem);
// }


