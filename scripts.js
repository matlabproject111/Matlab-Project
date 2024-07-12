// scripts.js
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let studentNumber = document.getElementById('studentNumber').value;
    let email = document.getElementById('email').value;

    if (!name || !studentNumber || !email) {
        alert('Please fill in all fields.');
        return;
    }

    let student = { name, studentNumber, email };
    storeStudent(student);

    document.getElementById('message').textContent = 'Student information submitted successfully.';
    document.getElementById('attendanceForm').reset();
});

function storeStudent(student) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    // Simulate sending an email after one month
    setTimeout(() => {
        sendMonthlyEmail(student);
    }, 3000);  // 3 seconds for demo purposes, replace with 2592000000 for 30 days
}

function sendMonthlyEmail(student) {
    console.log(`Monthly attendance report sent to ${student.name} (${student.email}).`);
    // Actual email sending would be handled server-side in a real application
}