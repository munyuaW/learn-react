import { useOnlineStatus } from "../custom-hooks";

function SaveButton() {
  const isOnline = useOnlineStatus();
  return <button>{isOnline ? "Save Progress" : "Reconnecting..."}</button>;
}

export default SaveButton;
