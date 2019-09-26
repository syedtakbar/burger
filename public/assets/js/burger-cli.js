const devourButtons = document.querySelectorAll(".devour");
devourButtons.forEach(devourbutton => {    
    devourbutton.addEventListener("click", devourClick);
});

function devourClick (event) {
    
    const burgetId = event.target.getAttribute("data-id");
    console.log(`Burger Id: ${burgetId}`);

    fetch("/index/update/" + burgetId, {
            method: "PUT",
            body: JSON.stringify({"devour": true}),
            headers: {
                "Content-Type": "application/json"                
              }            
    }).then(() => {console.log("changed to devoured");  location.reload();});
}