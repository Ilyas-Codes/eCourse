/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  collection.listRule = "module.user.id = @request.data.id"
  collection.viewRule = "module.user.id = @request.data.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b36lt0a0v5anqh3")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
