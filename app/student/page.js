export default function StudentPage() {

  // JSON Object
  const student = {
    name: "Alice",
    roll: "12345",
    image: "/student.jpg"  // image inside /public folder
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Student Details</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          width: "300px",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >
        <img
          src={student.image}
          alt="Student"
          style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
        />

        <h2>{student.name}</h2>

        <p>
          <strong>Roll: </strong>
          {student.roll}
        </p>
      </div>
    </div>
  );
}
