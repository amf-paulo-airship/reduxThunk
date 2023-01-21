export function updateUser(user) {

  //Renew the token (Mock)
  user.accessToken = new Date().toString();

  console.log("--------------------------------------------------");
  console.log("REFRESHED TOKEN:", user.accessToken);

  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: user }), 2500)
  )
}

export function getUserProfile(user) {

  console.log("TOKEN USED.....:", user.accessToken);
  console.log("--------------------------------------------------");

  return new Promise((resolve) =>
    setTimeout(() => resolve({
      data: {
        id: new Date().toString(),
        first: "Marge",
        last: "Filho",
        age: 9,
        tokenUsed: user.accessToken
      }
    }), 500)
  );

}
