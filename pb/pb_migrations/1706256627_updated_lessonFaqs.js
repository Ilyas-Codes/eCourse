/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3")

  collection.listRule = "@request.auth.id != \"\" && lesson.course.assignees.id ?= @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && lesson.course.assignees.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
