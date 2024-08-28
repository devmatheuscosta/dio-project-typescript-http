import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(
	__dirname,
	process.env.PATH_DATA || "../repositories/podcasts.json"
);
export const repositoryPodcast = async (
	podcastName?: string
): Promise<PodcastModel[]> => {
	const encoding = "utf8";
	const rawData = fs.readFileSync(pathData, encoding);
	let json = JSON.parse(rawData);

	if (podcastName) {
		json = json.filter(
			(podcast: PodcastModel) => podcast.podcastName === podcastName
		);
	}

	return json;
};
