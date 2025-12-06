class BurgerMenu {
  constructor(menuIcon, menuContainer) {
    this.menuIcon = menuIcon;
    this.menuContainer = menuContainer;
    this.isOpen = false;

    this.menuItems = [
      { text: "Contacto", href: "#contact-footer" },
      { text: "Iniciar sesión", href: "./user-login.html" },
      { text: "Registrarse", href: "./user-login.html" }
    ];

    this.createMenuList();
    this.menuIcon.addEventListener("click", () => this.toggleMenu());
    window.addEventListener("resize", () => this.updateMenuDisplay());
    this.updateMenuDisplay();
  }

  createMenuList() {
    this.list = document.createElement("ul");
    this.list.classList.add("burger-menu-list");

    this.menuItems.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
      this.list.appendChild(li);
    });

    this.menuContainer.appendChild(this.list);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.list.classList.add("show");
    } else {
      this.list.classList.remove("show");
    }
  }

  updateMenuDisplay() {
    const WIDTH = window.innerWidth;

    if (WIDTH >= 992) {
      this.list.classList.remove("show");
      this.list.style.display = "none";

      this.menuItems.forEach((item, index) => {
        this.menuContainer.children[index].style.display = "inline-block";
      });

    } else if (WIDTH >= 768 && WIDTH < 992) {

      this.menuItems.forEach((item, index) => {
        if (item.text === "Contacto") {
          this.menuContainer.children[index].style.display = "inline-block";
        } else {
          this.menuContainer.children[index].style.display = "none";
        }
      });

    } else {
      this.menuItems.forEach((item, index) => {
        this.menuContainer.children[index].style.display = "none";
      });
    }
  }
}

const MENU_ICON = document.querySelector(".bi-list");
const MENU_CONTAINER = document.querySelector(".main-header-nav-var");
new BurgerMenu(MENU_ICON, MENU_CONTAINER);
