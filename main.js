// Create an Array in which to store only the info we need:
const infoArray = [];

//Create a function to grab the info and put it in the array:
function grabInfo () {
  const peeps = customers.results;
  for (let i = 0; i <  peeps.length; i++) {
    const name = peeps[i].name.first + " " + peeps[i].name.last;
    const location = peeps[i].location;

// Each Array item is an Object with HTML elements prebuilt into them.
    infoArray[i] = {
      image:    `<div class = "image"><img src = ${peeps[i].picture.large}></div>`,
      name:     `<h1> ${name}</h1>`,
      email:    `<h2> ${peeps[i].email}</h2>`,
      location: `<div class="info"><p> ${location.street}</p><p> ${location.city}, ${location.state} ${location.postcode}</p>${peeps[i].cell}</div>`
    }
  }
  return infoArray;
}

// Create a function to create the individual profiles
function createProf () {
  const contain = document.getElementById("container");

  //For loop that loops through the array and slaps the info on a div before placing the div in the HTML.
  for (let i = 0; i < infoArray.length; i++) {
    const iPic = infoArray[i].image;
    const iName = infoArray[i].name;
    const iEmail = infoArray[i].email;
    const iLocation = infoArray[i].location;
    const div = document.createElement("div");

    console.log(iName);

    div.innerHTML = `${iPic} ${iName}${iEmail}${iLocation}`;
    div.setAttribute("class", "profile");
    container.appendChild(div);
  }
}

// Run the code and produce the page!
grabInfo();
createProf();

console.log(infoArray);
