import routeLink from "../utils/routeLink";

export default async function Auth() {
  const response = await fetch(routeLink + "/api/users/loggedIn", {
    method: "post",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    return true;
  }
}
