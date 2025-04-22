type DirtProps = {
  onClick: () => void;
};

export function Dirt(props: DirtProps) {
  const onClick = props.onClick;

  return <div className="farmfield" onClick={onClick}></div>;
}
