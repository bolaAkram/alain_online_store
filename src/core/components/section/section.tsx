import  { ReactNode } from "react";
interface SectionProps {
  title: string;
  titleButton: ReactNode;
  children:ReactNode
}
const Section = ({ title, titleButton,children }: SectionProps) => {
  return (
    <div className="my-10">
    <div className="text-start ">
      <div className="flex justify-between items-center">
        <h3 className="font-extrabold">{title}</h3>
        {titleButton}
      </div>
      <div className="w-full border-t-4 border-dashed h-4"></div>
    </div>
    {children}
    </div>

  );
};

export default Section;
