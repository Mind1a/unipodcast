import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../api/messageApi";

export const useMessage = () => {
    return useMutation({
        mutationFn: sendMessage,
    });
};
