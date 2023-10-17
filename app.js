const form = document.querySelector('#form');
const input = document.querySelector('#input')
const div = document.querySelector('.main-div')

div.style.display = 'none'

form.addEventListener('submit' , function(e){
    e.preventDefault();
    
    let search = input.value;
    
    axios.get(`http://api.weatherapi.com/v1/current.json?key=27c33b52b37744b28d1164726231710&q=${search}`)
    .then((res)=>{
        const data = res.data
        console.log(data);
        div.style.display = 'block'

        div.innerHTML = `
        <div class= "sec-div"><p>${data.location.name}, <span>${data.location.country}</span></p>
        <h4>${data.location.tz_id}</h4>
        <img src="${data.current.condition.icon}" alt=""><p>${data.current.condition.text}</p>
        <h1 class = "centi">${data.current.temp_c}<sup>°</sup>C</h1>
        </div>`
         
    }).catch((err)=>{
        console.log("error=>" , err);
        alert("Please Enter Correct Name")
    })
    input.value = ""
})
