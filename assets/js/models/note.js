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
