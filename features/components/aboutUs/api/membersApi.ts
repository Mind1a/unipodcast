import { safeFetch } from "@/lib/apiClient";
import { Member } from "../types/memberTypes";

export const getMembers = async (): Promise<Member[]> => {
  return safeFetch<Member[]>("/api/member");
};
