/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysmth6sfdopg06j")

  collection.name = "statuses"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ysmth6sfdopg06j")

  collection.name = "progress"

  return dao.saveCollection(collection)
})
