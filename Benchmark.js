import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 5000,
  duration: "10s",
};

export default function () {
  http.get("http://localhost:3000/api/videos");
  sleep(0.2);
}
