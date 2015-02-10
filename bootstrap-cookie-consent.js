G = {}

G.doStripImages = function() {
    $(".strip").each(function(idx, strip) {
        var images = $(strip).find("div:visible").find("img, .img")
        var img_count = images.length
        var pct
        var strip_width = $(strip).find("div:visible").width() - 1
        
        var margin_space = (img_count-1) * 10
        var width = (strip_width - margin_space) / img_count
        images.css("width", width + "px")
        images.slice(0, -1).css("margin-right", "10px")

        var first_image = $(strip).find("div:visible").find("img").first()
        if (first_image.height() > 0)
            $(strip).height(first_image.height() + 10)
        else 
            $(strip).find("div:visible").find("img").first().on("load", function() {
                $(strip).height(
                    $(this).height() + 10
                )   
                $(".img").height(
                    $(this).height()
                )
            })
    })  
}

// The WYSIWYG editor leaves the tables with hardcoded widths. Fix to responsive %ages.
G.fixTables = function() {
    $("table").not(".structural").attr("border", "0").addClass("table")
    $("table").not(".structural").each(function(idx, table) {
        var total = $(table).width()
        $(table).find("tr").first().find("th").each(function(jdx, th) {
            var pct = ($(th).width() / total) * 100
            $(th).css("width", pct + "%")
        })
        $(table).find("td").css("width", "auto")
    })
}

$(window).on("resize", function() {
    G.doStripImages()
})

$(document).ready(function() {
    G.fixTables()
    window.setTimeout(function() {
        G.doStripImages()
    }, 50)

})

// Cookies
// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
// Modified by Simon Freytag for syntax, namespace, jQuery and Bootstrap

C = {
    // Number of days before the cookie expires, and the banner reappears
    cookieDuration : 14,

    // Name of our cookie
    cookieName: 'complianceCookie',

    // Value of cookie
    cookieValue: 'on',

    // Message banner title
    bannerTitle: "Cookies:",

    // Message banner message
    bannerMessage: "This site uses cookies to deliver its services.",

    // Message banner dismiss button
    bannerButton: "OK",

    // Link to your cookie policy.
    bannerLinkURL: "/legal-docs/data-protection.html",

    // Link text
    bannerLinkText: "Read more",

    createDiv: function () {
        var banner = $(
            '<div class="alert alert-success alert-dismissible fade in" ' +
            'role="alert" style="position: fixed; bottom: 0; width: 100%; ' +
            'margin-bottom: 0"><strong>' + this.bannerTitle + '</strong> ' +
            this.bannerMessage + ' <a href="' + this.bannerLinkURL + '">' +
            this.bannerLinkText + '</a> <button type="button" class="btn ' +
            'btn-success" data-dismiss="alert" aria-label="Close">' +
            this.bannerButton + '</button></div>'
        )
        $("body").append(banner)
        this.createCookie(
            this.cookieName, this.cookieValue, this.cookieDuration
        )
    },

    createCookie: function(name, value, days) {
        console.log("Create cookie")
        var expires = ""
        if (days) {
            var date = new Date()
            date.setTime(date.getTime() + (days*24*60*60*1000))
            expires = "; expires=" + date.toGMTString()
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    checkCookie: function(name) {
        var nameEQ = name + "="
        var ca = document.cookie.split(';')
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0)==' ')
                c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) == 0) 
                return c.substring(nameEQ.length, c.length)
        }
        return null
    },

    init: function() {
        if (this.checkCookie(this.cookieName) != this.cookieValue)
            this.createDiv()
    }
}

$(document).ready(function() {
    C.init()
})