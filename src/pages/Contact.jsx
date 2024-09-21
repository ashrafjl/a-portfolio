import React, { useContext } from "react";
import Card from "../components/Card";
import { themeContext } from "../context/ThemeContext";
import Form from "../components/Form";

const Contact = () => {
  const context = useContext(themeContext);
  return (
    <Card>
      <h4
        className={`text-[40px] font-semibold ${
          context?.isDark ? "text-dark-heading-color" : "text-primary"
        }`}
      >
        Let's 👋 <span className="text-senior-secondary">Work</span> Together
      </h4>
      <p className={`text-lg text-secondary font-medium mt-3`}>
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
      <Form />
    </Card>
  );
};

export default Contact;
