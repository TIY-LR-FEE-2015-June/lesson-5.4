var NoteIndexItem = Marionette.ItemView.extend({
  tagName: 'li',
  template: AppTemplates['notes/index-item'],

  events: {
    'click a': 'sayHey',
  },

  sayHey: function(ev) {
    alert('hey');
  },
});

var NoteIndex = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: NoteIndexItem,

  hide: function() {
    this.$el.hide();
  },

  show: function() {
    this.$el.show();
  },
});
