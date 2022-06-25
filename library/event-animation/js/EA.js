// document.querySelectorAll(".fade-top").forEach((ele)=>{
//     if(ele.dataset.event == "load"){
//         window.addEventListener("load",(e)=>{
//             ele.classList.add("f-top");
//         });
//     }else if(ele.dataset.event == "scroll"){
//         let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
//         let offsetTop =( parentEle == ele)? (parentEle.offsetTop + parentEle.parentElement.offsetTop) : parentEle.offsetTop;
//         let offsetHeight = ( parentEle == ele)? (parentEle.offsetHeight + parentEle.parentElement.offsetHeight) : parentEle.offsetHeight;

//         // if(!ele.dataset.parent)
//         // console.log("parent",parentEle,"offtop  "+offsetTop+"  offheight  "+offsetHeight);

//         window.addEventListener("scroll",(e)=>{
//             if((parseInt(offsetTop) - parseInt(ele.dataset.decOffsetTop ?? 0) + parseInt(ele.dataset.incOffsetTop ?? 0) ) <= this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
//                 ele.classList.toggle("f-top",true); 
//             }
//             else if(offsetTop < this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
//                 if(ele.dataset.parent == "ask")
//                 console.log("top scroll out");

//                 // ele.classList.toggle("f-top",true); 
//             }else{
//                 ele.classList.toggle("f-top",false); 
//             }
//         });
//     }
// });

document.querySelectorAll(".fade-right").forEach((ele)=>{
    if(ele.dataset.event == "load"){
        window.addEventListener("load",(e)=>{
            ele.classList.add("f-right");
        });
    }else if(ele.dataset.event == "scroll"){
        let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
        let offsetTop =( parentEle == ele)? (parentEle.offsetTop + parentEle.parentElement.offsetTop) : parentEle.offsetTop;
        let offsetHeight = ( parentEle == ele)? (parentEle.offsetHeight + parentEle.parentElement.offsetHeight) : parentEle.offsetHeight;

        // if(!ele.dataset.parent)
        // console.log("parent",parentEle,"offtop  "+offsetTop+"  offheight  "+offsetHeight);

        window.addEventListener("scroll",(e)=>{
            if((parseInt(offsetTop) - parseInt(ele.dataset.decOffsetTop ?? 0) + parseInt(ele.dataset.incOffsetTop ?? 0) ) <= this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
                ele.classList.toggle("f-right",true); 
            }
            else if(offsetTop < this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
                if(ele.dataset.parent == "ask")
                console.log("right scroll out");

                // ele.classList.toggle("f-top",true); 
            }else{
                ele.classList.toggle("f-right",false); 
            }
        });
    }
});

document.querySelectorAll(".fade-bottom").forEach((ele)=>{
    if(ele.dataset.event == "load"){
        window.addEventListener("load",(e)=>{
            ele.classList.add("f-bottom");
        });
    }else if(ele.dataset.event == "scroll"){
        // console.log(document.getElementById(`${ele.dataset.parent}`));
        let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
        let offsetTop =( parentEle == ele)? (parentEle.offsetTop + parentEle.parentElement.offsetTop) : parentEle.offsetTop;
        
        // if(ele.dataset.parent == "events"){
        //     console.log("e");
        //     console.log("parent",parentEle,"offsettop  "+offsetTop);
        // }else{
        //     console.log("parent",parentEle,"offsettop  "+offsetTop);
        // }
        
        let offsetHeight = ( parentEle == ele)? (parentEle.offsetHeight + parentEle.parentElement.offsetHeight) : parentEle.offsetHeight;

        // if(!ele.dataset.parent)
        // console.log("parent",parentEle,"offtop  "+offsetTop+"  offheight  "+offsetHeight);

        window.addEventListener("scroll",(e)=>{
            if((parseInt(offsetTop) - parseInt(ele.dataset.decOffsetTop ?? 0) + parseInt(ele.dataset.incOffsetTop ?? 0) ) <= this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
                ele.classList.toggle("f-bottom",true); 
            }
            else if(offsetTop < this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
                if(ele.dataset.parent == "ask")
                console.log("bottom scroll out");

                // ele.classList.toggle("f-top",true); 
            }else{
                ele.classList.toggle("f-bottom",false); 
            }
        });
    }
});

