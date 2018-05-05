import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/jobs"
      : "http://localhost:3000/api/jobs"
});

export function getJobs() {
  return service.get("/").then(res => res.data);
}
export function getJob(id) {
  return service.get(id).then(res => res.data);
}
export function removeJob(id) {
  return service.delete(id).then(() => {});
}
export function getJobsByOwner(id) {
  return service
    .get("/", {
      params: {
        ownerId: id
      }
    })
    .then(res => res.data);
}
export function addNewJob(job) {
  const formData = new FormData();
  // you can add more information to the formdata
  Object.keys(job).forEach(key => {
    formData.append(key, job[key]);
  });

  return service
    .post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => res.data);
}
export function editJob(id, jobChanges) {
  return service.patch(id, jobChanges).then(res => res.data);
}
