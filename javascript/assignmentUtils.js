// Return assignments with Pending status
export function getPendingAssignments(assignments) {
  return assignments.filter((assignment) => assignment.status === "Pending");
}

// Return only assignment titles
export function getAssignmentTitles(assignments) {
  return assignments.map((assignment) => assignment.title);
}

// Find an assignment using its ID
export function getAssignmentById(assignments, id) {
  return assignments.find((assignment) => assignment.id === id);
}

// Calculate assignment statistics
export function getStatistics(assignments) {
  return {
    total: assignments.length,

    pending: assignments.filter((a) => a.status === "Pending").length,

    completed: assignments.filter((a) => a.status === "Completed").length,
  };
}
