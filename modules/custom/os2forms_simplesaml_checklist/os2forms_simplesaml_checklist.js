(function ($) {

  "use strict";
  Drupal.behaviors.os2forms_simplesaml_checklist = {
    attach: function (context) {

      // Open external links in a new window.
      $('#checklistapi-checklist-form fieldset a', context).filter(function () {
        // Ignore non-HTTP (e.g. mailto:) link.
        return this.href.indexOf('http') === 0;
      }).filter(function () {
        // Filter out links to the same domain.
        return this.hostname && this.hostname !== location.hostname;
      }).each(function () {
        // Open all remaining links in new window.
        $(this).attr('target', '_blank');
      });

    }
  };

})(jQuery);
