var AppTemplates = {};

AppTemplates['app'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
AppTemplates['notes/form'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form>\n    <label for=\"title\">Title</label>\n    <input type=\"text\" name=\"title\" id=\"title\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n\n    <label for=\"body\">Body</label>\n    <textarea name=\"body\" id=\"body\">"
    + alias3(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper)))
    + "</textarea>\n\n    <button>Submit</button>\n</form>\n";
},"useData":true});
var Note = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    body: ''
  }
});

var NoteBook = Backbone.Collection.extend({
  model: Note,
  url: 'http://tiny-lr.herokuapp.com/collections/evernote'
});

var NoteForm = Mn.ItemView.extend({
  template: AppTemplates['notes/form'],
  events: {
    'submit form': 'createNote'
  },

  createNote: function(ev) {
    ev.preventDefault();

    var title = this.$('#title').val();
    var body = this.$('#body').val();

    this.model.set({title: title, body: body});
    this.model.save();
  }
});

var notes = new NoteBook();

notes.fetch().then(function() {
  form = new NoteForm({
    el: '#target',
    model: notes.first()
  });

  form.render();
});
//# sourceMappingURL=app.map