//load header
readFile("template/header.html").then((data) => {
    document.getElementById("header").innerHTML = data;
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
     M.Sidenav.init(elems,);
    // instances.open();
});

// Theme
const theme = localStorage.getItem('theme');
// console.log(theme)//dark or null
const themeSwitch = document.querySelectorAll('.theme-switch');
// console.log(themeSwitch);
const setTheme = (isDark,themeSwitch) => {
    if (isDark) {
        themeSwitch.classList.add('is-dark');
        themeSwitch.querySelector('i').innerText = 'light_mode';
        themeSwitch.title = 'Switch to light mode';
        document.documentElement.setAttribute('theme', 'dark');
    }
    else {
        themeSwitch.classList.remove('is-dark');
        themeSwitch.querySelector('i').innerText = 'dark_mode';
        themeSwitch.title = 'Switch to dark mode';
    }
}
let inittheme = (themeSwitch,theme) => {
    if (themeSwitch) {
        // Load
        if (theme == "dark") setTheme(true,themeSwitch);
        // Change
        themeSwitch.addEventListener('click', e => {
            e.preventDefault();
            if (!themeSwitch.classList.contains('is-dark')) {
                // Dark Theme
                document.documentElement.setAttribute('theme', 'dark');
                localStorage.setItem('theme', 'dark');
                setTheme(true,themeSwitch);
            }
            else {
                // Light Theme
                document.documentElement.removeAttribute('theme');
                localStorage.removeItem('theme');
                setTheme(false,themeSwitch);
            }
        });
    }
}
inittheme(themeSwitch[0],theme)
inittheme(themeSwitch[1],theme)

M.AutoInit();