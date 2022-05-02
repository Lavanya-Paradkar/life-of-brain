import { useEffect, useState } from "react";

const backendData = require(process.env.GOOGLE_ID);

const [tempValue, setValue] = useState(null);

export default async (req, res) => {
    const { value, questionID } = req.body;

    useEffect(async () => {
      backendData.value.push(question === questionID)
    
      await fetch(value);
      setValue(value);
      
    }, [res]);
    
    res.status(200).json({ id: questionID, value: value })
};