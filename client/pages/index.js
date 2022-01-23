
import axios from 'axios';
import React, { useState } from 'react';
export default function Home() {

  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const handleSubmit = async () => {
    const payload = {
      language: "cpp",
      code
    }
    try {
      const { data } = await axios.post("http://localhost:8000/run", payload)
      setOutput(data.output);
    } catch (err) {
      console.log(err.response);
    }

  }

  return (
    <div>
      <h1>Online Code Compiler</h1>
      <textarea
        value={code}
        onChange={(e) => { setCode(e.target.value) }}
        rows="20"
        cols="75"></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>{output}</p>
    </div>
  )
}
