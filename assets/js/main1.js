/**
* Template Name: Gp
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Updated: Aug 15 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
    "use strict";

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }
    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
        });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);



})()


$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
    $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
});

$(function () {
    $('#themeslist a').click(function (e) {
        e.preventDefault();
        $('#themeslist a.active').addClass('list-group-item-action').removeClass('active');
        $(this).addClass('active');
        var theme = "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/" + $(this).text() + "/bootstrap.css";
        $('link[id="bscss"]').attr('href', theme);


    });
});
var themes = {
    "default": "//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
    "Sumathi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Sumathi/bootstrap.min.css",
    "DEvi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/DEvi/bootstrap.min.css",
    "paate": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/paate/bootstrap.min.css",
    "paryamma": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/paryamma/bootstrap.min.css",
    "Sasi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Sasi/bootstrap.min.css",
    "Joathi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Joathi/bootstrap.min.css",
    "Pavi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Pavi/bootstrap.min.css",
    "Mohana": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Mohana/bootstrap.min.css",
    "Keerthi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Keerthi/bootstrap.min.css",
    "Gomathi": "//cdnjs.cloudflare.com/ajax/libs/bootswatch/4.0.0-alpha.6/Gomathi/bootstrap.min.css"
}

//switches
$(function () {
    $('.theme-link').click(function () {
        var themeurl = themes[$(this).attr('data-theme')];
        $('link[id="bscss"]').attr('href', themeurl);
    });
});


var themes = [

    "Sumathi",
    "DEvi",
    "paate",
    "paryamma",
    "Sasi",
    "Joathi",
    "Pavi",
    "Mohana",
    "Keerthi",
    "gomathi1",
    "Gomathi",


];

$(document).ready(function () {


    $("#themelist").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');
});


document.addEventListener("DOMContentLoaded", function () {
    const pagination = document.getElementById("pagination");
    const pageLinks = pagination.querySelectorAll("[data-page]");
    const prevLink = document.querySelector("#prev-page a");
    const nextLink = document.querySelector("#next-page a");

    const totalPages = pageLinks.length;

    // Get current page from URL (default to 1)
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get("page")) || 3;

    function updatePagination() {
        // Update numbered links and active state
        pageLinks.forEach(link => {
            const page = parseInt(link.dataset.page);
            link.href = `?page=${page}`;
            link.parentElement.classList.toggle("active", page === currentPage);
        });

        // Previous button
        if (currentPage > 3) {
            prevLink.href = `?page=${currentPage - 3}`;
            prevLink.parentElement.classList.remove("disabled");
        } else {
            prevLink.href = "file:///home/proflujo/Desktop/dinesh/index.html#?";
            prevLink.parentElement.classList.add("disabled");
        }

        // Next button
        if (currentPage < totalPages) {
            nextLink.href = `?page=${currentPage + 3}`;
            nextLink.parentElement.classList.remove("disabled");
        } else {
            nextLink.href = "file:///home/proflujo/Desktop/dinesh/index.html?page=3";
            nextLink.parentElement.classList.add("disabled");
        }
    }

    updatePagination();
});


document.querySelectorAll('#categoryFilter a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 4).forEach(item => item.style.display = 'block');
    });
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 6).forEach(item => item.style.display = 'block');
    });
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 9).forEach(item => item.style.display = 'block');
    });
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 7).forEach(item => item.style.display = 'block');
    });
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 6).forEach(item => item.style.display = 'block');
    });
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 8).forEach(item => item.style.display = 'block');
    });
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedGroup = this.dataset.group;
        const allItems = document.querySelectorAll('#products .item');

        // Hide all
        allItems.forEach(item => item.style.display = 'none');

        // Show first 4 items that match the selected group
        const matchingItems = Array.from(allItems).filter(item => item.dataset.group === selectedGroup);
        matchingItems.slice(0, 10).forEach(item => item.style.display = 'block');
    });
});


(function ($) {
    var pagify = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        currentPage: 0,
        createNavigation: function () {
            this.totalPages = Math.ceil(this.items.length / this.perPage);

            $('.pagination', this.container.parent()).remove();
            var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

            for (var i = 0; i < this.totalPages; i++) {
                var pageElClass = "page";
                if (!i)
                    pageElClass = "page current";
                var pageEl = '<a class="' + pageElClass + '" data-page="' + (
                    i + 1) + '">' + (
                        i + 1) + "</a>";
                pagination.append(pageEl);
            }
            pagination.append('<a class="nav next" data-next="true">></a>');

            this.container.after(pagination);

            var that = this;
            $("body").off("click", ".nav");
            this.navigator = $("body").on("click", ".nav", function () {
                var el = $(this);
                that.navigate(el.data("next"));
            });

            $("body").off("click", ".page");
            this.pageNavigator = $("body").on("click", ".page", function () {
                var el = $(this);
                that.goToPage(el.data("page"));
            });
        },
        navigate: function (next) {
            // default perPage to 5
            if (isNaN(next) || next === undefined) {
                next = true;
            }
            $(".pagination .nav").removeClass("disabled");
            if (next) {
                this.currentPage++;
                if (this.currentPage > (this.totalPages - 1))
                    this.currentPage = (this.totalPages - 1);
                if (this.currentPage == (this.totalPages - 1))
                    $(".pagination .nav.next").addClass("disabled");
            }
            else {
                this.currentPage--;
                if (this.currentPage < 0)
                    this.currentPage = 0;
                if (this.currentPage == 0)
                    $(".pagination .nav.prev").addClass("disabled");
            }

            this.showItems();
        },
        updateNavigation: function () {

            var pages = $(".pagination .page");
            pages.removeClass("current");
            $('.pagination .page[data-page="' + (
                this.currentPage + 1) + '"]').addClass("current");
        },
        goToPage: function (page) {

            this.currentPage = page - 1;

            $(".pagination .nav").removeClass("disabled");
            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav.next").addClass("disabled");

            if (this.currentPage == 0)
                $(".pagination .nav.prev").addClass("disabled");
            this.showItems();
        },
        showItems: function () {
            this.items.hide();
            var base = this.perPage * this.currentPage;
            this.items.slice(base, base + this.perPage).show();

            this.updateNavigation();
        },
        init: function (container, items, perPage) {
            this.container = container;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = perPage;
            this.items = items;
            this.createNavigation();
            this.showItems();
        }
    };

    // stuff it all into a jQuery method!
    $.fn.pagify = function (perPage, itemSelector) {
        var el = $(this);
        var items = $(itemSelector, el);

        // default perPage to 5
        if (isNaN(perPage) || perPage === undefined) {
            perPage = 6;
        }

        // don't fire if fewer items than perPage
        if (items.length <= perPage) {
            return true;
        }

        pagify.init(el, items, perPage);
    };
})(jQuery);

$(".container").pagify(6, ".single-item");


document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 9; // Adjust as needed
    const items = document.querySelectorAll("#products .item");
    const pagination = document.getElementById("pagination");

    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    function showPage(page) {
        items.forEach((item, index) => {
            item.style.display =
                index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
                    ? "block"
                    : "none";
        });
    }

    function createPagination() {
        pagination.innerHTML = "";

        // Previous button
        const prevLi = document.createElement("li");
        prevLi.classList.add("page-item");
        const prevLink = document.createElement("a");
        prevLink.classList.add("page-link");
        prevLink.href = "#";
        prevLink.textContent = "Prev";
        prevLink.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
        prevLi.appendChild(prevLink);
        pagination.appendChild(prevLi);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            if (i === currentPage) li.classList.add("active");

            const a = document.createElement("a");
            a.classList.add("page-link");
            a.href = "#";
            a.textContent = i;
            a.addEventListener("click", (e) => {
                e.preventDefault();
                currentPage = i;
                updatePagination();
            });

            li.appendChild(a);
            pagination.appendChild(li);
        }

        // Next button
        const nextLi = document.createElement("li");
        nextLi.classList.add("page-item");
        const nextLink = document.createElement("a");
        nextLink.classList.add("page-link");
        nextLink.href = "#";
        nextLink.textContent = "Next";
        nextLink.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
        nextLi.appendChild(nextLink);
        pagination.appendChild(nextLi);
    }

    function updatePagination() {
        showPage(currentPage);
        createPagination();
    }

    // Initialize
    updatePagination();
});

