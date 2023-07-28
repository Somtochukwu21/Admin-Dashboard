type MessagePropsType = { className: string; message: string | undefined };

export const MessageComponent = ({ className, message }: MessagePropsType) => (
  <div className={`mt-2 w-full border-l-4  px-3 py-3 text-left text-gray-800 ${className}`}>{message}</div>
);
