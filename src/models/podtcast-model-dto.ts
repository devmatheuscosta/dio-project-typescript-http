import { PodcastModel } from "./podcast-model";

export interface PodcastModelDTO {
	statusCode: number;
	body: PodcastModel[];
}
