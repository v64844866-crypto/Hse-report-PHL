window.onload = function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const inputs = document.querySelectorAll("input");
            const empId = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            // यहाँ आप अपनी आईडी और पासवर्ड मैच कर रहे हैं
            if (empId === "0301" && password === "Vishal") {
                alert("लॉगिन सफल!");
                // अगर आपके पास कोई दूसरा पेज है तो नीचे वाली लाइन का // हटाकर नाम लिख सकते हैं
                // window.location.href = "dashboard.html";
            } else {
                alert("गलत Employee ID या Password!");
            }
        });
    } else {
        console.log("Form not found on this page");
    }
};


    

