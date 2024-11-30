function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    var button = document.getElementById('toggleButton');
    
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "block";
        button.innerHTML = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        button.innerHTML = "Show Skills";
    }
}
