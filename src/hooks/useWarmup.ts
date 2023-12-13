import { useEffect, useState } from "react";
import useApi from "./useApi";

export default function useWarmup() {
  const [warmedUp, setWarmedUp] = useState(false);

  const api = useApi();
  useEffect(() => {
    async function warmup() {
      await fetch(import.meta.env.VITE_API_URL + "/warmup", {
        method: "post"
      });

      await api.messaging.post("Warmup");
      setWarmedUp(true);
    }
    warmup();
  }, [api.messaging]);

  return { warmedUp };
}
