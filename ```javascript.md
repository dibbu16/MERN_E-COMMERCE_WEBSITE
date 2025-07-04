```javascript
// ...existing code...
axios.get('http://localhost:5000/api/auth/check-auth', {
  headers: {
    Authorization: `Bearer ${yourToken}` // get token from localStorage/cookie
  }
});
// ...existing code...
```