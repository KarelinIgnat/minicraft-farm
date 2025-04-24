import { Exchange, exchangeData } from "./Exchange";

type Props = {};

export function Exchanges(props: Props) {
    const exchanges = exchangeData.map((exchange) => (
        <Exchange exchange={exchange} />
    ));
    return (
        <div
            style={{
                background: "red",
            }}
        >
            Exchanges
            {exchanges}
        </div>
    );
}
