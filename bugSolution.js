To avoid the error, always check the data type before using it. Here is an improved version of the code in Javascript:

```javascript
const snapshot = await db.collection('myCollection').doc('myDoc').get();
const myData = snapshot.data();
if (typeof myData.myString === 'string') {
  console.log(myData.myString);
} else {
  console.error('myString is not a string:', myData.myString);
  // Handle the error appropriately, for example by using a default value
  const defaultString = 'Default String';
  console.log(defaultString);
}
```
This code checks if `myData.myString` is a string before accessing it, which avoids the error.  If it's not a string, it logs an error message and uses a default value.  You can adapt this approach to handle other data type mismatches.