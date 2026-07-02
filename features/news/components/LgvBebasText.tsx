import { toLgvBebasText } from "@/utils/toLgvBebasText";

const LgvBebasText = ({ children }: { children: string }) => {
  return (
    <>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">{toLgvBebasText(children)}</span>
    </>
  );
};

export default LgvBebasText;
