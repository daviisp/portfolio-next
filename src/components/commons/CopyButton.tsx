import CopyIcon from "@/icons/CopyIcon";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button
      className="inline-flex items-center justify-center"
      onClick={handleCopy}
    >
      <CopyIcon title="Clique aqui para copiar" className="fill-white" />
    </button>
  );
};
export default CopyButton;
