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
            transition: 'overlay',
            closable: false,
            dimPage: false,
            context: $('#page_wrapper #sidebar-nav-anchor'),
            onShow: function () {
                // Show the X icon, hide the sidebar icon
                $('#sidebar-toggle a .sidebar.icon').hide();
                $('#sidebar-toggle a .x.icon').show();
            },
            onHidden: function () {
                // Show the sidebar icon, hide the X icon
                $('#sidebar-toggle a .sidebar.icon').show();
                $('#sidebar-toggle a .x.icon').hide();
            }
        })
        .sidebar('attach events', '#sidebar-toggle a', 'toggle')
    ;
    $('#sidebar-menu').sidebar('show');

    /*-----------------------------------------------------------------------------
     Riotjs
     */
    riot.mount('*')
})
