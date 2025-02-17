import { fetchQuestionById, fetchAnswersByQuestionId } from "@/lib/data"
import QuestionDetails from "./QuestionDetails"
import AnswerForm from "./AnswerForm"
import AnswerList from "./AnswerList"
import LoggedInUser from "@/components/LoggedInUser"
import { AskQuestion } from "@/components/AskQuestion"

export default async function QuestionPage({ params }: { params: { id: string } }) {
  const question = await fetchQuestionById(params.id)
  const answers = await fetchAnswersByQuestionId(params.id)

  if (!question) {
    return <div>Question not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{question.text}</h1>
        <LoggedInUser />
      </div>
      <QuestionDetails question={question} />
      <AskQuestion topic={question.topic_id} />
      <AnswerForm questionId={question.id} />
      <AnswerList answers={answers} acceptedAnswerId={question.answer_id} />
    </div>
  )
}

