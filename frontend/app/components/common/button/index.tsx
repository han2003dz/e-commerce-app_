import "./style.css";

type TitleProps = {
  title: string;
};

export const ButtonStyle = ({ title }: TitleProps) => {
  return <button className="button mt-16">{title}</button>;
};
