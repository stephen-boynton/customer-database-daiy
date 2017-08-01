const infoArray = [];

function grabInfo () {
  const peeps = customers.results;
  for (let i = 0; i <  peeps.length; i++) {
    const name = peeps[i].name.first + " " + peeps[i].name.last;
    const location = peeps[i].location;

    infoArray[i] = {
      image:    `<img src = ${peeps[i].picture.large}>`,
      name:     `<h1> ${name}</h1>`,
      email:    `<h2> ${peeps[i].email}</h2>`,
      location: `<p> ${location.street}</p><p> ${location.city}, ${location.state} ${location.postcode}</p>`,
      phone:     `${peeps[i].cell}`
    }
  }
  return infoArray;
}

function createProf () {
  const contain = document.getElementById("container");
  for (let i = 0; i < infoArray.length; i++) {
    const iPic = infoArray[i].image;
    const iName = infoArray[i].name;
    const iEmail = infoArray[i].email;
    const iLocation = infoArray[i].location;
    const iPhone = infoArray[i].phone;
    const div = document.createElement("div");

    console.log(iName);

    div.innerHTML = `${iPic} ${iName}${iEmail}${iLocation}${iPhone}`;
    div.setAttribute("class", "profile");
    container.appendChild(div);
  }
}





grabInfo();
createProf();

console.log(infoArray);
