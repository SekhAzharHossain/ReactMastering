import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [character, characterAllowed] = useState(false);
  const [number, numberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [copytext, setCopyText] = useState("Copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (character) {
      str += "!@#$%^&*~?";
    }
    if (number) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      let gereratingpassword = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(gereratingpassword);
    }
    setPassword(pass);
  }, [length, character, number]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  });

  useEffect(() => {
    passwordGenerator();
  }, [length, character, number, passwordGenerator]);

  return (
    <>
      <div className=" flex justify-center w-full mt-5 h-32">
        <div className=" bg-slate-800 w-2/4  justify-center">
          <h1 className="text-white text-2xl">Password Generator</h1>
          <div id="inputFields">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="mt-4 w-2/4 rounded "
              readOnly
              ref={passwordRef}
            />
            <button
              className=" bg-slate-900 w-24 text-white"
              onClick={copyPasswordToClipBoard()}
            >
              {copytext}
            </button>
          </div>
          <div>
            <div className=" flex justify-center gap-1">
              <input
                id="len"
                type="range"
                min={6}
                max={18}
                value={length}
                className=" cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length:{length}</label>

              <input
                type="checkbox"
                onChange={() => {
                  numberAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>

              <input
                type="checkbox"
                onChange={() => {
                  characterAllowed((prev) => !prev);
                }}
              />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
