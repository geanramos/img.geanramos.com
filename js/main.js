var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(() => {
    /* Submit disable after 1 click */
    $('[type=submit][name=submit]').on('click', (event) => {
        $(event.currentTarget).addClass('disabled');

        let text = $(event.currentTarget).text();
        let loader = '<div class="spinner-grow spinner-grow-sm"><span class="sr-only">Loading...</span></div>';
        $(event.currentTarget).html(loader);

        setTimeout(() => {
            $(event.currentTarget).removeClass('disabled');
            $(event.currentTarget).text(text);
        }, 3000);

    });

    /* Confirm delete handler */
    $('body').on('click', '[data-confirm]', (event) => {
        let message = $(event.currentTarget).attr('data-confirm');

        if(!confirm(message)) return false;
    });

    /* Custom links */
    $('[data-href]').on('click', event => {
        let url = $(event.currentTarget).data('href');

        fade_out_redirect({ url, full: true });
    });

    /* Enable tooltips everywhere */
    $('[data-toggle="tooltip"]').tooltip();

    /* Popovers */
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
});


}
/*
     FILE ARCHIVED ON 19:40:39 Apr 12, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:24:51 Jan 12, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 112.86
  exclusion.robots: 0.413
  exclusion.robots.policy: 0.396
  RedisCDXSource: 1.028
  esindex: 0.018
  LoadShardBlock: 87.475 (3)
  PetaboxLoader3.datanode: 198.094 (5)
  CDXLines.iter: 20.481 (3)
  load_resource: 191.067
  PetaboxLoader3.resolve: 44.674
  loaddict: 19.875
*/
