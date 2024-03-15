export class Theme {
    themeName;

    constructor() {
        this.themeName = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-dark';
        document.documentElement.className = this.themeName;
    }

    changeTheme() {
        if (this.themeName === 'theme-dark') {
            this.setTheme('theme-light');
        } else {
            this.setTheme('theme-dark');
        }
    }

    setTheme(theme) {
        this.themeName = theme;
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme;
    }
}
