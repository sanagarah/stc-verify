interface ErrorMessageInterface {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageInterface) {
  return <p className="text-error">{message}</p>;
}
