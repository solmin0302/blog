type TitleProps = {
  emoji: string;
  innerText: string;
};

export default function Title({ emoji, innerText }: TitleProps) {
  return (
    <h1 className="text-3xl">
      {emoji}
      <strong className="ml-2">{innerText}</strong>
    </h1>
  );
}
