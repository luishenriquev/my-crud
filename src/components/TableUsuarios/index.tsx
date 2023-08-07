

import { Card, Table } from 'antd';
import React from 'react';

// import { Container } from './styles';

export default function TableUsuarios() {
  return (
<div> 
<Card title="Card">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Age', dataIndex: 'age' },
              ]}
              dataSource={[
                { key: '1', name: 'John Brown', age: 32 },
                { key: '2', name: 'Jim Green', age: 42 },
                { key: '3', name: 'Joe Black', age: 32 },
              ]}
            />
          </Card>
</div>
  );
}

