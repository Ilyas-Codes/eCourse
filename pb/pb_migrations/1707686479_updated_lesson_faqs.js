/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6nbuaxni",
    "name": "lesson",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b36lt0a0v5anqh3",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6nbuaxni",
    "name": "lesson",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b36lt0a0v5anqh3",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
