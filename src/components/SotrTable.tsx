import {FC, useState , useRef, SetStateAction} from 'react'
import {  Col, Row, Card, Typography, Table} from 'antd';
import fakeData from '../assets/fake_data.json'
const { Title } = Typography;

const columns = [
    {
        title: '#',
        dataIndex: 'id',
        sorter: (a : any, b: any) => a.id - b.id,
        key: 'id',
    },
    {
        title: 'FirstName',
        filterSearch: true,
        dataIndex: 'first_name',
        sorter: (a : any, b: any) => a.first_name - b.first_name,
        key: 'first_name',
    },
    {
        title: 'LastName',
        filterSearch: true,
        dataIndex: 'last_name',
        sorter: (a : any, b: any) => a.last_name - b.last_name,
        key: 'last_name',
    },
    {
        title: 'Email',
        filterSearch: true,
        dataIndex: 'email',
        sorter: (a : any, b: any) => a.email - b.email,
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            {
              text: 'Woman',
              value: 'Female',
            },
            {
              text: 'Man',
              value: 'Male',
            },
            {
                text: 'No',
                value: 'Agender',
              },
          ],
          onFilter: (value : any, record : any) => record.gender.startsWith(value),
          filterSearch: true,
        key: 'gedner',
    },
    {
        title: 'Ip Aderess',
        filterSearch: true,
        dataIndex: 'ip_address',
        sorter: (a : any, b: any) => a.ip_address - b.ip_address,
        key: 'ip_address',
    },
]
const SotrTable :FC = () => (

    <Card style={{margin: '1rem'}}>
         <Row>
            <Col span={24}>
                <Title>Data Tables</Title>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Table columns={columns} dataSource={fakeData} />
            </Col>
        </Row>
        
    </Card>
   
)

export default SotrTable;