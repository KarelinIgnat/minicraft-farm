import { useState } from "react";
import { Dirt } from "../dirt/dirt";
import { WheatItem } from "../wheat/Wheat";
import { CarrotItem } from "../carrot/Carrot";

type Harvest = { wheat: number; carrot: number };

export type FarmingProps = {
    harvest: { wheat: number; carrot: number };
    setHarvest: (action: React.SetStateAction<Harvest>) => void;
};

export type Props = {
    stage: number;
    onClick: () => void;
};
export type FieldItem = {
    id: string;
    plantType: "empty" | "wheat" | "carrot";
    growthStage: number;
};

export function Farming(props: FarmingProps) {
    const [fields, setFields] = useState<FieldItem[]>(() =>
        Array(5)
            .fill(null)
            .map((_, i) => ({
                id: `field-${i}`,
                plantType: "empty",
                growthStage: 0,
            }))
    );

    const [selectedPlant, setSelectedPlant] = useState<"wheat" | "carrot">(
        "wheat"
    );

    // Посадка растения
    const handlePlant = (fieldId: string) => {
        setFields(
            fields.map((field) =>
                field.id === fieldId && field.plantType === "empty"
                    ? { ...field, plantType: selectedPlant, growthStage: 0 }
                    : field
            )
        );
    };

    // Сбор урожая
    const handleHarvest = (fieldId: string, plantType: "wheat" | "carrot") => {
        setFields(
            fields.map((field) =>
                field.id === fieldId
                    ? { ...field, plantType: "empty", growthStage: 0 }
                    : field
            )
        );
        props.setHarvest((prev) => ({
            ...prev,
            [plantType]: prev[plantType] + 1,
        }));
    };

    return (
        <div style={{ padding: "20px", background: "purple" }}>
            <div style={{ marginBottom: "20px" }}>
                <button
                    onClick={() => setSelectedPlant("wheat")}
                    style={{
                        fontWeight:
                            selectedPlant === "wheat" ? "bold" : "normal",
                    }}
                >
                    Выбрать пшеницу 🌾
                </button>
                <button
                    onClick={() => setSelectedPlant("carrot")}
                    style={{
                        marginLeft: "10px",
                        fontWeight:
                            selectedPlant === "carrot" ? "bold" : "normal",
                    }}
                >
                    Выбрать морковь 🥕
                </button>
            </div>

            <div>
                Собрано: 🌾 {props.harvest.wheat} | 🥕 {props.harvest.carrot}
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "20px",
                    marginTop: "30px",
                }}
            >
                {fields.map((field) => (
                    <div
                        key={field.id}
                        style={{ textAlign: "center" }}
                    >
                        {field.plantType === "empty" ? (
                            <Dirt onClick={() => handlePlant(field.id)} />
                        ) : field.plantType === "wheat" ? (
                            <WheatItem
                                growthStage={field.growthStage}
                                onHarvest={() =>
                                    handleHarvest(field.id, "wheat")
                                }
                                growthSpeed={1000}
                            />
                        ) : (
                            <CarrotItem
                                growthStage={field.growthStage}
                                onHarvest={() =>
                                    handleHarvest(field.id, "carrot")
                                }
                                growthSpeed={800}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
