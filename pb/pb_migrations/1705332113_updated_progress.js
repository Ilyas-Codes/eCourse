/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysmth6sfdopg06j")

  collection.listRule = "user.id = @request.data.id"
  collection.viewRule = "user.id = @request.data.id"
  collection.updateRule = "user.id = @request.data.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysmth6sfdopg06j")

  collection.listRule = "@request.data.user.id = user.id"
  collection.viewRule = "@request.data.user.id = user.id"
  collection.updateRule = "@request.data.user.id = user.id"

  return dao.saveCollection(collection)
})
