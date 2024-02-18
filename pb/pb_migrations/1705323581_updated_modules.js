/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  collection.listRule = "@request.data.user.id = user.id"
  collection.viewRule = "@request.data.user.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  collection.listRule = "@request.auth.id = user"
  collection.viewRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
})
