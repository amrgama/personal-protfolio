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
circles.forEach((item,index)=>{     
    let speed = 30
    ,   target = item.nextElementSibling.getAttribute("data-target")
    ,   counter = 0,inc = target / speed;
    item.lastElementChild.style.setProperty("--percent",`${item.nextElementSibling.dataset.target}`);
    // console.log("parenct " + item.nextElementSibling.dataset.target);
    window.addEventListener("scroll",(e)=>{
        if((item.parentElement.getBoundingClientRect().top + (item.parentElement.getBoundingClientRect().height / 2)) <= window.innerHeight ){
            // console.log("hey",window.innerHeight + " , " + item.parentElement.getBoundingClientRect().top + (item.parentElement.getBoundingClientRect().height / 2));
         
            if(counter == 0){
                function updateCounter(){
                    counter += Math.ceil(inc);    
                    item.nextElementSibling.textContent = counter;
                    
                    if(counter < target){
                        item.lastElementChild.style.setProperty("stroke-dashoffset",`${440 - (440 * counter / 100)}`);
                        setTimeout(updateCounter,15);
                    } else {
                        item.lastElementChild.style.setProperty("stroke-dashoffset",`${440 - (440 * target / 100)}`);
                        item.nextElementSibling.textContent = target;
                    }
                }
                updateCounter();
            }
        }  
        else{
            item.lastElementChild.style.setProperty("stroke-dashoffset",`${440 - (440 * 0 / 100)}`);
            counter = 0;
            item.nextElementSibling.textContent = 0;
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
function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );