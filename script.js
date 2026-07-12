window.onload = function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const inputs = document.querySelectorAll("input");
            const empId = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            // यहाँ अपनी Employee ID और Password डालें
            if (empId === "0301" && password === "Vishal") {
                alert("लॉगिन सफल!");
                // लॉगिन सफल होते ही यह लाइन यूजर को डैशबोर्ड पर भेज देगी
                window.location.href = "dashboard.html";
            } else {
                alert("गलत Employee ID या Password!");
            }
        });
    }
};


    

