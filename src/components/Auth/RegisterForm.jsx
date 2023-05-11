import { Form, Input, Button, message } from "antd";
import {useState, useContext} from 'react';
import { getAntdFormInputRules } from "../../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../../components/Divider";
import {signUp} from '../../utils/auth-services'
import {setUserToken} from '../../utils/authToken'
import { UserContext } from '../../data';





const RegisterForm = () => {

    const initialState = { username: "", password: ""}
    const [input, setInput] = useState(initialState)
	const {setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUser = await signUp(input)
  
        if (createdUser.token) {
            navigate("/")
            setUserToken(createdUser.token)
            setUser(createdUser.user)
        } else {
           
            navigate("/")
        }

		setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="grid grid-cols-2">
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <div>
          <h1 className="text-7xl text-white">Positive Workflow</h1>
          <span className=" text-white mt-5">
           This is where we work
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[420px]">
          <h1 className="text-2xl text-gray-700 uppercase">
            Lets get you started
          </h1>
          <Divider />
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email"
              rules={getAntdFormInputRules}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={getAntdFormInputRules}
            >
              <Input type="password" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              loading={buttonLoading}
            >
              {buttonLoading ? "Loading" : "Register"}
            </Button>

            <div className="flex justify-center mt-5">
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

