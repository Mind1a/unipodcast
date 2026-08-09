import { safeFetch } from "@/lib/apiClient";
import { MessageRequest } from "../types/messageTypes";

export const sendMessage = async (data: MessageRequest): Promise<void> => {
    return safeFetch<void>("/api/message", {
        method: "POST",
        body: JSON.stringify(data),
    });
};
