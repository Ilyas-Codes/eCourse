/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cflmwtgulbeuubc")

  collection.name = "lesson_resources"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cflmwtgulbeuubc")

  collection.name = "lessonResources"

  return dao.saveCollection(collection)
})
