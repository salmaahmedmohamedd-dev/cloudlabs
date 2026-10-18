const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");
const DATA_FILE = path.join(__dirname, "../data/issues.json");

async function readIssues() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file doesn't exist, return an empty array
      return [];
    }
    throw error;
  }
}

async function writeIssues(issues) {
  await fs.writeFile(DATA_FILE, JSON.stringify(issues, null, 2));
}
async function createIssue(issueData) {
  const issues = await readIssues();
  const issue = {
    id: randomUUID(),
    title: input.title.trim(),
    description: input.description.trim(),
    priority: input.priority.trim(),
    status: "Open",
    createdAt: new Date().toISOString(),
  };
  issues.push(issue);
  await writeIssues(issues);
  return issue;
}

async function updateIssue(id, updatedData) {
  const issues = await readIssues();
  const index = issues.findIndex((issue) => issue.id === id);
  if (index === -1) return null;
  issues[index].status = updatedData.status;
  await writeIssues(issues);
  return issues[index];
}
module.exports = {
  readIssues,
  createIssue,
  updateIssue,
};
