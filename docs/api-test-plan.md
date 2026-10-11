| Test ID | Request                                         | Expected Result                                                                                                             |
| ------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| T01     | `GET /api/issues`                               | `200`; JSON array returned.                                                                                                 |
| T02     | `POST` valid title, description, and priority   | `201`; complete created issue returned.                                                                                     |
| T03     | `POST` missing title                            | `400`; `VALIDATION_ERROR`.                                                                                                  |
| T04     | `POST` invalid priority = `Critical`            | `400`; `VALIDATION_ERROR`.                                                                                                  |
| T05     | `PATCH` existing issue with status = `Resolved` | `200`; returned status is `Resolved`.                                                                                       |
| T06     | `PATCH` status = `Deleted`                      | `400`; `VALIDATION_ERROR`.                                                                                                  |
| T07     | `PATCH` unknown issue ID                        | `404`; `ISSUE_NOT_FOUND`.                                                                                                   |
| T08     | `GET` when no issues exist                      | `200`; empty JSON array.                                                                                                    |
| T09     | Send unexpected extra server-owned fields       | Server ignores or rejects according to the contract; the client cannot choose authoritative `id`, `status`, or `createdAt`. |

**Professional habit:** Writing tests before implementation clarifies ambiguous requirements. When Lab 4 code is complete, these cases become the acceptance checklist.
