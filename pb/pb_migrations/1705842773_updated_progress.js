/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  collection.listRule = "@request.auth.id != \"\" && assignee.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && assignee.id = @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" && assignee.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p3zwlmhocgdrly")

  collection.listRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"

  return dao.saveCollection(collection)
})
