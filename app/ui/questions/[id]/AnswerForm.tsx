"use client"

import { useState } from "react"
import { addAnswer } from "@/lib/actions"
import { Button } from "@/components/Button"
import { Textarea } from "@/components/Textaeeas"

export default function AnswerForm({ questionId }: { questionId: string }) {
  const [answer, setAnswer] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addAnswer(questionId, answer)
    setAnswer("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Textarea placeholder="Enter your answer here..." value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
