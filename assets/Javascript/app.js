const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn" 
        })
    }

    
    allSections.addEventListener("click", (e) =>{
        const id = e.target.dataset.id; 
        if(id){
            
            sectBtns.forEach((btn) =>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

           
            sections.forEach((section)=>{
                section.classList.remove("active")
            })      

            const element = document.getElementById(id);
            element.classList.add("active");          
        }


    })
}
    

PageTransitions();


function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("n.bolt", "template_3a71pak",params).then(function (res){
        alert("Vielen Dank für deine Nachricht ich werde mich NICHT bei dir melden." + res.status )
    })
}
