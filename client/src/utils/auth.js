import routeLink from "../utils/route";

export default async function Auth() {
  const response = await fetch(routeLink + "/api/users/loggedIn", {
    method: "post",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status === 200) {
    return true;
  } else if (response.status === 401) {
    return false;
  }
}
