(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['editLog.hbs'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <option value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"team_name") : depth0), depth0))
    + "\"\n"
    + ((stack1 = lookupProperty(helpers,"ifEquals").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"log") : depths[1])) != null ? lookupProperty(stack1,"team") : stack1),(depth0 != null ? lookupProperty(depth0,"team_name") : depth0),{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "        >"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"team_name") : depth0), depth0))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        selected\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"width: 100%;\">\n  <h1>Edit log</h1>\n  <form action=\"/hours/edit/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"log") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" method=\"post\">\n    <div>\n      <label class=\"hidden\" for=\"activity\"></label>\n      <input type=\"text\" name=\"activity\" id=\"activity\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"log") : depth0)) != null ? lookupProperty(stack1,"activity") : stack1), depth0))
    + "\" required />\n    </div>\n    <div>\n      <label class=\"hidden\" for=\"teams\"></label>\n      <select name=\"team\" id=\"teams\" required>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"teams") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":17,"column":17}}})) != null ? stack1 : "")
    + "      </select>\n    </div>\n    <div>\n      <label class=\"hidden\" for=\"start_time\"></label>\n      <input type=\"datetime-local\" name=\"start_time\" id=\"start_time\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"log") : depth0)) != null ? lookupProperty(stack1,"start_time") : stack1), depth0))
    + "\" required />\n    </div>\n\n    <div>\n      <label class=\"hidden\" for=\"end_time\"></label>\n      <input type=\"datetime-local\" name=\"end_time\" id=\"end_time\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"log") : depth0)) != null ? lookupProperty(stack1,"end_time") : stack1), depth0))
    + "\" required />\n    </div>\n    <button type=\"submit\">Update</button>\n    <a href=\"hours/delete/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"log") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">Delete?</a>\n  </form>\n</div>";
},"useData":true,"useDepths":true});
})();