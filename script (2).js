// Global Array to store employee objects
let employees = [];

// 1 & 2. Function to add an employee object to the array
function addEmployee() {
    const name = document.getElementById("empName").value;
    const id = document.getElementById("empId").value;
    const salary = parseFloat(document.getElementById("empSalary").value);
    const department = document.getElementById("empDept").value;

    if (name === "" || id === "" || isNaN(salary)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Create employee object
    const newEmployee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    // Push object into the array
    employees.push(newEmployee);

    // Clear inputs
    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empSalary").value = "";

    // Automatically display updated list
    displayAll();
}

// Helper function to render a table dynamically
function renderTable(employeeArray, title) {
    const outputDiv = document.getElementById("output");
    
    if (employeeArray.length === 0) {
        outputDiv.innerHTML = `<p>No records found for: <strong>${title}</strong></p>`;
        return;
    }

    // Build HTML table structure
    let html = `<h3>${title}</h3>`;
    html += `<table>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Salary (₹)</th>
                    <th>Dept</th>
                </tr>`;

    // Syllabus coverage: Using 'for...of' to loop through the array
    for (const emp of employeeArray) {
        html += `<tr>`;
        
        // Syllabus coverage: Using 'for...in' to loop through object properties
        for (const key in emp) {
            html += `<td>${emp[key]}</td>`;
        }
        
        html += `</tr>`;
    }
    html += `</table>`;

    outputDiv.innerHTML = html;
}

// 3a. Display all employees
function displayAll() {
    renderTable(employees, "All Employees");
}

// 3b. Filter employees with salary > 50000
function filterHighSalary() {
    // Syllabus coverage: Using array filter()
    const highEarners = employees.filter(emp => emp.salary > 50000);
    renderTable(highEarners, "Employees Earning > ₹50,000");
}

// 3c. Calculate total salary payout
function calculateTotalSalary() {
    if (employees.length === 0) return alert("No employees added yet.");

    let total = 0;
    // Syllabus coverage: Using 'for...of' loop
    for (const emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML = `
        <div class="result-text">Total Salary Payout: ₹${total.toLocaleString()}</div>
    `;
}

// 3d. Calculate average salary
function calculateAvgSalary() {
    if (employees.length === 0) return alert("No employees added yet.");

    let total = 0;
    for (const emp of employees) {
        total += emp.salary;
    }
    
    let average = total / employees.length;

    document.getElementById("output").innerHTML = `
        <div class="result-text">Average Salary: ₹${average.toFixed(2).toLocaleString()}</div>
    `;
}

// 3e. Count employees in a specific department
function countByDepartment() {
    const targetDept = document.getElementById("countDept").value;
    
    // Using array filter() to get employees in the selected department
    const deptEmployees = employees.filter(emp => emp.department === targetDept);
    const count = deptEmployees.length;

    document.getElementById("output").innerHTML = `
        <div class="result-text">There are ${count} employee(s) in the ${targetDept} department.</div>
    `;
}