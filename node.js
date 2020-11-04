const admin = require("firebase-admin");
admin.initializeApp({ projectId: "foo" });
const auth = admin.auth();

auth.createUser({ phone: "123456" }, (users) => {
  console.log(users);
});
