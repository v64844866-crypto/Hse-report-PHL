window.onload = function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const inputs = document.querySelectorAll("input");
            const empId = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            // 1. एडमिन का आईडी और पासवर्ड (यह हर एक आईडी को कंट्रोल या देख सकता है)
            const adminID = "Rajesh";
            const adminPassword = "Rajesh123
            const adminID="Murti:;
            const adminId="Murti123:;

            // 2. सभी कर्मचारियों (Employees) की लिस्ट यहाँ जोड़ें
            const employees = {
                "0301": "Vishal",   // ID: 0301, Password: Vishal
                "0304":"Munna", // ID: 0304, Password: Munna
                "0302": "Pardeep",   // ID: 0302, Password: Pardeep
                "0303": "Omprakash"    // ID:0303, Password Omprakashआप जितनी चाहें उतनी ID यहाँ नीचे बढ़ा सकते हैं
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


    

