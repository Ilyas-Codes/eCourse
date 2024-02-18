/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  collection.listRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id && course != \"\""
  collection.viewRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id && course != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  collection.listRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && course.assignees.id ?= @request.auth.id"

  return dao.saveCollection(collection)
})
