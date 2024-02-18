/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q1yiqxs8",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Not Started",
        "In Progress",
        "Completed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7jo5p6lzwwht0s5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q1yiqxs8",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "not started",
        "in progress",
        "completed"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
