const { apiRequest } = require(".");
export const GetProjectsByRole = async (userId) => apiRequest("post", "/api/projects/getProjectsByRole", { userId });


export const CreateProject = async (project) => apiRequest("post", "/api/projects/create", project);

export const GetAllProjects = async (filters) => apiRequest("post", "/api/projects/index", filters);

export const GetProjectById = async (id) => apiRequest("post", "/api/projects/detail", { _id: id });

export const EditProject = async (project) => apiRequest("post", "/api/projects/update", project);

export const DeleteProject = async (id) => apiRequest("post", "/api/projects/destroy", { _id: id });
export const AddMemberToProject = async (data) => apiRequest("post", "/api/projects/add-member", data);

export const RemoveMemberFromProject = async (data) => apiRequest("post", "/api/projects/remove-member", data);


