# Podcast Manager

### Descrição

Um aplicativo estilo Netflix, projetado para centralizar e organizar diferentes episódios de podcasts em vídeo, classificados por categorias.

### Domínio

Podcasts em formato de vídeo.

### Features

- Listar episódios de podcasts em seções separadas por categorias, como:

  ```js
  ["saúde", "bodybuilder", "esporte", "mentalidade", "humor"];
  ```

- Filtrar episódios por nome do podcast.

## Implementação

### Feature

### Como vou implementar

A aplicação contará com uma API REST que retornará dados dos episódios em formato JSON. Cada objeto de episódio incluirá o nome do podcast, título do episódio, ID do vídeo, imagem da capa, link do vídeo e as categorias associadas.

GET: exemplo de resposta da API.

```js
[
	{
		podcastName: "flow",
		episode: "CBUM - Flow #319",
		videoId: "pQSuQmUfS30",
		cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
		link: "https://www.youtube.com/watch?v=pQSuQmUFS30",
		categories: ["esporte", "bodybuilder"],
	},
	{
		podcastName: "flow",
		episode: "RUBENS BARRICHELLO - Flow #339",
		videoId: "4KDGTdiOV4I",
		cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
		link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
		categories: ["esporte", "bodybuilder"],
	},
];
```

GET: retorna lista de episódios baseado em um parametro enviado pelo meu cliente do nome do podcast.
