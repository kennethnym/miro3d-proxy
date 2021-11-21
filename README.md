# Miro3D Proxy Server

This is a simple Node.js server that acts as a proxy to query Miro REST API for Miro3D's web plugin client.

## Prerequisites:

- NodeJS v16
- Yarn v1

## Why?

The way web plugins are rendered in Miro prohibits them from querying Miro's REST API due to
CORS limitation. This server circumvents the limitation by acting as a standalone server
that helps clients queries Miro REST APIs on their behalf.

## Getting started

First, create a `.env` file according to `.env.sample`.
- `ACCESS_TOKEN`: The access token that is used to authenticate against Miro REST API.

To start the server, simply run `yarn start`.

## Endpoints

### `POST /upload`

This endpoint is called to upload a picture to a Miro board.

#### Query parameters

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| board     | `string` | The ID of the board the picture is stored on |

#### Headers

- `Content-Type`: `'application/json'`

#### Body

- Type: `application/json`
- Fields:
  - `image`: A data URL representation of the image to be uploaded in base64

#### Response

- Type: `application/json`
- Fields:
  - `imageUrl`: The URL pointing to the image.
