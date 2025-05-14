let isSalaried = prompt("Are you salaried? (yes or no)");

if (isSalaried.toLowerCase() === "yes") {
    let income = parseFloat(prompt("Enter your annual income:"));

    if (income <= 600000) {
        alert("No tax is applicable on your income.");
    } else if (income <= 1200000) {
        let taxable = income - 600000;
        let tax = taxable * 2.5 / 100;
        alert("Your income tax is: " + tax);
    } else if (income <= 2400000) {
        let taxable = income - 1200000;
        let tax = (600000 * 2.5 / 100) + (taxable * 12.5 / 100);
        alert("Your income tax is: " + tax);
    } else {
        let taxable = income - 2400000;
        let tax = (600000 * 2.5 / 100) + (1200000 * 12.5 / 100) + (taxable * 20 / 100);
        alert("Your income tax is: " + tax);
    }
} else {
    alert("This calculator is for salaried individuals only.");
}