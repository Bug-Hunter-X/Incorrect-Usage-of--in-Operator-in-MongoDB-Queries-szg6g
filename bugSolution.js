```javascript
//Correct usage of $in operator
db.collection('documents').find({ field: { $in: [1, 2, 3] } });
```