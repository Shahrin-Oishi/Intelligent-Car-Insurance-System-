function calculate() {

    const name = document.getElementById('ownerName').value;
    const type = parseFloat(document.getElementById('carType').value);
    const carAge = parseInt(document.getElementById('carAge').value);
    const driverAge = parseInt(document.getElementById('driverAge').value);
    const exp = parseInt(document.getElementById('experience').value);
    const accidents = parseInt(document.getElementById('accidents').value);
    const safety = parseFloat(document.getElementById('safety').value);

    if (!name || isNaN(carAge) || isNaN(driverAge)) {
        alert("Fill all fields!");
        return;
    }

    let base = 1000;

    let ageFactor = carAge > 10 ? 2.5 : carAge > 5 ? 1.8 : 1.2;

    let driverRisk = driverAge < 25 ? 1.5 : 1.0;
    let expFactor = exp < 2 ? 1.5 : 1.0;
    let accidentFactor = 1 + (accidents * 0.2);

    let total = base * type * ageFactor * driverRisk * expFactor * accidentFactor * safety;

    document.getElementById('result').innerHTML = `
        <div class="quote-box">
        <h3>${name}'s Policy</h3>
        <p>Base: ${base}</p>
        <p>Type: ${type}</p>
        <p>Car Age Factor: ${ageFactor}</p>
        <p>Driver Risk: ${driverRisk}</p>
        <p>Experience: ${expFactor}</p>
        <p>Accidents: ${accidentFactor}</p>
        <h2>Total: ৳${total.toFixed(2)}</h2>
        </div>
    `;

    saveHistory(name, total);
}

function saveHistory(name, amount) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(`${name} - ৳${amount.toFixed(2)}`);
    localStorage.setItem("history", JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    let list = document.getElementById("history");
    list.innerHTML = "";
    history.forEach(item => {
        list.innerHTML += `<li>${item}</li>`;
    });
}



displayHistory();