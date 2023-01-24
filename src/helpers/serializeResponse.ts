import type { DatabaseFields } from "src/types/databaseFields";

export const serializeResponse = <ResponseType extends DatabaseFields>(
  data: ResponseType
): Omit<ResponseType, "createdAt" | "updatedAt"> => {
  const { updatedAt, createdAt, ...otherFields } = data;

  return otherFields;
};
