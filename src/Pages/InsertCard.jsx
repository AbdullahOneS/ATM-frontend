import React,{useState,useEffect} from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const InsertCard = () => {

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});
  
    // To disable submit button at the beginning.
    useEffect(() => {
      forceUpdate({});
    }, []);
    const onFinish = (values) => {
      console.log('Finish:', values);
    };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"80%"}}>
        <div className='card'></div>
        <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", width:"50%",backgroundColor:"whitesmoke",padding:"2%"}} >
        <Form form={form} name="horizontal_login" onFinish={onFinish}>
      <Form.Item
        name="AccountNumber"
        rules={[
          {
            required: true,
            message: 'Please input your account no!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Account Number" />
      </Form.Item>
      {/* <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item> */}
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
        </div>
    </div>
  )
}

export default InsertCard
