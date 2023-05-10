type TagProps = {
  innerText: string;
  onClick?: () => void;
};

export default function Tag({ innerText, onClick }: TagProps) {
  return (
    <div
      className="rounded-md bg-slate-300 w-fit px-2 py-1 select-none hover:scale-110 transition duration-200 hover:text-violet-500"
      onClick={onClick ?? onClick}
    >
      <p className="text-xs font-mono">{innerText}</p>
    </div>
  );
}
