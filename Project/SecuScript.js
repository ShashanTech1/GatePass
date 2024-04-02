document.getElementById("pendingBtn").addEventListener("click", function() {
    document.getElementById("checkRequest").classList.add("hidden");
    document.getElementById("pendingRequest").classList.remove("hidden");
});
document.getElementById("completedBtn").addEventListener("click", function() {
    document.getElementById("checkRequest").classList.add("hidden");
    document.getElementById("completedRequest").classList.remove("hidden");
});



document.getElementById("checkRequestBtn2").addEventListener("click", function() {
    document.getElementById("checkRequest").classList.remove("hidden");
    document.getElementById("pendingRequest").classList.add("hidden");
});
document.getElementById("completedBtn2").addEventListener("click", function() {
    document.getElementById("completedRequest").classList.remove("hidden");
    document.getElementById("pendingRequest").classList.add("hidden");
});


document.getElementById("checkRequestBtn3").addEventListener("click", function() {
    document.getElementById("completedRequest").classList.add("hidden");
    document.getElementById("checkRequest").classList.remove("hidden");
});
document.getElementById("pendingBtn3").addEventListener("click", function() {
    document.getElementById("completedRequest").classList.add("hidden");
    document.getElementById("pendingRequest").classList.remove("hidden");
});
