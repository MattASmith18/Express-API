var arr = new Array(10).fill().map(function() {
  return {
      first: chance["first"](),
      last: chance["last"](),
      email: chance["email"](),
      age: change[age](),
  };
});

var json = JSON.stringify({ users: arr }, null, 2);