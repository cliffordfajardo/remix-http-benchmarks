import { json } from "@remix-run/node";
import { getDB } from "~/database.server";

const client = getDB();

export const loader = async () => {
  const res = await (
    await client.query(
      "SELECT data from json_payloads_table Where title = 'medium'"
    )
  ).rows;
  return json({
    data: res,
  });
};
