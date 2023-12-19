import { userRole } from "@/constants/userRole";

export interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    role: userRole
  }
  