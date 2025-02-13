import { fetchQuestion, fetchAnswers } from "@/lib/data";
import AnswerForm from "./AnswerForm";
import AnswerList from "./AnswerList";


export default async function QuestionPage({ params }: { params: { id: string } }) {
  const question = await fetchQuestion(params.id);
  const answers = await fetchAnswers(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <AnswerForm questionId={params.id} />
      <AnswerList
              questionId={params.id} answer={{
                  id: "",
                  answer: ""
              }} isAccepted={false}      />
    </div>
  );
}
