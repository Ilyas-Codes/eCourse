/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yaoytodp8g23zu3",
    "created": "2024-01-26 08:04:08.380Z",
    "updated": "2024-01-26 08:04:08.380Z",
    "name": "lessonFaqs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6nbuaxni",
        "name": "lesson",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "b36lt0a0v5anqh3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "gce0igsy",
        "name": "question",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eczwmw0l",
        "name": "answer",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yaoytodp8g23zu3");

  return dao.deleteCollection(collection);
})
