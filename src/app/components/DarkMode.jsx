import React from 'react'

// public/darkMode.js
document.addEventListener("DOMContentLoaded", function DarkMode() {
    const body = document.body;

    // Check the user's system preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Apply dark mode class based on user's system preference
    if (prefersDarkMode) {
        body.classList.add("dark");
    }
});
// function DarkMode() {
//   return (
//     <div>DarkMode</div>
//   )
// }

export default DarkMode