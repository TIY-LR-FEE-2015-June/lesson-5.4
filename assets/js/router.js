var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new NoteBook();

    this.regions = new Marionette.RegionManager({
      regions: {
        sidebar: '#sidebar',
        main: '#target',
      },
    });

    this.setupSidebar();
  },

  currentView: null,
  sidebarView: null,

  routes: {
    '': 'index',
    new: 'create',
    ':id/edit': 'edit',
  },

  index: function() {
    var view = new NoteIndex({
      collection: this.collection,
    });

    this.renderView(view);
    this.sidebarView.hide();
    this.collection.fetch();
  },

  create: function() {
    var view = new NoteForm({
      model: this.collection.add({}),
    });

    this.sidebarView.show();
    this.renderView(view);
  },

  edit: function(id) {
    var _this = this;
    this.sidebarView.show();

    this.collection.fetch().then(function() {
      var view =  new NoteForm({
        model: _this.collection.get(id),
      });

      _this.renderView(view);
    });
  },

  setupSidebar: function() {
    var sidebar = new NoteIndex({
      collection: this.collection,
    });

    this.renderSidebar(sidebar);
  },

  renderView: function(view) {
    this.currentView = view;

    this.regions.get('main').show(this.currentView);
  },

  renderSidebar: function(view) {
    this.sidebarView = view;

    this.regions.get('sidebar').show(this.sidebarView);
  },
});

this.hello = 'world';
