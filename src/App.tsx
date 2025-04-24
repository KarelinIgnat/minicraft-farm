import { useState } from "react";
import "./App.css";
import "./carrot/carrot.css";
import "./wheat/wheat.css";
import { Farming } from "./farming/Farming";
import { Exchanges } from "./exchanges/Exchanges";

export const App = () => {
    // хранить все валюты надо здесь
    const [harvest, setHarvest] = useState({ wheat: 0, carrot: 0 });

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Farming
                harvest={harvest}
                setHarvest={setHarvest}
            />
            ;
            <Exchanges />
        </div>
    );
};
export default App;
