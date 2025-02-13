import AnswerItem from "./AnswerList";

interface AnswerListProps {
    answers: { id: string; answer: string; question_id: string }[];
    questionId: string;
    acceptedAnswerId: string | null;
  }
  
  const AnswerList = ({ answers, questionId, acceptedAnswerId }: AnswerListProps) => {
    return (
      <div className="mt-4 space-y-2">
        {answers.length === 0 ? (
          <p className="text-gray-500">No answers yet. Be the first to answer!</p>
        ) : (
          answers
            .sort((a, b) => (a.id === acceptedAnswerId ? -1 : 1))  // Sort accepted answer first
            .map((answer) => (
              <AnswerItem key={answer.id} answer={answer} questionId={questionId} isAccepted={answer.id === acceptedAnswerId} />
            ))
        )}
      </div>
    );
  };
  