import * as API from "./data-models";

export default class DummyApiClient implements API.IApiClient{
  
  readonly prefix: string;
  readonly hostname: string | null;
  readonly protocol: string | null;

  pumpOn: boolean;

  constructor(hostname: string | null, protocol: "http" | "https" | null, port: number) {
    this.prefix = "/api/v1"
    this.hostname = hostname;
    this.protocol = protocol;

    this.pumpOn = false

    if (hostname && protocol) {
      this.prefix = `${protocol}://${hostname}/api/v1`;
    }
  }

  async ping() {
    return {
        version: "0"
    }
  }

  async analyseImage(imageData: string) {
    return {
      messages: ["Success"],
      extra: {
        imageData: imageData
      }
    }
  }
  
}