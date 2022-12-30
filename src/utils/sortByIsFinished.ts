import type { Task } from "../types/task";

type IsFinishedField = Pick<Task, "isFinished">;

export function sortByIsFinished(
  { isFinished: isFinished1 }: IsFinishedField,
  { isFinished: isFinished2 }: IsFinishedField
) {
  return Number(isFinished1) - Number(isFinished2);
}
