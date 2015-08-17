/**
 * Extract and tally all public commits made to GitHub this month for a user.
 * @author CJ Vogt <mail@chrisvogt.me>
 */
$(function () {
    $("div.jHolder").jPages({ /** Initialize jQuery pagination plugin. */
        containerID : "articles",
        animation   : "rotateInUpLeft",
        pause       : 8500,
        clickStop   : true,
        perPage     : 3,
        previous    : ".previous a",
        next        : ".next a",
        links       : "blank",
        first       : false,
        last        : false
    });

    $.ajax({ /** Queries the chrisvogt/projects API. */
        type: "GET",
        dataType: "json",
        url: "https://projects.chrisvogt.me/api/1.0/all.json",
        success: function (data) {
            $('#stats-projects .val').html(data.projects.length);
        }
    });

    $.ajax({ /** Queries the chrisvogt/stats API. */
        type: "GET",
        dataType: "json",
        url: "https://stats.chrisvogt.me/reports/dashboard.json",
        success: function (data) {
            $('#stats-time .val').html(data.totalHours);
        }
    });

    /**
     * Contains GitHub User PushEvents
     * @type {object}
     */
    var PushEvents;

    /**
     * Tallies the total number of commits.
     * @type {number}
     */
    var commitCount = 0;

    /**
     * Filter - only return `PushEvents` containing at least one commit.
     * @param {object} PushEvent - A GitHub PushEvent
     * @returns {boolean}
     */
    function filterByType(obj) {
        /**
         * The current date.
         * @property {object} Date
         */
        var today = new Date();

        // Roll back the date 24 hours.
        today.setDate(today.getDate() - 1);

        if ('type' in obj && typeof(obj.type) === 'string' && obj.type == 'PushEvent' && obj.payload.commits.length >= 1 && 'created_at' in obj && new Date(obj.created_at) >= today) {
            commitCount += obj.payload.commits.length;
            return true;
        } else {
            return false;
        }
    }

    $.ajax({ /* Queries GitHub API for public users events. */
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/chrisvogt/events/public",
        success: function (data) {
            PushEvents = data.filter(filterByType);
            $('#stats-commits .val').html(commitCount);
        }
    });

    $('#glider').hover(function() { /* Animates the glider on mouseover. */
      $(this).attr('src', 'https://res.cloudinary.com/chrisvogt/image/upload/v1435295850/glider-animated_o4cs7t.gif');
    }, function() {
      $(this).attr('src', '/img/glider.svg');
    });
});

/**
 * Collapses the stats pane on small screens.
 */
function jqUpdateSize(){
    var width = $(window).width();
    if (width < 750) {
      $('#masthead').removeClass('in');
    } else {
      $('#masthead').addClass('in');
    }
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size
