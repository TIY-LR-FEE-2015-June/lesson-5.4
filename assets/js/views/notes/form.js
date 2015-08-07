var NoteForm = Mn.ItemView.extend({
  template: AppTemplates['notes/form'],
  events: {
    'submit form': 'createNote'
  },

  createNote: function(ev) {
    ev.preventDefault();

    var title = this.$('#title').val();
    var body = this.$('#body').val();
    var _this = this;

    this.model.set({title: title, body: body});
    this.model.save().then(function() {
      router.navigate('', {trigger: true});
    });
  }
});
