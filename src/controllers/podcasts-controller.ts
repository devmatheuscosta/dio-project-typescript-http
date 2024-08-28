import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastModelDTO } from "../models/podtcast-model-dto";

const defaultContent = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
	req: IncomingMessage,
	res: ServerResponse
) => {
	const content: PodcastModelDTO = await serviceListEpisodes();

	res.writeHead(content.statusCode, defaultContent);
	res.write(JSON.stringify(content.body));
	res.end();
};

export const getFilterEpisodes = async (
	req: IncomingMessage,
	res: ServerResponse
) => {
	const content: PodcastModelDTO = await serviceFilterEpisodes(req);

	res.writeHead(content.statusCode, defaultContent);
	res.write(JSON.stringify(content.body));
	res.end();
};
