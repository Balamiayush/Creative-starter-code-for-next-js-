import { works } from "../data";

export function getFeaturedWorks() {
  return works.filter((work) => work.featured);
}

export function getWorkById(workId) {
  return works.find((work) => work.id === workId);
}
