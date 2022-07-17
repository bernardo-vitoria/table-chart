import { URL } from "api";
import { rest } from "msw";

export const handlers = [
  rest.get(`${URL.getMetrics}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "oee",
            label: "oee",
            value: 0.68,
            type: "percentage",
            description: "The overall equipment efficiency in %",
            category: "efficiency",
          },
          {
            id: "sl",
            label: "Speed loss",
            value: -10.5,
            type: "number",
            description: "The line speed loss",
            category: "efficiency",
          },
        ],
      })
    )
  ),
];
