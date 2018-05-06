import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/users"
      : "http://localhost:3000/api/users"
});
export function editUser(id, userChanges) {
  const formData = new FormData();
  // you can add more information to the formdata
  Object.keys(userChanges).forEach(key => {
    formData.append(key, userChanges[key]);
  });

  return service
    .patch(id, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => res.data);
}
export function getUsers() {
  return service.get("/").then(res => res.data);
}
export function getUser(id) {
  return service.get(id).then(res => res.data);
}
