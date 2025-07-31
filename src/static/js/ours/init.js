$(document).ready(function () {
    /*-----------------------------------------------------------------------------
     Template niceties
     */
    // header particles
    // particlesJS.load('bg', URLS.assets.header_particles)

    // fix menu when passed
    // $('.masthead')
    //     .visibility({
    //         once: false,
    //         onBottomPassed: function () {
    //             $('.fixed.menu').transition('fade in')
    //         },
    //         onBottomPassedReverse: function () {
    //             $('.fixed.menu').transition('fade out')
    //         }
    //     })

    // Make base template dropdown not change text on selection
    $("#user_dropdown").dropdown({
        action: 'hide'
    })

    $("#competition_dropdown").dropdown({
        action: 'hide'
    })
    // Sidebar helpers
    $('#sidebar-menu')
        .sidebar({
            transition: 'push',
            closable: false,
            dimPage: false,
            context: $('#page_wrapper'),
        })
        //.sidebar('attach events', '#sidebar-toggle a', 'toggle')
    ;

    $('#sidebar-toggle a').on('click', function () {
        const sidebar = $('#sidebar-menu');
        const wrapper = document.getElementById('page_wrapper');

        const isVisible = sidebar.hasClass('visible');

        if (!isVisible) {
            const sidebarHeight = sidebar.outerHeight();
            wrapper.style.setProperty('padding-bottom', sidebarHeight + 'px', 'important');
            $('#sidebar-toggle a .sidebar.icon').hide();
            $('#sidebar-toggle a .x.icon').show();
        } else {
            wrapper.style.setProperty('padding-bottom', '', 'important');
            $('#sidebar-toggle a .sidebar.icon').show();
            $('#sidebar-toggle a .x.icon').hide();
        }

        sidebar.sidebar('toggle');
    });

    if (window.innerWidth >= 1160) {
      if (!$('#sidebar-menu').hasClass('visible')) {
        $('#sidebar-menu').sidebar('show');
        $('#sidebar-toggle a .sidebar.icon').hide();
        $('#sidebar-toggle a .x.icon').show();
      }
    } else {
      if ($('#sidebar-menu').hasClass('visible')) {
        $('#sidebar-menu').sidebar('hide');
        $('#sidebar-toggle a .sidebar.icon').show();
        $('#sidebar-toggle a .x.icon').hide();
      }
    }

    const sidebar = $('#sidebar-menu');
    sidebar[0].style.setProperty('margin-bottom', `-${sidebar.outerHeight(true)}px`, 'important');

    /*-----------------------------------------------------------------------------
     Riotjs
     */
    riot.mount('*')
})
