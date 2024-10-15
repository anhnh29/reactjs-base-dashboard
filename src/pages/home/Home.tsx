import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { useState } from 'react';
import CModal from '../../atomics/CModal/CModal';
import CTable from '../../atomics/CTable/CTable';
import { TablePagination } from '../../types';
import CButton from '../../atomics/CButton/CButton';

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePagination = (
    prevPagination: TablePagination,
    page: number
  ) => {
    // handle call api to get data
    console.log(prevPagination, currentPage);
    setCurrentPage(page);
  };
  return (
    <div className={styles.layout}>
      <div className={styles.title}>FLOW SELECTOR</div>
      <Row gutter={10}>
        <Col className={styles.option}>
          <Link to="/signin">Client Admin</Link>{' '}
        </Col>
        <Col className={styles.option}>
          <Link to="/signin">FM Access</Link>{' '}
        </Col>
      </Row>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        Modal
      </div>
      <CModal open={open} />
      <div className={styles.cus}>
        a
        <CTable
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              className: 'custom-border',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              className: 'custom-border',
            },
          ]}
          dataSource={[
            {
              key: '1',
              name: 'Mike',
              age: 32,
              address: '10 Downing Street',
            },
            {
              key: '2',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },
            {
              key: '3',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },
            {
              key: '4',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },
          ]}
          pagination={{
            pageSize: 10,
            current: currentPage,
            total: 188,
          }}
          onChangePagination={handleChangePagination}
        />
        <CButton ctype="outline" text="button" />
        <CButton ctype="primary" text="button" />
      </div>
    </div>
  );
};
