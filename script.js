document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    // ध्यान दें: नीचे वाली दोनों लाइनें अब पूरी होनी चाहिए
    const empId = document.querySelectorAll("input")[0].value;
    const password = document.querySelectorAll("input")[1].value;

    if(empId === "0301" && password === "9129") {
        alert("लॉगिन सफल!");
    } else {
        alert("गलत Employee ID या Password!");
    }
});


    

