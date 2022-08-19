import React, { useState } from "react";
import { Form, Input, Checkbox, Select } from "antd";
import { useNavigate } from "react-router";
import { useUserContext } from "../../services/Authentication";
const { Option } = Select;

// LOG IN FORM
export const LoginForm = ({ handleCancel, setLogin }) => {
  //import handleLogin function using useContext from Authentication.jsx
  const { handleLogin } = useUserContext();

  const onFinish = (values) => {
    //Check if the inserted values are in the DB
    fetch("http://localhost:4000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }) //Use the response to display a message
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        if (data.message === "Access granted") {
          alert(data.message);
        } else if (data.message === "Wrong password") {
          alert(data.message);
        } else {
          alert(`User ${values.email} does not exist. Please sign up.`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //collect the input value from the Form
  const [input, setInput] = useState("");
  //set the value on change of the input content
  function handleInput(e) {
    setInput(e.target.value);
  }

  const [password, setPassword] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  //set navigation path to dashboard
  const navigate = useNavigate();
  function navigateToDashboard() {
    navigate("/dashboard");
  }
  //when login button is clicked:
  function loginAndNavigate() {
    // 1) send input value up to the App component;
    handleLogin(input, password);
    // 2) follow the navigation path;
    navigateToDashboard();
    // 3) hide the modal
    handleCancel();
  }

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login-form"
    >
      <button className="modal-btn-login button-style">
        Log in with Google
      </button>

      <div className="separation-line">
        <div className="line"></div>
        <span className="line-span" style={{ color: "white" }}>
          or
        </span>
        <div className="line"></div>
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: false,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email" value={input} onChange={handleInput} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: false,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </Form.Item>

      <button className="modal-btn-login button-style">Login</button>

      <div className="link-password">
        <a>Forgot Password</a>
      </div>
    </Form>
  );
};

// SIGN UP FORM
export function SignUpForm({ setLogin }) {
  const onFinish = (values) => {
    //Send the inserted values to the backend to be saved into the DB
    fetch("http://localhost:4000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }) //Use the response to display a message
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data.email);
        if (data.email === values.email) {
          alert(
            `New user ${data.email} created. You can go ahead and login now`
          );
        } else {
          alert(`User ${values.email} already exists. Please login.`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login-form"
    >
      <button className="modal-btn-login button-style">
        Sign up with Google
      </button>

      <div className="separation-line">
        <div className="line"></div>
        <span className="line-span" style={{ color: "white" }}>
          or
        </span>
        <div className="line"></div>
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="surname"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: "100%" }}
          placeholder="Phone Number (Optional)"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          <span style={{ color: "#92A7AA" }}>I agree the Terms of Service</span>
        </Checkbox>
      </Form.Item>

      <button type="submit" className="modal-btn-login button-style">
        Sign Up
      </button>
    </Form>
  );
}
