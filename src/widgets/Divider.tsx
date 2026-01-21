interface Props {
  color: string;
  size: string;
}

export const Divider = ({ color = "red", size = "1px" }: Props) => {
  return (
    <hr
      className="w-full my-1 border-0"
      style={{
        height: size,
        backgroundColor: color,
      }}
    />
  );
};
