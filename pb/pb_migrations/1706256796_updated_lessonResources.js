/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cflmwtgulbeuubc")

  // remove
  collection.schema.removeField("5g0kvpay")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vqxeowol",
    "name": "link",
    "type": "url",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cflmwtgulbeuubc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5g0kvpay",
    "name": "link",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("vqxeowol")

  return dao.saveCollection(collection)
})
