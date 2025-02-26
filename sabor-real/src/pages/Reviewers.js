import React, { useState } from 'react';
import { Button, Input, Modal, Form, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Reviewers.css'; 

const Reviewers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewer, setReviewer] = useState({
    avatar: 'https://n13.googleusercontent.com/proxy/aJtw_LxNL926k...', 
    lastChecked: '28-abfLpb0',
    name: 'Edu bravabarcelona',
    web: 'https://www.youtube.com/@bravabarcelona',
    channelId: 'UCqLmqgh3T7dx5vQx6dm6nQ',
  });
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setReviewer(values);
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="reviewers-container">
      <div className="search-section">
        <Input.Search placeholder="BUSCAR RESTAURANTE POR NOMBRE" enterButton="BUSCAR" className="search-bar" />
      </div>

      <div className="pagination-container">
        <Button type="primary" className="nav-button">← Previous</Button>
        <Button type="primary" className="page-button active">1</Button>
        <Button className="page-button">2</Button>
        <Button className="page-button">3</Button>
        <Button className="page-button">4</Button>
        <Button className="page-button">5</Button>
        <Button className="page-button">...</Button>
        <Button className="page-button">90</Button>
        <Button className="page-button">91</Button>
        <Button type="primary" className="nav-button">Next →</Button>
      </div>

      <div className="content-box">
        <div className="reviewer-details">
          <Form layout="vertical">
            <Form.Item label="URL del Avatar:">
              <Input value={reviewer.avatar} disabled />
              <div className="avatar-container">
                <img src={reviewer.avatar} alt="avatar" className="avatar" />
              </div>
            </Form.Item>
            
            <Form.Item label="Last Video Checked">
              <Input value={reviewer.lastChecked} disabled />
              <Button className="action-button blue-button">Cargar últimos vídeos</Button>
            </Form.Item>
            
            <Form.Item label="Name">
              <Input value={reviewer.name} disabled />
            </Form.Item>
            
            <Form.Item label="Web">
              <Input value={reviewer.web} disabled />
              <Button className="action-button blue-button">Visitar web →</Button>
            </Form.Item>
            
            <Form.Item label="Channel ID">
              <Input value={reviewer.channelId} disabled />
              <Button className="action-button blue-button">Obtener Channel ID</Button>
            </Form.Item>
          </Form>
          
          <div className="button-group">
            <Button className="action-button update-button">Actualizar</Button>
            <Button className="action-button delete-button">Eliminar Reviewer</Button>
          </div>
        </div>
      </div>
      
      <div className="create-button-container">
        <Button 
          type="primary" 
          icon={<PlusOutlined />} 
          onClick={showModal} 
          className="create-reviewer-btn"
        >
          Crear Reviewer
        </Button>
      </div>
      
      <Modal 
        title="Crear nuevo Reviewer" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} className="create-button">
            Crear nuevo Reviewer
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="avatar" label="URL del Avatar:" rules={[{ required: true }]}>
            <Input />
            <div className="avatar-preview">
              <img src={reviewer.avatar} alt="avatar preview" className="avatar-small" />
            </div>
          </Form.Item>
          
          <Form.Item name="lastChecked" label="Last Video Checked" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
          <Form.Item name="web" label="Web" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
          <Form.Item name="channelId" label="Channel ID" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Reviewers;