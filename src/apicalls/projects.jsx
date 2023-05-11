const { apiRequest } = require(".");
export const GetProjectsByRole = async (userId) => apiRequest("post", "/api/projects/getProjectsByRole", { userId });