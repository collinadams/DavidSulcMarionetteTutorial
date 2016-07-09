contactsListView.on('childview:contact:show', function(childView, model){
  ContactManager.trigger('contact:show', model.get('id'));
});