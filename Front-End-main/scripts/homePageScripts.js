let loginStripe=document.getElementById("loginStrip");
let navBarContainer=document.getElementById("navBarContainer");
let mostPopularTours=document.getElementById("mostPopularTours");

function loginChanges(userobj){
    navBarContainer.removeChild(loginStripe);
}

function addTourCard(id,tour){
    const container = document.getElementById(id);
        const tourCard = document.createElement("div");
        tourCard.classList.add("tourCard");

        tourCard.innerHTML = `
            <div class="tourCardImage">
                <img src="./images/${tour.imageCover}" alt="${tour.name}" width: '170' height: '120'>
            </div>
            <div class="tourCardDetails">
                <div class="tourCardTitle">
                    <h3>${tour.name}</h3>
                </div>
                <div class="strip">
                    <div class="tourCardPrice">
                        <p>Rs. ${tour.price}</p>
                    </div>
                    <div class="tourCardBtn">
                        <a href="./tourPage.html?id=${tour._id}" class="smallBtn">View Details</a>
                    </div>
                </div>
            </div>
        `;
    container.appendChild(tourCard);
}

function addPopular(tourList){
    tourList.forEach((tour)=>{
        addTourCard("mostPopularTours",tour);
    })
}

function addDiscountTours(tourList){
    tourList.forEach((tour)=>{
        addTourCard("offerTours",tour);
    })
}

let user=fetch("/getUser",{
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
}).then((response)=>{
    return response.json();
}).then((data)=>{
    if(data.status==true){
        return data;
    }
    else{
        alert(data.msg);
    }
})
user.then((data)=>{
    if(data.status==true){
        loginChanges(data.user);
    }
})

async function getHomePageData(){
    await fetch("/getHomePageTours",{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        addPopular(data.popularTours);      
        addDiscountTours(data.discountTours)
    })
}

getHomePageData();