
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

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Close the popup if the user clicks outside of the popup content
window.onclick = function(event) {
    const popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        if (event.target === popups[i]) {
            popups[i].style.display = "none";
        }
    }
}
function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    document.getElementById('live-date').textContent = formatDate(new Date());
