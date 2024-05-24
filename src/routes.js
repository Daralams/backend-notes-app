const { addNotes, getAllNotes, getNotesById, updateNotes, deleteNotes } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotes
  }, 
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotes
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesById
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNotes
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotes
  }
  ]
  
module.exports = routes