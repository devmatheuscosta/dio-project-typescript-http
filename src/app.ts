import * as http from "http";
import {
	getFilterEpisodes,
	getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (
	req: http.IncomingMessage,
	res: http.ServerResponse
) => {
	const baseUrl = req.url?.split("?")[0] ?? "undefined";

	if (req.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
		await getListEpisodes(req, res);
	}

	if (req.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
		await getFilterEpisodes(req, res);
	}
};
