import { faker } from "@faker-js/faker";
import postgres from "postgres";
import fs from "fs";

// const sql = postgres("postgres://localhost:5432/youtube ");
// const writableStream = fs.createWriteStream("data.csv");
const writableStreamVideo = fs.createWriteStream("datavideos.csv");

function generateUniqueVideoId() {
	const usedIds = new Set(); // Set to keep track of used IDs

	while (true) {
		const videoId = faker.number.int({ min: 1000000 });

		if (!usedIds.has(videoId)) {
			usedIds.add(videoId);
			return videoId;
		}
	}
}

for (let i = 0; i < 10000; i++) {
	const video_id = generateUniqueVideoId();
	const title = faker.lorem.sentences({ min: 1, max: 3 });
	const description = faker.lorem.sentences({ min: 5, max: 10 });
	const thumbnail_url = faker.internet.url();
	const url = faker.internet.url();
	const published_at = "10 October 2020";
	const channel_id = faker.number.int({ min: 100000 });
	const channel_title = faker.number.int({ min: 1000000 });
	const view_count = faker.number.int({ min: 1000000 });
	const like_count = faker.number.int({ min: 1000000 });
	const dislike_count = faker.number.int({ min: 1000000 });

	writableStreamVideo.write(
		`${video_id}, ${title}, ${description}, ${thumbnail_url}, ${url}, ${published_at}, ${channel_id}, ${channel_title}, ${view_count}, ${like_count}, ${dislike_count}\n`
	);
}
// sql.end();
