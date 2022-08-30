export function myFunction(argument) {
  let addValue = 0;
  if (typeof argument === "string") {
    addValue = 1;
  }
  return 5 + addValue;
}

export const fetchUser = async(userProvider) => {
  // const user = await userService.getUser()
  const user = await userProvider()
  return user;
}