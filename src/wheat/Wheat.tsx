import { useState, useEffect } from "react";
import { Props } from "../App";

type WheatItemProps = {
  growthStage: number;
  onHarvest: () => void;
  growthSpeed?: number;
};

function WheatHeight(props: Props) {
  if (props.stage == 0)
    return <div className="wheat_0" onClick={props.onClick}></div>;
  else if (props.stage == 1)
    return <div className="wheat_1" onClick={props.onClick}></div>;
  else if (props.stage == 2)
    return <div className="wheat_2" onClick={props.onClick}></div>;
  else if (props.stage == 3)
    return <div className="wheat_3" onClick={props.onClick}></div>;
  else if (props.stage == 4)
    return <div className="wheat_4" onClick={props.onClick}></div>;
  else if (props.stage == 5)
    return <div className="wheat_5" onClick={props.onClick}></div>;
  else if (props.stage == 6)
    return <div className="wheat_6" onClick={props.onClick}></div>;
  else if (props.stage == 7)
    return <div className="wheat_7" onClick={props.onClick}></div>;
}

export const WheatItem = ({
  onHarvest,
  growthSpeed = 1000,
}: WheatItemProps) => {
  const [growthStage, setGrowthStage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setGrowthStage((prev) => (prev < 7 ? prev + 1 : prev));
    }, growthSpeed);
    return () => clearInterval(timer);
  }, [growthSpeed]);
  const handleClick = () => {
    if (growthStage >= 7) {
      setGrowthStage(0);
      onHarvest();
    }
  };
  return <WheatHeight stage={growthStage} onClick={handleClick} />;
};
