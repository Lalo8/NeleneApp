import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/users"
      : "http://localhost:3000/api/users"
});
export function editUser(id, userChanges) {
  return service.patch(id, userChanges).then(res => res.data);
}
export function getUsers() {
  return service.get("/").then(res => res.data);
}
export function getUser(id) {
  return service.get(id).then(res => res.data);
}
