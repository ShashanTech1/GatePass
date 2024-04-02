document.getElementById("myRequestBtn").addEventListener("click", function() {
    document.getElementById("newRequest").classList.add("hidden");
    document.getElementById("myRequestsContainer").classList.remove("hidden");
});
document.getElementById("requestHistoryBtn").addEventListener("click", function() {
    document.getElementById("newRequest").classList.add("hidden");
    document.getElementById("myRequestsHistoryContainer").classList.remove("hidden");
});



document.getElementById("newRequestBtn2").addEventListener("click", function() {
    document.getElementById("newRequest").classList.remove("hidden");
    document.getElementById("myRequestsContainer").classList.add("hidden");
});
document.getElementById("requestHistoryBtn2").addEventListener("click", function() {
    document.getElementById("myRequestsHistoryContainer").classList.remove("hidden");
    document.getElementById("myRequestsContainer").classList.add("hidden");
});


document.getElementById("newRequestBtn3").addEventListener("click", function() {
    document.getElementById("newRequest").classList.remove("hidden");
    document.getElementById("myRequestsHistoryContainer").classList.add("hidden");
});
document.getElementById("myRequestBtn3").addEventListener("click", function() {
    document.getElementById("myRequestsContainer").classList.remove("hidden");
    document.getElementById("myRequestsHistoryContainer").classList.add("hidden");
});

