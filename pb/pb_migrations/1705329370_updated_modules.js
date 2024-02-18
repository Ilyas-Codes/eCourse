/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  collection.listRule = "user.id = @request.data.id"
  collection.viewRule = "user.id = @request.data.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  collection.listRule = "@request.data.user.id = user.id"
  collection.viewRule = "@request.data.user.id = user.id"

  return dao.saveCollection(collection)
})
