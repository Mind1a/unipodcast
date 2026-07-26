import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../api/membersApi";

export const useMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: getMembers,
  });
};
