/* global $,Miso,JST */
$(function(){

  var cakes = new Miso.Dataset({
    importer : Miso.Dataset.Importers.GoogleSpreadsheet,
    parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
    key : "0AjwGdn_H2ROpdE1ISVFSelBqc3RRTVZYV3FnSXRUcmc",
    worksheet: "2"
  });

  var workingColumns = [
    "_id",
    "Name",
    "Group",
    "Email",
    "Twitter",
    "Website",
    "Description",
    "Photo"
  ];

  var $el = $("#cakes");
  cakes.fetch().done(function() {
    cakes.each(function(cake) {
      $el.append(JST["templates/cake.html"]({
        cake : cake,
        controls : workingColumns
      }));
    });

    var params = $.deparam.querystring();

    if (typeof params.cake !== "undefined") {
      $.scrollTo($('h3:contains("' + params.cake + '")'), 800);
    }
  });

}());
