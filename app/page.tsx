"use client";
import { MainButton } from "@/components/MainButton";
import { TodoItem } from "@/components/Todo";
import { Input } from "@/components/ui/input";
import { trpc } from "@/server/client";
import { useTaskStore } from "@/store/useTaskStore";
import { Plus, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [newTitle, setNewTitle] = useState("");
  const [search, setSearch] = useState("");

  const tasksQuery = trpc.task.getAll.useQuery(undefined, {});
  const tasks = tasksQuery.data || [];

  const createTask = trpc.task.create.useMutation({
    onSuccess: () => {
      setNewTitle("");
      tasksQuery.refetch();
    },
  });

  const toggleTask = trpc.task.toggle.useMutation({
    onSuccess: () => {
      tasksQuery.refetch();
    },
  });

  const deleteTask = trpc.task.delete.useMutation({
    onSuccess: () => {
      tasksQuery.refetch();
    },
  });

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    createTask.mutate({ title: newTitle.trim() });
  };

  const handleToggle = (id: string, current: boolean) => {
    toggleTask.mutate({ id, completed: !current });
  };

  const handleDelete = (id: string) => {
    deleteTask.mutate({ id });
  };

  const filtered = search
    ? tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    : tasks;

  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-4 py-4 px-3 h-full min-h-[calc(100vh-8rem)] ">
      <div className="grid grid-cols-1">
        <div className="w-full">
          <div className="grid grid-cols-[auto_1fr] items-center gap-2 mx-2">
            <Search className="text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full text-sm bg-transparent outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAdd();
                }
              }}
            />
            <MainButton
              icon={<Plus className="h-4 w-4 text-content-light" />}
              onClick={handleAdd}
            />
          </div>
          <hr className="border-border-light mx-2 mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-1 justify-start">
        <div className="w-full flex flex-col gap-4 pr-4 ml-2">
          {filtered?.map(({ id, title, completed }) => (
            <TodoItem
              key={id}
              todo={{ id, title, completed }}
              onToggle={() => handleToggle(id, completed)}
              onDelete={() => handleDelete(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
