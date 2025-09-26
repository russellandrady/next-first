"use client";
import { TodoItem } from "@/components/Todo";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const initialTodos = [
  { id: 1, text: "This is an example of task #1", completed: true },
  { id: 2, text: "This is an example of task #2", completed: false },
  { id: 3, text: "This is an example of task #3", completed: true },
  { id: 4, text: "This is an example of task #4", completed: false },
  { id: 5, text: "This is an example of task #5", completed: false },
]
  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-4 py-4 px-3 h-full min-h-[calc(100vh-8rem)] items-center">
      <div className="grid grid-cols-1">
        <div className="w-full">
          <div className="grid grid-cols-[auto_1fr] items-center gap-2 mx-2">
            <Search className="text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full text-sm bg-transparent outline-none"
            />
          </div>
          <hr className="border-border-light mx-2 mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="w-full">
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 mx-2">
            <input
              type="text"
              placeholder="Add new tasks..."
              className="w-full text-sm bg-transparent outline-none"
            />
            <button className="p-2 border-none rounded-lg hover:bg-primary/80 transition-colors bg-primary text-primary-foreground">
              <Plus className="h-4 w-4 text-content-light" />
            </button>
          </div>
          <hr className="border-border-light mx-2 mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 justify-start">
        <div className="w-full flex flex-col gap-4 pr-4 ml-2">
          {initialTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={() => {}} onDelete={() => {}} />
            ))}
        </div>
      </div>
    </div>
  );
}
