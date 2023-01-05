import { useNavigate, Outlet } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  }

  return (
    <>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={handleSubmit}>Submit Form</button>
    </>
  )
}
