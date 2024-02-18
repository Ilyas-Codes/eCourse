/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3")

  collection.name = "lesson_faqs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3")

  collection.name = "lessonFaqs"

  return dao.saveCollection(collection)
})
