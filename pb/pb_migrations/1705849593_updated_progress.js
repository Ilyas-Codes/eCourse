/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  collection.updateRule = "@request.auth.id != \"\" && assignee = @request.auth.id && @request.data.course:isset = false && @request.data.assignee:isset = false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  collection.updateRule = "@request.auth.id != \"\" && assignee = @request.auth.id"

  return dao.saveCollection(collection)
})
