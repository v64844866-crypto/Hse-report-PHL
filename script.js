window.onload = function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const inputs = document.querySelectorAll("input");
            const empId = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            // 1. SUPER ADMIN: Rajesh
            const superAdminID = "super01";
            const superAdminPassword = "Rajesh";

            // 2. ADMIN: Murti
            const adminID = "admin02";
            const adminPassword = "Murti";

            // 3. EMPLOYEE: Vishal (सिर्फ विशाल रहेगा)
            const employees = {
                "0301": "Vishal"
            };

            // लॉगिन चेक करने का लॉजिक
            if (empId === superAdminID && password === superAdminPassword) {
                alert("Super Admin लॉगिन सफल! (Rajesh)");
                window.location.href = "dashboard.html?role=superadmin";
            } 
            else if (empId === adminID && password === adminPassword) {
                alert("Admin लॉगिन सफल! (Murti)");
                window.location.href = "dashboard.html?role=admin";
            } 
            else if (employees[empId] && employees[empId] === password) {
                alert("Employee लॉगिन सफल! (Vishal)");
                window.location.href = "dashboard.html?role=user&id=" + empId;
            } 
            else {
                alert("गलत ID या Password! कृपया दोबारा जाँचें।");
            }
        });
    }
};

    

