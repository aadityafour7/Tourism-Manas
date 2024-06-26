let id=window.location.href;
id=id.substring(id.lastIndexOf('=')+1);
console.log(id);


function showData(tour){
    console.log(tour)
    document.getElementById("name").value=tour.name;
    document.getElementById("visits").value=tour.visits;
    document.getElementById("description").value=tour.description;
    document.getElementById("price").value=tour.price;
    document.getElementById("duration").value=tour.duration;
    document.getElementById("stay").value=tour.stay;
    document.getElementById("discount").value=tour.discount;
    document.getElementById("food").value=tour.food;
    document.getElementById("AverageRating").value=tour.AverageRating;
    let palcesContainer=document.getElementById("places");
    let placesArray=tour.places;
    palcesContainer.value=placesArray;
}
fetch("/getTourData",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: id})
}).then((response)=>{
    return response.json();
}).then((data)=>{
        showData(data.tour);
        console.log(data)
})
let sub=document.getElementById("submit");
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let tour={
        id: id,
        visits: document.getElementById("visits").value,
        name:   document.getElementById("name").value,
        description:    document.getElementById("description").value,
        price:  document.getElementById("price").value,
        duration:   document.getElementById("duration").value,
        stay:   document.getElementById("stay").value,
        discount:   document.getElementById("discount").value,
        food:   document.getElementById("food").value,
        places: document.getElementById("places").value,
        AverageRating:  document.getElementById("AverageRating").value
    };
    console.log(tour)
    fetch("/editTourData",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tour)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
            console.log(data);
        })
        
})