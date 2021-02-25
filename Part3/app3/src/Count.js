import React, { useState } from "react";
const Count = (props) => {
  const name = useField("text");
  const password = useField("password");

  return (
    <div>
      <form>
        <input type={name.type} value={name.value} onChange={name.onChange} />
        <input
          type={password.type}
          value={password.value}
          onChange={password.onChange}
        />
      </form>
    </div>
  );
};

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default Count;
