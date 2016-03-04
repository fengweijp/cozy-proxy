// Generated by CoffeeScript 1.10.0
var CozyInstance, router;

CozyInstance = require('../models/instance');

router = require('../lib/router');

module.exports.webfingerHostMeta = function(req, res, next) {
  if (req.params.ext !== 'json') {
    return res.sendStatus(404);
  }
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET');
  return CozyInstance.first(function(err, instance) {
    var domain, hostmeta, template;
    domain = (instance != null ? instance.domain : void 0) || req.headers.host;
    if (!domain) {
      return next(new Error("Cozy's domain has not been registered"));
    }
    template = "https://" + domain + "/webfinger/json?resource={uri}";
    hostmeta = {
      links: {
        rel: 'lrdd',
        template: template
      }
    };
    return res.status(200).send(hostmeta);
  });
};

module.exports.webfingerAccount = function(req, res, next) {
  return CozyInstance.first(function(err, instance) {
    var OAUTH_VERSION, PROTOCOL_VERSION, accountInfo, authEndPoint, domain, host, link, ref, routes;
    domain = (instance != null ? instance.domain : void 0) || req.headers.host;
    if (!domain) {
      return next(new Error("Cozy's domain has not been registered"));
    }
    host = "https://" + domain;
    if ((ref = req.params.module) === 'caldav' || ref === 'carddav') {
      routes = router.getRoutes();
      if (routes['sync'] != null) {
        return res.redirect(host + "/public/sync/");
      } else {
        return res.status(404).send('Application Sync is not installed.');
      }
    } else if (req.params.module === 'webfinger') {
      OAUTH_VERSION = 'http://tools.ietf.org/html/rfc6749#section-4.2';
      PROTOCOL_VERSION = 'draft-dejong-remotestorage-01';
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Methods', 'GET');
      accountInfo = {
        links: []
      };
      routes = router.getRoutes();
      if (routes['remotestorage']) {
        link = {
          href: host + "/public/remotestorage/storage",
          rel: 'remotestorage',
          type: PROTOCOL_VERSION,
          properties: {
            'auth-method': OAUTH_VERSION,
            'auth-endpoint': host + "/apps/remotestorage/oauth/"
          }
        };
        authEndPoint = link.properties['auth-endpoint'];
        link.properties[OAUTH_VERSION] = authEndPoint;
        accountInfo.links.push(link);
      }
      return res.status(200).send(accountInfo);
    } else {
      return res.sendStatus(404);
    }
  });
};
