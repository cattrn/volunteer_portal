(function() {
  const template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['resources.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div style=\"width:100%;\">\n  <h1>Resources</h1>\n  <div class=\"flex resource-links\">\n    <button class=\"display-resources slack-resources\">Slack resources</button>\n\n    <button class=\"display-resources trello-resources\">Trello resources</button>\n\n    <button class=\"display-resources drive-resources\">Google Drive resources</button>\n\n    <a href=\"mailto:caterina@myndinitiative.org?subject=Email%20account%20request&body=Autogenerated%20email%3A%20"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + "%20"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "%20is%20requesting%20a%20MYND%20Initiative%20email%20account%2E\" target=\"_blank\"><button>Request MYND Initiative email account</button></a>\n\n    <a href=\"mailto:nadisha@myndinitiative.org?subject=Leave%20request&body=Autogenerated%20email%3A%20"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"firstname") : stack1), depth0))
    + "%20"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"currentUser") : depth0)) != null ? lookupProperty(stack1,"lastname") : stack1), depth0))
    + "%20is%20requesting%20a%20period%20of%20leave%20from%20MYND%20Initiative%20for%20[[duration]]%2E\" target=\"_blank\"><button>Request leave</button></a>\n  </div>\n\n  <div class=\"resources\">\n    <div class=\"slack-resources hidden\">\n      <div class=\"videos flex\">\n        <div style=\"--aspect-ratio: 16/9;\"><iframe src=\"https://www.youtube.com/embed/m2JuAa6-ors\" title=\"Slack introduction video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\n        <div style=\"--aspect-ratio: 16/9;\"><iframe src=\"https://www.youtube.com/embed/Vc-4WB9gOx0\" title=\"MYND Slack training webinar\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\n      </div>\n      <div class=\"links\">\n        <a href=\"https://slack.com/intl/en-au/help/articles/360059928654-How-to-use-Slack--your-quick-start-guide\" target=\"_blank\">Slack quick start guide</a>\n      </div>\n    </div>\n\n    <div class=\"trello-resources hidden\">\n      <div class=\"videos flex\">\n        <div style=\"--aspect-ratio: 16/9;\"><iframe src=\"https://www.youtube.com/embed/xky48zyL9iA\" title=\"Trello introduction video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\n      </div>\n      <div class=\"links\">\n        <a href=\"https://trello.com/en-AU/guide\" target=\"_blank\">Trello guide</a>\n      </div>\n    </div>\n\n    <div class=\"drive-resources hidden\">\n      <div class=\"videos flex\">\n        <div style=\"--aspect-ratio: 16/9;\"><iframe src=\"https://www.youtube.com/embed/82CUzgqUxKU\" title=\"Google Drive tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\n      </div>\n      <div class=\"links\">\n        <a href=\"https://support.google.com/drive/answer/2424384?co=GENIE.Platform%3DDesktop&hl=en\" target=\"_blank\">How to use Google Drive</a>\n        <a href=\"https://support.google.com/a/users/answer/9310246\" target=\"_blank\">What can you do with Drive?</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();