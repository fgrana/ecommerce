type Props = {
  text: string;
  selected: boolean;
};

export const Button = (props: Props) => {
  return (
    <>
      <button
        type={"button"}
        className={`btn btn-${props.selected ? "primary" : "secondary"}`}
      >
        {props.text}
      </button>
    </>
  );
};
