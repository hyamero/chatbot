"use client";

import * as React from "react";
import { useChat } from "ai/react";
import { Send, Bot } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ToggleTheme } from "./toggle-theme";
import { QuestionTemplates } from "./question-templates";
import { ChatList } from "./chat-list";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat();

  const inputLength = input.trim().length;

  return (
    <Card className="flex flex-col  justify-between w-full max-w-xl h-[70vh] min-h-[350px] max-h-[700px] relative">
      <CardHeader className="bg-background border-b w-full item-center rounded-t-xl flex justify-between flex-row">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>
              <Bot />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">GPT</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-sm text-muted-foreground">gpt-3.5-turbo</p>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs" sideOffset={25}>
                  GPT-3.5 Turbo models can understand and generate natural
                  language or code and have been optimized for chat.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <ToggleTheme />
      </CardHeader>

      {!messages.length ? (
        <CardContent className="h-full flex items-end">
          <QuestionTemplates setInput={setInput} />
        </CardContent>
      ) : (
        <ChatList messages={messages} />
      )}

      <CardFooter className="flex w-full flex-col z-10">
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" size="icon" disabled={inputLength === 0}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
