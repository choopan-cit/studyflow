import { assignments } from "./assignments.js";

import {
  getPendingAssignments,
  getAssignmentTitles,
  getAssignmentById,
  getStatistics,
} from "./assignmentUtils.js";

console.log("Pending assignments:");
console.log(getPendingAssignments(assignments));

console.log("Assignment titles:");
console.log(getAssignmentTitles(assignments));

console.log("Assignment with ID 2:");
console.log(getAssignmentById(assignments, 2));

console.log("Assignment statistics:");
console.log(getStatistics(assignments));
