import type { Task } from "../types/task";

type UpdatedAtAndCreatedAtFields = Pick<Task, "createdAt" | "updatedAt">;

export function sortByTime(
  { updatedAt: updatedAt1, createdAt: createdAt1 }: UpdatedAtAndCreatedAtFields,
  { updatedAt: updatedAt2, createdAt: createdAt2 }: UpdatedAtAndCreatedAtFields
): number {
  if (updatedAt1) {
    if (updatedAt2) return updatedAt1 - updatedAt2;
    return updatedAt1 - createdAt2;
  }
  if (updatedAt2) {
    if (updatedAt1) return updatedAt1 - updatedAt2;
    return createdAt1 - updatedAt2;
  }
  return createdAt1 - createdAt2;
}
