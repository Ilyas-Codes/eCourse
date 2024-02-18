/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q5inkm8uu9b36oq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "q5inkm8uu9b36oq",
    "created": "2024-01-16 15:57:51.905Z",
    "updated": "2024-01-16 15:57:51.905Z",
    "name": "progress",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i5p6pmp7",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "completed"
          ]
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
})
