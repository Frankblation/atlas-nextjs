import { fetchQuestion, fetchAnswers } from "@/lib/data"
import QuestionDetails from "./QuestionDetails"
import AnswerForm from "./AnswerForm"
import AnswerList from "./AnswerList"
import LoggedInUser from "@/components/LoggedInUser"
import { AskQuestion } from "@/components/AskQuestion"

export default async function QuestionPage({ params }: { params: { id: string } }) {
  const question = await fetchQuestion(params.id)
  const answers = await fetchAnswers(params.id)

  if (!question) {
    return <div>Question not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{question.title}</h1> {/* Fixed from question.text → question.title */}
        <LoggedInUser />
      </div>

      {/* Fixed props passed to QuestionDetails */}
      <QuestionDetails id={question.id} />

      {/* Ensured question.topic_id exists before rendering AskQuestion */}
      {question.topic_id && <AskQuestion topic={question.topic_id} />}

      {/* Fixed props passed to AnswerList */}
      <AnswerForm questionId={question.id} />

      {answers.length > 0 ? (
        answers.map((answer) => (
          <AnswerList
            key={answer.id}
            answer={answer}  // Fixed from answers → answer
            acceptedAnswerId={question.answer_id}
          />
        ))
      ) : (
        <p className="text-gray-500">No answers yet.</p>
      )}
    </div>
  )
}
