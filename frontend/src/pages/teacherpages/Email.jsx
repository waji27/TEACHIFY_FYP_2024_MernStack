import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const Email = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData && authData.user && authData.user.email) {
      setUserEmail(authData.user.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/email", {
        name,
        email: userEmail,
      });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        toast.success(response?.data?.updatedUser?.name);
      } else {
        toast.error(response?.data?.message || "Email not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <section>
        <h1 className="text-white mx-auto">Email</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input type="email" value={userEmail} readOnly placeholder="Email" />
          <input type="submit" className="bg-blue-500 cursor-pointer" />
        </form>
      </section>
    </Layout>
  );
};

export default Email;
