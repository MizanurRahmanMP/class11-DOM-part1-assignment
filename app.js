
/**
 * Our developer
 */

const team = document.querySelector('.team');



devs.map(data => {
    team.innerHTML += `
    
    <div class="team-item">
            <img src="${data.photo}" alt="">
            <h1> ${data.name} </h1>
            <p> ID: ${data.id} </>
            <p> Age: ${data.age} Yers </p>
            <p> ${data.skill} Developer </p>
            <p> ${data.location} </p>
            <h4> Salary: ${data.salary} Dolar </h4>
        </div>
    
    
    
    
    `;
});

/**
 * Students mards shit
 */

const tbody = document.querySelector('.students table tbody')

std.map((data, index) =>{
    tbody.innerHTML += `
    <tr>
        <td> ${index+1} </td>
        <td> ${data.name} </td>
        <td> ${data.bangla} </td>
        <td> ${data.English} </td>
        <td> ${data.Mathmatics} </td>
        <td> ${data.Science} </td>
        <td> ${data.SocialScience} </td>
        <td> ${data.Religion} </td>
        <td> <img style="width:30px"; src="${data.Photo}"> </td>
    </tr>
    
    `
});

/**
 * Phone number least
 */

const tbody2 = document.querySelector('.phone table tbody');


phone.map((data, index) => {
    tbody2.innerHTML +=`
    <tr>
        <td> ${index+1} </td>
         <td> ${data.name} </td>
         <td> ${data.phone} </td>
        <td> ${data.age} </td>
        <td> ${data.profession} </td>
        <td> ${data.location} </td>
        <td> <img style="width:30px"; src="${data.photo}"> </td>
    </tr>
    
    `
    
});













