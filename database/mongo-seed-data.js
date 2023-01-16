let collectionName = 'demo-collection';

db.createCollection(collectionName);
db.getCollection(collectionName).insertMany(
    [
        {
            "id": "F3693646-C0A8-4CD1-92B5-333D7FC99323",
            "value": "Item #1"
        },
        {
            "id": "28358CC9-A82C-4CD9-A588-EB8931B3B1D5",
            "value": "Item #2"
        }
    ]
);