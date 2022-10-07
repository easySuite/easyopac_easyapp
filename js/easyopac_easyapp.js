/**
 * @file
 *
 * easyOPAC easyAPP js functionality.
 */
(function ($) {
  "use strict";

  Drupal.behaviors.easyopac_easyapp = {
    attach: function (context, settings) {
      var body = $("body");
      var nextUrl = $("meta[name='easyapp:next']").attr("content");
      var prevUrl = $("meta[name='easyapp:prev']").attr("content");

      if (prevUrl) {
        body.append("<div class='indicator indicator-left'>&lt;</div>");
      }
      if (nextUrl) {
        body.append("<div class='indicator indicator-right'>&gt;</div>");
      }

      body.swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if (nextUrl && direction === "left") {
            window.location = nextUrl;
          }
          else if (prevUrl && direction === "right") {
            window.location = prevUrl;
          }
        },
      });
    }
  };

}) (jQuery, Drupal);
