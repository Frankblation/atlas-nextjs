// app/ui/questions/[id]/AnswerItem.tsx
interface AnswerItemProps {
    answer: { id: string; answer: string };
    questionId: string;
    isAccepted: boolean;
  }

  const AnswerItem = ({ answer, questionId, isAccepted }: AnswerItemProps) => {
    return (
      <div className={`p-4 border rounded-lg flex justify-between ${isAccepted ? "bg-green-100" : ""}`}>
        <p>{answer.answer}</p>
        {!isAccepted && (
          <button
            onClick={() => questionId}
            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            ✅ Accept
          </button>
        )}
        {isAccepted && <span className="text-green-700 font-bold">Accepted ✅</span>}
      </div>
    );
  };

  export default AnswerItem;