/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  collection.listRule = "@request.auth.id != \"\" && assignees.id ?= @request.auth.id && id = @collection.lessons.course"
  collection.viewRule = "@request.auth.id != \"\" && assignees.id ?= @request.auth.id && id = @collection.lessons.course"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  collection.listRule = "@request.auth.id != \"\" && assignees.id ?= @request.auth.id && @collection.lessons.course ?= id"
  collection.viewRule = "@request.auth.id != \"\" && assignees.id ?= @request.auth.id && @collection.lessons.course ?= id"

  return dao.saveCollection(collection)
})
