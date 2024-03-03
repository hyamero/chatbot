import { cn } from "@/lib/utils";
import { type Message } from "ai/react";

export const ChatList = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="h-full flex overflow-y-auto">
      <div className="flex h-full flex-col w-full p-10 gap-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
              message.role === "user"
                ? "ml-auto bg-primary text-primary-foreground"
                : "bg-muted"
            )}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
};
