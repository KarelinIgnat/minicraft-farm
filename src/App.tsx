import { useEffect, useState } from "react";
import "./App.css";
type Props = {
  stage: number;
  onClick: () => void;
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

type WheatItemProps = {
  onHarvest: () => void;
  growthSpeed?: number;
};

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

export const App = () => {
  const [totalHarvest, setTotalHarvest] = useState(0);
  const handleWheatHarvest = () => {
    setTotalHarvest((prev) => prev + 1);
  };
  const renderWheatItems = () => {
    return [...Array(5)].map((_, index) => (
      <WheatItem
        key={index}
        onHarvest={handleWheatHarvest}
        growthSpeed={Math.random() * 1000 + 500}
      />
    ));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Собрано всего: {totalHarvest} 🌾</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "800px",
        }}
      >
        {renderWheatItems()}
      </div>
    </div>
  );
};

export default App;
