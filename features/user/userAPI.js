export function updateUser(user) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: user }), 5000)
  )
}
