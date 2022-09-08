import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import 'antd/dist/antd.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './contactus.css';

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
			<button className='contact-btn' onClick={showModal}>
				Contact Us
			</button>
			<Modal
				title='Contact Us'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[]}
			>
				<Form
					layout='vertical'
					name='complex-form'
					onFinish={onFinish}
					size='large'
					footer={[]}
				>
					<Form.Item>
						<Form.Item>
							<Form.Item
								name='firstname'
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
										width: '100%',
									}}
									placeholder='First name'
								/>
							</Form.Item>
						</Form.Item>
						<Form.Item>
							<Form.Item
								name='lastname'
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
										width: '100%',
									}}
									placeholder='Last name'
								/>
							</Form.Item>
						</Form.Item>
						<Form.Item
							name='email'
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
									width: '100%',
								}}
								placeholder='Email'
							/>
						</Form.Item>
					</Form.Item>
					<Form.Item
						name='message'
						rules={[
							{
								required: true,
								message: 'Please input your message',
							},
						]}
					>
						<Input.TextArea
							showCount
							maxLength={500}
							placeholder='Your message'
						/>
					</Form.Item>

					<Form.Item colon={false}>
						<Button className='form-button' htmlType='submit'>
							Send Message <i className='fa fa-paper-plane'></i>
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</section>
	);
}
