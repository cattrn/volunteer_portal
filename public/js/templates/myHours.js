(function() {
  const template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['myHours.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <tr>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"activity") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"team") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"start_time") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"end_time") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"duration") : depth0), depth0))
    + "</td>\n        <td><a class=\"edit-log logid"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">Edit <img src=\"/assets/icons/pencil-alt-solid.svg\" alt=\"pencil icon\" width=\"15\" /></a></td>\n      </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"width:100%;\">\n  <h1>My Logged Hours</h1>\n  <table>\n    <thead>\n      <tr>\n        <th>Activity</th>\n        <th>Team</th>\n        <th>Start</th>\n        <th>End</th>\n        <th>Length</th>\n        <th>Edit</th>\n      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"rows") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":24,"column":15}}})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>";
},"useData":true});
})();