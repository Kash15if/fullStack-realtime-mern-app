import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

export default function ClientComponent() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []);

  const submtBtn = (data1) => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("hello", data1);
  };

  return (
    <div>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
      <button
        onClick={(e) => {
          submtBtn("kashif Ahmad");
        }}
      >
        aaaaaaaaaaaaa
      </button>
    </div>
  );
}
