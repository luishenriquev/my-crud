import { Button, Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import Save from "../../api/save";
import { useApi } from "../../hooks/useApi";

type FieldType = {
  name?: string;
  email?: string;
  cpf?: string;
  celular?: string;
};

export default function FormAdd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (event: any) => {
    setIsModalOpen(false);
    Save(event);
    event = null;
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSave = (event: any) => {
    handleOk(event);
  };

  return (
    <div>
      <>
        <Button
          type="primary"
          style={{ background: "black", width: 100 }}
          onClick={showModal}
        >
          Adicionar
        </Button>
        <Modal
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          title="Cadastro de Usuario"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
            onFinish={handleSave}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Nome"
              name="name"
              rules={[
                { required: false, message: "Please input your username!" },
              ]}
            >
              <Input style={{ width: 120 }} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: false, message: "Please input your password!" },
              ]}
            >
              <Input style={{ width: 120 }} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Cpf"
              name="cpf"
              rules={[
                { required: false, message: "Please input your password!" },
              ]}
            >
              <Input style={{ width: 120 }} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Celular"
              name="celular"
              rules={[
                { required: false, message: "Please input your password!" },
              ]}
            >
              <Input style={{ width: 120 }} />
            </Form.Item>

            <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
              style={{ display: "flex", justifyContent: "end", width: 400 }}
            >
              <Button
                style={{ background: "black" }}
                type="primary"
                htmlType="submit"
              >
                Confirmar
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </div>
  );
}
