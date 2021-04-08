(function() {
  const template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"avatar") : stack1), depth0))
    + "\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      src=\"/uploads/avatars/avatar-default.jpg\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dashboard-details\">\n  <h1>My Details</h1>\n  <div class=\"flex\">\n    <div>\n      <img class=\"avatar details-avatar\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"avatar") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "      alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "\" />\n      <a class=\"open-upload-avatar\">Change photo <img src=\"/assets/icons/pencil-alt-solid.svg\" alt=\"pencil icon\" width=\"15\" /></a>\n      <form class=\"invisible flex\" action=\"/upload-avatar\" method=\"post\" enctype=\"multipart/form-data\">\n        <input class=\"upload-avatar\" type=\"file\" name=\"avatar\" />\n        <button type=\"submit\">Upload</button>\n      </form>\n    </div>\n\n\n    <div>\n      <p><strong>First name: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + "</p>\n      <p><strong>Last name: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "</p>\n      <p><strong>Contact number: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"contact_number") : stack1), depth0))
    + "</p>\n      <p><strong>Email: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</p>\n      <p><strong>Team: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"primary_team") : stack1), depth0))
    + "</p>\n      <p><strong>Position: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"position") : stack1), depth0))
    + "</p>\n      <p><strong>Employee status: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"employee_status") : stack1), depth0))
    + "</p>\n      <p><strong>City: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + "</p>\n      <p><strong>Commencement date: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"commencement_date") : stack1), depth0))
    + "</p>\n      <p><strong>Currently active: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"active") : stack1), depth0))
    + "</p>\n      <a class=\"edit-profile-link\">Edit details <img src=\"/assets/icons/pencil-alt-solid.svg\" alt=\"pencil icon\" width=\"15\" /></a>\n    </div>\n  </div>\n</div>\n<div class=\"todo\"></div>";
},"useData":true});
})();