document.querySelectorAll(".fade-left").forEach((ele)=>{
    if(ele.dataset.event == "load"){
        window.addEventListener("load",(e)=>{
            ele.classList.add("f-left");
        });
    }else if(ele.dataset.event == "scroll"){
        let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
        let offsetTop =( parentEle == ele)? (parentEle.offsetTop + parentEle.parentElement.offsetTop) : parentEle.offsetTop;
        let offsetHeight = ( parentEle == ele)? (parentEle.offsetHeight + parentEle.parentElement.offsetHeight) : parentEle.offsetHeight;

        // if(!ele.dataset.parent)
        // console.log("parent",parentEle,"offtop  "+offsetTop+"  offheight  "+offsetHeight);

        window.addEventListener("scroll",(e)=>{
            if((parseInt(offsetTop) - parseInt(ele.dataset.decOffsetTop ?? 0) + parseInt(ele.dataset.incOffsetTop ?? 0) ) <= this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
                ele.classList.toggle("f-left",true); 
            }
            else if(offsetTop < this.window.scrollY && (offsetTop + offsetHeight) >= this.window.scrollY){
                if(ele.dataset.parent == "ask")
                console.log("left scroll out");

                // ele.classList.toggle("f-top",true); 
            }else{
                ele.classList.toggle("f-left",false); 
            }
        });
    }
});

document.querySelectorAll(".fade-center").forEach((ele)=>{
    if(ele.dataset.event == "load"){
        window.addEventListener("load",(e)=>{
            ele.classList.add("f-center");
        });
    }else if(ele.dataset.event == "scroll"){
        console.log(document.getElementById(`${ele.dataset.parent}`));
        let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
        window.addEventListener("scroll",(e)=>{
            if((parseInt(parentEle.offsetTop) - parseInt(ele.dataset.decOffsetTop ?? 0) + parseInt(ele.dataset.incOffsetTop ?? 0) ) <= this.window.scrollY && (parentEle.offsetTop + parentEle.offsetHeight) >= this.window.scrollY){
                ele.classList.toggle("f-center",true); 
            }
            else if(parentEle.offsetTop < this.window.scrollY && (parentEle.offsetTop + parentEle.offsetHeight) >= this.window.scrollY){
                if(ele.dataset.parent == "ask")
                console.log("left scroll out");

                // ele.classList.toggle("f-top",true); 
            }else{
                ele.classList.toggle("f-center",false); 
            }
        });
    }
});

document.querySelectorAll(".popup").forEach((ele)=>{
    if(ele.dataset.event == "load"){
        window.addEventListener("load",(e)=>{
            ele.classList.add("scaleup-scaledown");
        });
    }else if(ele.dataset.event == "scroll"){
     
        let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
        window.addEventListener("scroll",(e)=>{
            if(( parentEle.offsetTop -  (ele.dataset.decOffsetTop ?? 0) ) <= this.window.scrollY && (parentEle.offsetTop + parentEle.offsetHeight) >= this.window.scrollY){
                ele.classList.add("scaleup-scaledown");
            }else{
                ele.classList.remove("scaleup-scaledown");
            }
        });
    }

});


document.querySelectorAll(".rotate-scale").forEach((ele)=>{

    let parentEle = (document.getElementById(`${ele.dataset.parent}`))? document.getElementById(`${ele.dataset.parent}`) : ele;
    window.addEventListener("scroll",(e)=>{

        if( (parseInt(parentEle.offsetTop) - parseInt(ele.dataset.decOffsetTop ?? 0) + parseInt(ele.dataset.incOffsetTop ?? 0) ) <= this.window.scrollY && (parentEle.offsetTop + parentEle.offsetHeight) >= this.window.scrollY){

            ele.classList.add("r-s");
        }else{
            ele.classList.remove("r-s");
        }
    });
});
