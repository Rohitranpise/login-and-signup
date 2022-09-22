import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        profession: "",
        phone: ""
    });
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async () => {
        const res = await axios
            .post("http://localhost:5000/api/signup", {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                profession: inputs.profession,
                phone: inputs.phone,
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // send http request
        sendRequest().then(() => history("/login"));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    marginLeft="auto"
                    marginRight="auto"
                    width={300}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h2">Signup</Typography>

                    <TextField
                        name="name"
                        onChange={handleChange}
                        value={inputs.name}
                        variant="outlined"
                        placeholder="Name"
                        margin="normal"
                    />
                    <TextField
                        name="email"
                        onChange={handleChange}
                        type={"email"}
                        value={inputs.email}
                        variant="outlined"
                        placeholder="Email"
                        margin="normal"
                    />
                    <TextField
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={inputs.password}
                        variant="outlined"
                        placeholder="Password"
                        margin="normal"
                    />
                    <TextField
                        name="profession"
                        onChange={handleChange}
                        type="profession"
                        value={inputs.profession}
                        variant="outlined"
                        placeholder="profession"
                        margin="normal"
                    />
                    <TextField
                        name="phone"
                        onChange={handleChange}
                        type="phone"
                        value={inputs.phone}
                        variant="outlined"
                        placeholder="Phone"
                        margin="normal"
                    />
                    <Button variant="contained" type="submit">
                        Signup
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Signup;