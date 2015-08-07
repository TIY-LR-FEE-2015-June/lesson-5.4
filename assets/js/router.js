var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new NoteBook();
  },

  currentView: null,
  sidebarView: null,

  routes: {
    '': 'index',
    'new': 'create',
    ':id/edit': 'edit'
  },

  index: function() {
    var _this = this;
    this.collection.fetch().then(function() {
      /* this is a Backbone Collection */
      var view = new NoteIndex({
        collection: _this.collection
      });

      _this.renderView(view);
      _this.renderSidebar();
    });
  },

  create: function() {
    var view = new NoteForm({
      model: this.collection.add({})
    });

    this.renderView(view);
    this.renderSidebar();
  },

  edit: function(id) {
    var _this = this;
    this.collection.fetch().then(function() {
      var view =  new NoteForm({
        model: _this.collection.get(id)
      });

      var sidebar = new NoteIndex({
        collection: _this.collection
      });

      _this.renderView(view);
      _this.renderSidebar(sidebar);
    });
  },

  renderView: function(view) {
    if (this.currentView && this.currentView.remove) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.currentView.render();
    $('#target').html(this.currentView.el);
  },

  renderSidebar: function(view) {
    if (this.sidebarView && this.sidebarView.remove) {
      this.sidebarView.remove();
    }

    if (view) {
      this.sidebarView = view;
      this.sidebarView.render();
      $('#sidebar').html(this.sidebarView.el);
    }
  }
});

this.hello = 'world';
