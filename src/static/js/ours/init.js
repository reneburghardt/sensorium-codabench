$(document).ready(function () {
    /*-----------------------------------------------------------------------------
     Template niceties
     */
    // header particles
    particlesJS.load('bg', URLS.assets.header_particles)

    // fix menu when passed
    $('.masthead')
        .visibility({
            once: false,
            onBottomPassed: function () {
                $('.fixed.menu').transition('fade in')
            },
            onBottomPassedReverse: function () {
                $('.fixed.menu').transition('fade out')
            }
        })

    // Make base template dropdown not change text on selection
    $("#user_dropdown").dropdown({
        action: 'hide'
    })

    $("#competition_dropdown").dropdown({
        action: 'hide'
    })
    // Sidebar helpers
    $('#page_wrapper .ui.sidebar')
        .sidebar({
            transition: 'push',
            context: $('#page_wrapper .bottom.segment')
        })
        .sidebar('attach events', '#hamburger_button .item')
    ;

    /*-----------------------------------------------------------------------------
     Riotjs
     */
    riot.mount('*')
})
