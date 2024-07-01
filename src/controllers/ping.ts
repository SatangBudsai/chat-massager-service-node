import { Body, Get, Post, Route } from "tsoa";

interface PingResponse {
  message: string;
}

@Route("ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "hello",
    };
  }
  @Post("/create")
  public async createMessage(
    @Body() req: { massage: string; username: string }
  ): Promise<PingResponse> {
    return {
      message: req.massage,
    };
  }
}
