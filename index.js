// eejs for templating
var eejs = require("ep_etherpad-lite/node/eejs/");

// add style element
exports.eejsBlock_styles = function ( hook_name, context, cb) {
  // console.log( hook_name, context );
  context.content = context.content + eejs.require("ep_glo/templates/styles.ejs");
  return cb();
}
