import { getQuery } from "h3";
import { queryDocument } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const doc = await queryDocument(query.col as string, query.id as string);
    return { result: doc };
  } catch (error: any) {
    return { result: [], error: error.message };
  }
});
