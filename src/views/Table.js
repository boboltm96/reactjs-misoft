import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'PHP') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['PHP'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['Java'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['ReactJS'],
    },
    {
        key: '4',
        name: 'Tiger Nixo',
        age: 32,
        address: 'Arizona No. 1 Lake Park',
        tags: ['PHP'],
    },
    {
        key: '5',
        name: 'Garret Winter',
        age: 32,
        address: 'California No. 1 Lake Park',
        tags: ['ReactJS'],
    },
    {
        key: '6',
        name: 'Ashton Cox',
        age: 32,
        address: 'Alaska No. 1 Lake Park',
        tags: ['PHP'],
    },    
    {
        key: '7',
        name: 'Cedric Kelly',
        age: 32,
        address: 'Florida No. 1 Lake Park',
        tags: ['Java'],
    },    
    {
        key: '8',
        name: 'Airi Satou',
        age: 32,
        address: 'Hawaii No. 1 Lake Park',
        tags: ['ReactJS'],
    },    
        {
        key: '9',
        name: 'Brielle William',
        age: 32,
        address: 'Kentucky No. 1 Lake Park',
        tags: ['PHP'],
    },    
    {
        key: '10',
        name: 'Herrod Chandler',
        age: 32,
        address: 'Maryland No. 1 Lake Park',
        tags: ['PHP'],
    },    
    {
        key: '11',
        name: 'Rhona Davidson',
        age: 32,
        address: 'Louisiana No. 1 Lake Park',
        tags: ['Java'],
    },    
    {
        key: '12',
        name: 'Colleen Hurst',
        age: 32,
        address: 'Massachusetts No. 1 Lake Park',
        tags: ['ReactJS'],
    },    
    {
        key: '13',
        name: 'Sonya Frost',
        age: 32,
        address: 'Michigan No. 1 Lake Park',
        tags: ['Java'],
    },    
    {
        key: '14',
        name: 'Jena Gaines',
        age: 32,
        address: 'Missouri No. 1 Lake Park',
        tags: ['PHP'],
    },    
    {
        key: '15',
        name: 'Quinn Flynn',
        age: 32,
        address: 'Montana No. 1 Lake Park',
        tags: ['Java'],
    },    
    {
        key: '16',
        name: 'Haley Kennedy',
        age: 32,
        address: 'Nevada No. 1 Lake Park',
        tags: ['ReactJS'],
    },    
    {
        key: '17',
        name: 'Charde Marshall',
        age: 32,
        address: 'Mexico No. 1 Lake Park',
        tags: ['ReactJS'],
    },    
    {
        key: '18',
        name: 'Tatyana Fitz',
        age: 32,
        address: 'Pennsylvania No. 1 Lake Park',
        tags: ['PHP'],
    },    
    {
        key: '19',
        name: 'Michael Silva',
        age: 32,
        address: 'Ohio No. 1 Lake Park',
        tags: ['Java'],
    },    
    {
        key: '20',
        name: 'Paul Byrd',
        age: 32,
        address: 'Text No. 1 Lake Park',
        tags: ['Java'],
    }
  ];

const MyTable = () => {
    return (
        <>
          <h1>Users</h1>
          <Table columns={columns} dataSource={data} />
        </>
        
    )
}

export default MyTable
