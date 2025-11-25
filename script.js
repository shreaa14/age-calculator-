
function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    if (dobDate > today) {
        result.innerHTML = "Invalid date. DOB cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = 
        `You are <strong>${years}</strong> years, 
        <strong>${months}</strong> months, 
        and <strong>${days}</strong> days old.`;
=======
function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    if (dobDate > today) {
        result.innerHTML = "Invalid date. DOB cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = 
        `You are <strong>${years}</strong> years, 
        <strong>${months}</strong> months, 
        and <strong>${days}</strong> days old.`;
>>>>>>> f07353b002275df588370baa777a4be524d1250f
}