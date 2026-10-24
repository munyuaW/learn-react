import { useWindowSize } from "../custom-hooks";

function ResponsiveComponent() {
  const { width } = useWindowSize();
  return (
    <div>
      <h1>Current Width: {width}</h1>
    </div>
  );
}

export default ResponsiveComponent;
