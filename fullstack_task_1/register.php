$sql = "INSERT INTO students (student_name, email, dob, department, phone) 
        VALUES ('$name', '$email', '$dob', '$dept', '$phone')";
$sql = "SELECT id, student_name, department FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Name: " . $row["student_name"]. " (" . $row["department"]. ")<br>";
    }
}
