import { UpdatePassword } from "./operations/ProfileHandler";

// projectApi.ts
const BACKEND_URL: string = "https://copart-r61c.onrender.com/";



export const SignupRoute={
  signup: BACKEND_URL + "v1/signup",
  // login: BACKEND_URL + "v1/login"
}


export const generateVerifyOTP = {
  generateOTP : BACKEND_URL + "v1/GetOtp",
  verifyOTP : BACKEND_URL + "v1/verifyOtp",
  login : "http://localhost:4000/" + "v1/login",
  DecodedApi:BACKEND_URL+"v1/DecodToken",

}

export const ProjectApiDetail = {
  FetchProject: BACKEND_URL + "v1/projects/findProjects",
  FetchProjectDescById: BACKEND_URL + "v1/projects/findProjectById",
  addSavedProject: BACKEND_URL+"v1/addSavedProject",
  RemoveSavedProject:BACKEND_URL+"v1/removeSavedProject",
  applyProject:BACKEND_URL+"v1/projects/AppliedProject",
  addProject: "http://localhost:4000/"+"v1/projects/AddProject"
};

export const profileApiDetail={
  profileInfo:BACKEND_URL+"v1/FindByEmail" ,
  DecodedApi:BACKEND_URL+"v1/DecodToken",
  FindIfEmailExistApi: BACKEND_URL + "v1/FindIfEmailExist",
  UpdatePassword: BACKEND_URL + "v1/updatePassword",
}