import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // You can extend Textarea props with custom styles or any additional logic.
}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={`w-full p-3 border rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}