this["JST"] = this["JST"] || {};

this["JST"]["templates/cake.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="cake">\n  <div class="details">\n\n    <h3><span class="bold">' +
((__t = ( cake['Name'] )) == null ? '' : __t) +
'</span></h3>\n\n    ';
 if (cake['Description'] !== null) { ;
__p += '\n      <span class="detail">' +
((__t = ( cake['Description'] )) == null ? '' : __t) +
'</span>\n    ';
 } ;
__p += '\n    \n    <span class="detail">\n      Group : <strong>' +
((__t = ( cake['Group'] )) == null ? '' : __t) +
'</strong>\n    </span>\n    <span class="detail">\n      Twitter: <strong><a href="http://twitter.com/' +
((__t = ( cake['Twitter account'].slice(1) )) == null ? '' : __t) +
'">' +
((__t = ( cake['Twitter account'] )) == null ? '' : __t) +
'</a> </strong>\n    </span>\n    <span class="detail">\n      Email: <strong>' +
((__t = ( cake['Email'] )) == null ? '' : __t) +
' </strong>\n    </span>\n    <span class="detail">\n      Website: <strong><a href="' +
((__t = (cake['Website'])) == null ? '' : __t) +
'">' +
((__t = (cake['Website'])) == null ? '' : __t) +
'</a></strong>\n    </span>\n    <span class="detail">\n      What I can teach: <strong>' +
((__t = (cake['What I Can Teach'])) == null ? '' : __t) +
'</strong>\n    </span>\n  </div>\n  <div class="photo">\n    ';
 if (cake['Photo']) { ;
__p += '\n      <img src="' +
((__t = ( cake['Photo'] )) == null ? '' : __t) +
'" width="300" alt=""/>\n    ';
 } else { ;
__p += '\n      <img src="img/no-image.jpg" width="300" alt=""/>\n    ';
 } ;
__p += '\n  </div>\n</div>\n';

}
return __p
};