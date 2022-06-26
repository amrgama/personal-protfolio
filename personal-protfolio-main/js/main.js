const 
    homeTab = document.querySelector("#home"),
    aboutTab = document.querySelector("#about"),
    protofolioTab = document.querySelector("#protofolio"),
    contactTab = document.querySelector("#contact"),
    blogTab = document.querySelector("#blog"),
    navItems = document.querySelectorAll("nav ul li"),
    switchBtn = document.getElementById("switch"),
    loadingBox = document.getElementById("loading-box");

// start javascript for navbar 
navItems.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let activeNavItem = document.querySelector("nav ul li.active");
        if(activeNavItem != item){
            activeNavItem.classList.remove("active");
            item.classList.add("active");
        }
    });
});

switchBtn.addEventListener("click",handleSwicthBtn);
function handleSwicthBtn (e) {
    // console.log("clicked ele ",e.target);
    if(e.target.checked) {
        e.target.parentElement.classList.add("checked");
    } else {
        e.target.parentElement.classList.remove("checked");
    } 
};

// end javascript for navbar 

// start javascript for animated counter in about page
let skillsContainer = document.querySelector("#skills")           
,    circles = document.querySelectorAll("#skills > div > div > div > div > div > svg");       
circles.forEach((item)=>{     
    let speed = 30
    ,   target = item.nextElementSibling.getAttribute("data-target")
    ,   counter = 0,inc = target / speed;
    window.addEventListener("scroll",(e)=>{
        if((skillsContainer.getBoundingClientRect().top + (skillsContainer.getBoundingClientRect().height / 2)) <= window.innerHeight){
            item.lastElementChild.classList.toggle("scroll-in-circle",true);   
            if(counter == 0){
                function updateCounter(){
                    counter += Math.ceil(inc);    
                    item.nextElementSibling.textContent = counter;
                    if(counter < target){
                        setTimeout(updateCounter,15);
                    } else{
                        item.nextElementSibling.textContent = target;
                    }
                }
                updateCounter();
            }
        }  
        else{
            counter = 0;
            item.nextElementSibling.textContent = 0;
            circles.forEach((item)=>{
                item.lastElementChild.classList.toggle("scroll-in-circle",false);
            });
        }
    });
});
// start coding for load animation
let defference = 0;
window.addEventListener("DOMContentLoaded",(e)=> {
    setLoadingTime(e.timeStamp);
    console.log("beforeStarting");
    defference = e.timeStamp;
    loadingBox.style.setProperty("--loading-dur",`${defference}ms`);
    loadingBox.classList.add("active");
    const circle = loadingBox.firstElementChild.firstElementChild;
    circle.classList.add("loading");
    // document.documentElement.style.setProperty("--EA-animation-dur",`${defference + 1000}ms`);
   
});

function setLoadingTime(time){
    let elements = document.querySelectorAll(`[data-ea-wait-loading="true"]`);
    elements.forEach(ele => {
        // console.log("e ",ele);
        ele.dataset.eaLoadingTime = `${time}`;   
    });
}
// window.addEventListener("load",(event)=> {
//     loadingBox.style.setProperty("--loading-dur",`${defference}ms`);
//     loadingBox.classList.add("active");
//     const circle = loadingBox.firstElementChild.firstElementChild;
//     circle.classList.add("loading");
// });
