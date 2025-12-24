import axios from "axios";

axios.get("https://api.example.com/data")
    .then(response => {
        console.log("Data received:", response.data);
    })
    .catch((error: Error) => {
        console.error("Error fetching data:", error.message);
    });
