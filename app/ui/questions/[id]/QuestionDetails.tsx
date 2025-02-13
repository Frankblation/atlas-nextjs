import { fetchQuestion } from "@/lib/data"

export default async function QuestionDetails({ id }: { id: string }) {
  const question = await fetchQuestion(id)

  if (!question) {
    return <div>Question not found</div>
  }

  return <h1 className="text-2xl font-bold mb-6">{question.title}</h1>
}
