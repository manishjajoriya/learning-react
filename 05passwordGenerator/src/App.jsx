import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [passowrd, setPassowrd] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) char += "0123456789";
    if (specialCharAllowed) char += '!"#$%&\'()*+,-./:;<=>?@[\\]^_{|}~"';

    for (let i = 1; i <= length; i++) {
      let temp = Math.floor(Math.random() * char.length);
      pass += char.charAt(temp);
    }

    setPassowrd(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassowrd]);

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passowrd);
  }, [passowrd]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

  return (
    <>
      <div className="mx-auto my-8 w-full max-w-md rounded-lg bg-gray-800 px-4 py-3 text-orange-500 shadow-md">
        <h1 className="my-3 text-center text-white">Password generator</h1>
        <div className="mb-4 flex overflow-hidden rounded-lg shadow">
          <input
            type="text"
            value={passowrd}
            className="w-full px-3 py-1 outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipbord}
            className="shrink-0 bg-blue-700 px-3 py-0.5 text-white outline-none"
          >
            copy
          </button>
        </div>
        <div className="flex gap-x-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={24}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={specialCharAllowed}
              id="characterInput"
              onChange={() => {
                setSpecialCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
