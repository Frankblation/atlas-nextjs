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
        <h1 className="text-2xl font-bold">{question.title}</h1>
        <LoggedInUser />
      </div>

      {/* Ensuring QuestionDetails receives correct props */}
      <QuestionDetails id={question.id} />

      {/* Ensuring AskQuestion only renders if topic_id exists */}
      {question.topic_id && <AskQuestion topic={question.topic_id} />}

      {/* Answer form section */}
      <AnswerForm questionId={question.id} />

      {/* Handling answer list correctly */}
      {answers.length > 0 ? (
        <div>
          {answers.map((answerItem) => (
            <AnswerList
              key={answerItem.id}
              answer={answerItem}
              questionId={question.id}
              isAccepted={question.answer_id === answerItem.id} // Fixed isAccepted check
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No answers yet.</p>
      )}
    </div> // ✅ Closed div properly
  )
}
