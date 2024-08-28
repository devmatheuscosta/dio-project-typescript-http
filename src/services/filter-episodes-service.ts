import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";
import { PodcastModelDTO } from "../models/podtcast-model-dto";

export const serviceFilterEpisodes = async (
	req: IncomingMessage
): Promise<PodcastModelDTO> => {
	let responseFormat: PodcastModelDTO = {
		statusCode: 0,
		body: [],
	};

	const podcastName = req.url?.split("?podcastName=")[1] ?? "undefined";
	const data = await repositoryPodcast(podcastName);

	responseFormat = {
		statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
		body: data,
	};

	return responseFormat;
};
