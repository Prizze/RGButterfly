    function toggleSubMenu(menu){
        const subMenu = document.querySelector(menu);
        const isOpen = subMenu.classList.toggle('open');
         if (isOpen) {
            open_menu(menu)
        } else {
            close_menu(menu)
        }
    }
    function open_menu(menu){
        const subMenu = document.querySelector(menu);
        subMenu.classList.add("open");

        const overlay = document.getElementById('overlay');
        overlay.classList.add("open");

        if (menu == ".sub-menu"){
            hr_expand()
            rotate_chevron("chevron")
        }
    }
    function close_menu(menu){
        const subMenu = document.querySelector(menu);
        subMenu.classList.remove("open");

        const overlay = document.getElementById('overlay');
        overlay.classList.remove("open");
        if (menu == ".sub-menu"){
            hr_expand()
            rotate_chevron("chevron")
        }
        else {
            const subMenusmall = document.querySelector('.sub-menu-small')
            subMenusmall.classList.remove("open");

            var chevron = document.getElementById("chevron-small");
            chevron.classList.remove("rotate");
            chevron.classList.add("rotate-back");
        }
    }

    function toggleServices(){
        rotate_chevron('chevron-small');
        const subMenu = document.querySelector('.sub-menu-small');
        if (subMenu.classList.contains("open")) {
            subMenu.classList.remove("open");
        } else {
            subMenu.classList.add("open");
        }
    }

    function rotate_chevron(chevron_id){
        var chevron = document.getElementById(chevron_id);

        if (chevron.classList.contains("rotate")) {
            chevron.classList.remove("rotate");
            chevron.classList.add("rotate-back");
        } else {
            chevron.classList.remove("rotate-back");
            chevron.classList.add("rotate");
        }

    }
    function hr_expand(){
        var hr = document.querySelector(".hr");
        if (hr.classList.contains("expand")) {
            hr.classList.remove("expand");
        } else {
            hr.classList.add("expand");
        }
    }

    document.getElementById('overlay').addEventListener('click', () => {

    const container = document.querySelector('header .container');

    const computedStyle = window.getComputedStyle(container);
    if (computedStyle.display === 'none') {
        close_menu('.drop-menu')
    } else {
        close_menu('.sub-menu');
    }
});