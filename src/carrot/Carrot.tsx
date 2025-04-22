import { useState, useEffect } from "react";
import { Props } from "../App";

type CarrotItemProps = {
  growthStage: number;
  onHarvest: () => void;
  growthSpeed?: number;
};

export function CarrotHeight(props: Props) {
  if (props.stage == 0)
    return <div className="carrot_0" onClick={props.onClick}></div>;
  else if (props.stage == 1)
    return <div className="carrot_1" onClick={props.onClick}></div>;
  else if (props.stage == 2)
    return <div className="carrot_2" onClick={props.onClick}></div>;
  else if (props.stage == 3)
    return <div className="carrot_3" onClick={props.onClick}></div>;
}
export const CarrotItem = ({
  onHarvest,
  growthSpeed = 1000,
}: CarrotItemProps) => {
  const [growthStage, setGrowthStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGrowthStage((prev) => (prev < 3 ? prev + 1 : prev));
    }, growthSpeed);
    return () => clearInterval(timer);
  }, [growthSpeed]);

  const handleClick = () => {
    if (growthStage >= 3) {
      setGrowthStage(0);
      onHarvest();
    }
  };

  return <CarrotHeight stage={growthStage} onClick={handleClick} />;
};
