(function() {
  const template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['members.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <tr>\n        <td><img class=\"avatar small-avatar\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"avatar") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "        alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"firstname") : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"lastname") : depth0), depth0))
    + "\" /></td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"firstname") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"lastname") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"email") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"primary_team") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"position") : depth0), depth0))
    + "</td>\n        <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"city") : depth0), depth0))
    + "</td>\n      </tr>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        src=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"avatar") : depth0), depth0))
    + "\"\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        src=\"uploads/avatars/avatar-default.jpg\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"width:100%;\">\n  <h1>Member Directory</h1>\n  <table>\n    <thead>\n      <tr>\n        <th>Profile Image</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Email</th>\n        <th>Team</th>\n        <th>Position</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"users") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</div>";
},"useData":true});
})();