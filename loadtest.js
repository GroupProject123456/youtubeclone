import http from "k6/http";
import { sleep, trend } from "k6";

export const options = {
	vus: 500,
	duration: "10s",
};

export default function () {
	http.get(`http://localhost:3000/api/videos`);
	sleep(0.2);
}
