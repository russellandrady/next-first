"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

interface Todo {
  id: string
  title: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 border-none shadow-2xs rounded-xl bg-content-light hover:bg-gray-50 transition-colors">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="h-5 w-5 border-none rounded-lg hover:bg-primary/80 transition-colors bg-primary text-primary-foreground data-[state=checked]:bg-primary data-[state=checked]:text-content-light"
      />
      <span className={cn("flex-1 text-lg", todo.completed && "line-through text-text-secondary-light")}>{todo.title}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="h-8 w-8 p-0 rounded hover:text-primary/80 transition-colors flex items-center justify-center"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}