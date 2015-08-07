var notes = new NoteBook();

notes.fetch().then(function() {
  form = new NoteForm({
    el: '#target',
    model: notes.first()
  });

  form.render();
});
