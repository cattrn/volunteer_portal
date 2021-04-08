(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['editProfile.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"width: 100%;\">\n  <h1>Edit Profile</h1>\n  <form action=\"/edit-profile\" method=\"post\">\n    <div>\n      <label for=\"firstname\">First Name:</label>\n      <input type=\"text\" name=\"firstname\" id=\"firstname\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + "\" required />\n    </div>\n    <div>\n      <label for=\"lastname\">Last Name:</label>\n      <input type=\"text\" name=\"lastname\" id=\"lastname\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "\" required />\n    </div>\n    <div>\n      <label for=\"contact_number\">Contact Number:</label>\n      <input type=\"text\" name=\"contact_number\" id=\"contact_number\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"contact_number") : stack1), depth0))
    + "\" required />\n    </div>\n    <div>\n      <label for=\"email\">Email:</label>\n      <input type=\"text\" name=\"email\" id=\"email\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\" required />\n    </div>\n    <div>\n      <label for=\"city\">City:</label>\n      <input type=\"text\" name=\"city\" id=\"city\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"city") : stack1), depth0))
    + "\" />\n    </div>\n    <button type=\"submit\">Update</button>\n  </form>\n</div>";
},"useData":true});
})();