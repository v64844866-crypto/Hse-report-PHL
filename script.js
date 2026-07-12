

  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const empId = document.querySelectorAll("input")[0].value;
    const password = document.querySelectorAll("input")[1].value;

    // यहाँ आप अपनी मर्ज़ी का ID और पासवर्ड सेट कर सकते हैं
    if(empId === "0301" && password === "Vishal") {
        alert("लॉगिन सफल!");
        // लॉगिन होने के बाद जहाँ भेजना है, उस पेज का नाम नीचे लिखें
        // window.location.href = "dashboard.html"; 
    } else {
        alert("गलत Employee ID या Password!");
    }
});

    

