function login(email, password) {
  var users = [{ email: "test@shopeasy.com", password: "Test1234" }];
  var attempts = 0;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      return true;
    }
  }
  attempts = attempts + 1;
  if (attempts > 3) {
    console.log("Compte bloqué");
  }
  return false;
}