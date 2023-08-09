import { Button, Card, Form, Input, Space, Table, message } from "antd";
import React, { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Delete from "../../api/delete";
import Update from "../../api/update";

export default function TableUsuarios() {
  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState<any>();
  const [form] = Form.useForm();
  const users = useApi();

  const deleteItem = async (key: any) => {
    Delete(key);
    window.location.reload();
  };
  const onFinish = (values: any) => {
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(1, { ...values, key: editingRow });
    setDataSource(updatedDataSource);
    setEditingRow(null);
    Update(editingRow, values);
    window.location.reload();
  };

  return (
    <div>
      <Card title="Lista de Usuarios">
        <Form form={form} onFinish={onFinish}>
          <Table
            columns={[
              {
                title: "Name",
                dataIndex: "name",
                render: (text, record) => {
                  if (editingRow === record.key) {
                    return (
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your name",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    );
                  } else {
                    return <p>{text}</p>;
                  }
                },
              },
              {
                title: "cpf",
                dataIndex: "cpf",
                render: (text, record) => {
                  if (editingRow === record.key) {
                    return (
                      <Form.Item name="cpf">
                        <Input />
                      </Form.Item>
                    );
                  } else {
                    return <p>{text}</p>;
                  }
                },
              },
              {
                title: "celular",
                dataIndex: "celular",
                render: (text, record) => {
                  if (editingRow === record.key) {
                    return (
                      <Form.Item name="celular">
                        <Input />
                      </Form.Item>
                    );
                  } else {
                    return <p>{text}</p>;
                  }
                },
              },
              {
                title: "Email",
                dataIndex: "email",
                render: (text, record) => {
                  if (editingRow === record.key) {
                    return (
                      <Form.Item name="email">
                        <Input />
                      </Form.Item>
                    );
                  } else {
                    return <p>{text}</p>;
                  }
                },
              },
              {
                title: "opções",
                key: "options",
                render: (_, record) => (
                  <Space size="middle">
                    <div
                      onClick={() => {
                        setEditingRow(record.key);
                        form.setFieldsValue({
                          name: record.name,
                          email: record.email,
                          cpf: record.cpf,
                          celular: record.celular,
                        });
                      }}
                    >
                      <EditOutlined />
                    </div>

                    <div onClick={() => deleteItem(record.key)}>
                      <DeleteOutlined />
                    </div>

                    {editingRow && (
                      <Button type="link" htmlType="submit">
                        <CheckOutlined />
                      </Button>
                    )}
                  </Space>
                ),
              },
            ]}
            dataSource={users.map((resp) => {
              return {
                key: resp.id,
                name: resp.name,
                email: resp.email,
                cpf: resp.cpf,
                celular: resp.celular,
              };
            })}
          />
        </Form>
      </Card>
    </div>
  );
}
