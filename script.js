function calculateAdvanced() {
    const name = document.getElementById('ownerName').value;
    const typeMultiplier = parseFloat(document.getElementById('carType').value);
    const age = parseInt(document.getElementById('carAge').value);
    const safetyDiscount = parseFloat(document.getElementById('safety').value);
    
    // Validation [cite: 38, 73]
    if (!/^[A-Za-z\s]+$/.test(name) || isNaN(age) || age < 0) {
        alert("Please enter valid information!");
        return;
    }

    // Advanced Formula: Base * Type * AgeFactor * Safety [cite: 37, 76, 77]
    const baseRate = 1000;
    let ageFactor = (age >= 10) ? 2.5 : (age >= 5 ? 1.8 : 1.2);
    
    const finalPremium = baseRate * typeMultiplier * ageFactor * safetyDiscount;

    document.getElementById('result').innerHTML = `
        <div class="quote-box">
            <h3>Insurance Policy for ${name}</h3>
            <p>Risk Multiplier applied based on Vehicle Type and Age.</p>
            <h2>Total: $${finalPremium.toFixed(2)}</h2>
        </div>
    `;
}