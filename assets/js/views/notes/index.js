var NoteIndex = Backbone.View.extend({
  template: AppTemplates['notes/index'],

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  }
});
