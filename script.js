
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            // Hide all tab contents
            tabContents.forEach(content => content.style.display = "none");
            // Show the content associated with the clicked tab
            const activeTabContent = document.getElementById(tab.getAttribute("data-tab"));
            activeTabContent.style.display = "block";
        });
    });

});
