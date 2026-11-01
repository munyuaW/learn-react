import { useOnlineStatus } from "../custom-hooks";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h2>{isOnline ? "✅ Online" : "❌ Disconnected"}</h2>;
}

export default StatusBar;
