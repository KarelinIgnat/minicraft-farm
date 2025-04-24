import "./exchange.css";

type ExchangeData = {
    source: string;
    target: string;
    sourceAmount: number;
    targetAmount: number;
};

export const exchangeData: ExchangeData[] = [
    {
        source: "iron",
        target: "gold",
        sourceAmount: 5,
        targetAmount: 1,
    },
    {
        source: "gold",
        target: "emerald",
        sourceAmount: 5,
        targetAmount: 1,
    },
    {
        source: "emerald",
        target: "diamond",
        sourceAmount: 5,
        targetAmount: 1,
    },
];

type Props = {
    exchange: ExchangeData;
};

export function Exchange(props: Props) {
    const { source, target, sourceAmount, targetAmount } = props.exchange;
    return (
        <div
            className="exchange"
            style={{
                display: "flex",
            }}
        >
            <div>{source}</div>
            <div>x{sourceAmount}</div>

            <div>=&gt;</div>

            <div>{target}</div>
            <div>x{targetAmount}</div>
        </div>
    );
}
