var jade = require('pug-runtime'); module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (JSON, assets, env, getLocale, t) {
buf.push("<!DOCTYPE html><html" + (jade.attr("lang", getLocale(), true, true)) + "><head><meta charset=\"utf-8\"><title>" + (jade.escape(null == (jade_interp = t('index title')) ? "" : jade_interp)) + "</title><meta name=\"description\"" + (jade.attr("content", t('index description'), true, true)) + "><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/apple-touch-icon-57x57.png\"><link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/apple-touch-icon-60x60.png\"><link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/apple-touch-icon-72x72.png\"><link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/apple-touch-icon-76x76.png\"><link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/apple-touch-icon-114x114.png\"><link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/apple-touch-icon-120x120.png\"><link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/apple-touch-icon-144x144.png\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/apple-touch-icon-152x152.png\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon-180x180.png\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png\" sizes=\"32x32\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-194x194.png\" sizes=\"194x194\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-96x96.png\" sizes=\"96x96\"><link rel=\"icon\" type=\"image/png\" href=\"/android-chrome-192x192.png\" sizes=\"192x192\"><link rel=\"icon\" type=\"image/png\" href=\"/favicon-16x16.png\" sizes=\"16x16\"><link rel=\"manifest\" href=\"/manifest.json\"><meta name=\"msapplication-TileColor\" content=\"#20a8f1\"><meta name=\"msapplication-TileImage\" content=\"/mstile-144x144.png\"><meta name=\"theme-color\" content=\"#20a8f1\"><link rel=\"stylesheet\" href=\"/fonts/fonts.css\"><link rel=\"stylesheet\"" + (jade.attr("href", "/" + (assets.css) + "", true, true)) + ">");
if ( env)
{
buf.push("<script>ENV = " + (((jade_interp = JSON.stringify(env)) == null ? '' : jade_interp)) + ";</script>");
}
buf.push("<script" + (jade.attr("src", "/" + (assets.js) + "", true, true)) + " defer></script></head><body><main role=\"application\"><noscript><section class=\"popup\"><header><a title=\"Cozy Website\" href=\"https://cozy.io\"></a></header><div class=\"container\"><h1>" + (jade.escape(null == (jade_interp = t('index noscript title')) ? "" : jade_interp)) + "</h1><p class=\"help\">" + (jade.escape(null == (jade_interp = t('index noscript message')) ? "" : jade_interp)) + "</p></div></section></noscript></main></body></html>");}.call(this,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"assets" in locals_for_with?locals_for_with.assets:typeof assets!=="undefined"?assets:undefined,"env" in locals_for_with?locals_for_with.env:typeof env!=="undefined"?env:undefined,"getLocale" in locals_for_with?locals_for_with.getLocale:typeof getLocale!=="undefined"?getLocale:undefined,"t" in locals_for_with?locals_for_with.t:typeof t!=="undefined"?t:undefined));;return buf.join("");
}