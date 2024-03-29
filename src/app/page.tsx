import { Chat } from "@/components/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="container flex py-16 items-center justify-center gap-10 min-h-screen flex-col ">
      <GridBackground />
      <Header />
      <Chat />
    </main>
  );
}

export function GridBackground() {
  return (
    <div className="h-screen w-screen absolute right-2 top-0 -z-10 dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="z-10 max-w-5xl font-mono text-sm flex gap-2 items-center">
      <p className="flex justify-center border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
        Chatbot Application by&nbsp;
        <HoverCard>
          <HoverCardTrigger asChild>
            <code className="font-mono font-bold">
              <a
                className="flex place-items-center gap-2 pointer-events-auto p-0"
                href="https://github.com/hyamero"
                target="_blank"
                rel="noopener noreferrer"
              >
                @hyamero
              </a>
            </code>
          </HoverCardTrigger>
          <HoverCardContent sideOffset={25} className="w-80 mr-5">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/112312511?s=200&v=4" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@hyamero</h4>
                  <p className="text-sm">
                    Full-Stack Developer Based in the Philippines
                  </p>
                </div>
                <Button variant="outline">
                  <a
                    href="https://github.com/hyamero"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </p>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="text-muted-foreground h-full py-3"
            >
              <a
                href="https://github.com/hyamero/chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs" sideOffset={10}>
            View Source Code
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  );
};
