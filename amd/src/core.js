define(['jquery', 'local_leaflet/source'], ($, L) => {
  const cssUrl = M.cfg.wwwroot + '/local/leaflet/style.css';
  if (!$(`link[href="${cssUrl}"]`).length) {
    $('<link>')
      .attr('rel', 'stylesheet')
      .attr('type', 'text/css')
      .attr('href', cssUrl)
      .appendTo($('head'));
  }

  return L;
});
