window.onload = function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const inputs = document.querySelectorAll("input");
            const empId = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            // 1. एडमिन का आईडी और पासवर्ड (यह हर एक आईडी को कंट्रोल या देख सकता है)
            const adminID = "admin01";
            const adminPassword = "SuperAdminPHL";

            // 2. सभी कर्मचारियों (Employees) की लिस्ट यहाँ जोड़ें
            const employees = {
                "0301": "Vishal",   // ID: 0301, Password: Vishal
                "1025": "Munna", // ID: 1025, Password: Munna
                "0302": "Rajesh123",   // ID: 0302, Password: Rajesh123
                "0303": "murti456"    // आप जितनी चाहें उतनी ID यहाँ नीचे बढ़ा सकते हैं
            };

            // लॉगिन चेक करने का लॉजिक
            if (empId === adminID && password === adminPassword) {
                alert("एडमिन लॉगिन सफल! आप सभी यूज़र्स को कंट्रोल कर सकते हैं।");
                // एडमिन के लिए अलग डैशबोर्ड पेज (भविष्य के लिए)
                window.location.href = "dashboard.html?role=admin"; 
            } 
            else if (employees[empId] && employees[empId] === password) {
                alert("कर्मचारी लॉगिन सफल!");
                window.location.href = "dashboard.html?role=user&id=" + empId;
            } 
            else {
                alert("गलत Employee ID, Admin ID या Password!");
            }
        });
    }
};



    

