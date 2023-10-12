/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Env } from "./env";
import { fromCode } from "./status";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const id = crypto.randomUUID();
    const code = parseInt(new URL(request.url).searchParams.get("code") ?? "");
    const status = fromCode(code);
    const response = {
      id,
      response: {
        status,
      },
      request: {
        code,
      },
    };
    return new Response(JSON.stringify(response), {
      // NOTE: Cloudflare Worker can return only 200-599 status
      status: Math.max(200, status.code),
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  },
};
