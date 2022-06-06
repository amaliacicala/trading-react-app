import React, { useState } from 'react';
import { Modal, Button, Form, Input, Space } from 'antd';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

export default function ContactUs() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
  
    return (
        <section>
            <Button type="primary" className="contact-btn" onClick={showModal}>
                Contact Us
            </Button>
            <Modal title="Contact Us" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                name="complex-form"
                onFinish={onFinish}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                >
                <Form.Item label="First Name">
                    <Space>
                    <Form.Item
                        name="firstname"
                        noStyle
                        rules={[
                        {
                            required: true,
                            message: 'First name is required',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: 160,
                        }}
                        placeholder="First name"
                        />
                    </Form.Item>
                    </Space>
                </Form.Item>
                <Form.Item label="Last Name">
                    <Form.Item
                        name="lastname"
                        noStyle
                        rules={[
                        {
                            required: true,
                            message: 'Last name is required',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: 160,
                        }}
                        placeholder="Last name"
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Email">
                    <Form.Item
                        name="email"
                        noStyle
                        rules={[
                        {
                            required: true,
                            message: 'Email is required',
                        },
                        ]}
                    >
                        <Input
                        style={{
                            width: 160,
                        }}
                        placeholder="Email"
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your message',
                    },
                    ]}
                >
                    <Input.TextArea showCount maxLength={500} />
                </Form.Item>

                <Form.Item label=" " colon={false}>
                    <Button htmlType="submit">
                    Send Message
                    </Button>
                </Form.Item>
                </Form>
            </Modal>
        </section>
    )
}