/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  collection.listRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"
  collection.createRule = null
  collection.updateRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
