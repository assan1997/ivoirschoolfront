import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useIsFocusVisible } from "@material-ui/core";

const ClassroomSchool = ({ schoolId }) => {
  const [updateData, setUpdateData] = useState(false);
  const [data, setData] = useState([]);
  const name = useRef();
  const level = useRef();

  const subjects = [];
  useEffect(() => {
    axios
      .get(
        "http://192.168.1.113:4000/api-ivoireschool/getAllSchoolSubjects/" +
          schoolId
      )
      .then((r) => {
        console.log("dat", data);
        if (!updateData) {
          setData(r.data);
          setUpdateData(true);
        }
      });
  }, []);
  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      level: level.current.value,
      schoolId: schoolId,
      subjects: subjects,
    };

    console.log("data", data);
    axios
      .post("http://192.168.1.113:4000/api-ivoireschool/addclassroom", data)
      .then((r) => {
        console.log("r", r);
      });
  };

  const onchange = (e) => {
    if (e.target.checked) {
      subjects.push(e.target.value);
    } else {
      subjects.splice(subjects.indexOf(e.target.value), 1);
    }
    console.log("subjects", subjects);
  };
  return (
    <section>
      <h1>ajouter une classe</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          ref={name}
          placeholder="entrez le nom de la classe"
          required
        />
        <br />
        <input
          type="text"
          ref={level}
          placeholder="entrez le niveau de la classe"
          required
        />
        <p>veuillez chosir les matières de la classe</p>
        {data.map((el) => (
          <label key={el._id}>
            <input onChange={onchange} type="checkbox" value={el._id} />
            {el.name}
          </label>
        ))}
        <br />
        <button type="submit">soumettre</button>
      </form>
    </section>
  );
};

export default ClassroomSchool;
