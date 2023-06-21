import { Button } from "react-bootstrap";

interface SubmitButtonInterface {
  disabled?: boolean;
  variant: string;
  text: string;
  onClick?: () => void;
}
export default function SubmitButton({
  disabled,
  variant,
  text,
  onClick,
}: SubmitButtonInterface) {
  return (
    <Button
      disabled={disabled}
      className="w-75 py-2 text-white fw-bold"
      variant={variant}
      type="submit"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
