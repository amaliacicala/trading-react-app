import React from "react";
import { Form, Input, Checkbox, Select } from "antd";
import { useNavigate } from "react-router";
import { useUserContext } from "../../services/Authentication";
import { LoginWithGoogle, LogoutWithGoogle } from "./GoogleLogin";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const clientId =
  "153124458187-5nif67kd7aupognsmu3k4vek9qc9n93l.apps.googleusercontent.com";

const { Option } = Select;

// LOG IN FORM
export const LoginForm = ({ handleCancel, setLogin }) => {
  //import from Authentication.jsx
  const { setLog, setUser } = useUserContext();

  //set navigation path to dashboard
  const navigate = useNavigate();

  //Make a POST request to backend with the login values
  const onFinish = (values) => {
    //Check if the inserted values are in the DB
    fetch("http://localhost:4000/auth/signin", {
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
          handleCancel();
          //Allow to log in
          setLog(true);
          setUser(data.dataValues.name);
          //Navigate to the private dashboard
          navigate(`/dashboard/${data.dataValues.id}`);
        } else if (data.message === "Invalid password") {
          alert(data.message);
        } else {
          alert(data.message);
          //Open sign up form if the user does not exist
          setLogin(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

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
      <LoginWithGoogle />

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
        <Input placeholder="Email" />
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
        <Input.Password placeholder="Password" />
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
    fetch("http://localhost:4000/auth/signup", {
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
        if (data.email === values.email) {
          alert(
            `New user ${data.email} created. You can go ahead and login now`
          );
        } else {
          alert(`User ${values.email} already exists. Please login.`);
        }
        //Open login form
        setLogin(true);
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
        <Option value="39">+39</Option>
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
