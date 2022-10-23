import React, { useState, useEffect } from "react";

export function Button(): JSX.Element {
  let [counter, setCounter] = useState(0);

  let [name, setName] = useState("Mo");

  useEffect(() => {
    console.log(counter);

    if (counter === 5) {
      setName("hamza");
    }
    else {
        setName("here")
    }

    console.log(name);
  }, [counter]);

  return (
    <div>
      <NameLabel name={name} setName={setName} />
      <NumberLabel counter={counter} setCounter={setCounter} />
    </div>
  );
}

export function NameLabel(props: {
    name: string; 
    setName: any;
}): JSX.Element {
  const { name, setName } = props;
  return <div>{name}</div>;
}

export function NumberLabel(props: {
  counter: number;
  setCounter: any;
}): JSX.Element {
  const { counter, setCounter } = props;

  const incrementer = () => {
    setCounter(counter + 1);
  };

  return <div onClick={incrementer}>{counter}</div>;
}
 