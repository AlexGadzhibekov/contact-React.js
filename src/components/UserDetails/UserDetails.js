import { useState } from "react";
import Info from "../Info/Info";
import Button from "../Button/Button";
export default function UserDetails(props) {
  const [showAge, setShowAge] = useState(false);
  return (
    <div className="user-details">
      <Info>Name: {props.name}</Info>
      <Info>Email: {props.email}</Info>
      <Button onClick={() => setShowAge(!showAge)} value={"Show Age"} />
      {showAge && <p>Age: {props.age}</p>}
    </div>
  );
}
