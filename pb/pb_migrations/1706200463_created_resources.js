/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ob9j5k247n4n8t7",
    "created": "2024-01-25 16:34:23.216Z",
    "updated": "2024-01-25 16:34:23.216Z",
    "name": "resources",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gsvtzcno",
        "name": "name",
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
        "id": "euhjshie",
        "name": "link",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("ob9j5k247n4n8t7");

  return dao.deleteCollection(collection);
})
