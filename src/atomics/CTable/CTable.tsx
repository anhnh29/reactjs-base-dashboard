import { Table, TableProps } from 'antd';
import { ColumnType } from 'antd/es/table';
import clsx from 'clsx';
import { TablePagination } from '../../types';
import { PaginationCustom } from '../Pagination/PaginationCustom';
import classes from './CTable.module.scss';
interface Props<T> {
  columns: ColumnType<T>;
  dataSource: T[];
  expandable?: TableProps<T>['expandable']; // Define the expandable prop type
  onClickRow?: (record: T) => void;
  pagination?: TablePagination;
  onChangePagination?: (
    prevPagination: TablePagination,
    currentPage: number
  ) => void;
}

export const NoData = () => {
  return (
    <div className={classes.empty}>
      <div>No data</div>
    </div>
  );
};

const CTable = <T extends object>({
  columns,
  dataSource,
  onClickRow,
  onChangePagination,
  pagination,
  ...props
}: Props<T> & TableProps<T>) => {
  const handleChangePagination = (page: number) => {
    !!pagination && onChangePagination?.(pagination as TablePagination, page);
  };

  return (
    <div className={classes.container}>
      <Table
        bordered={false}
        dataSource={dataSource}
        columns={columns.map((column) => ({
          ...column,
        }))}
        scroll={{ x: 'fit-content' }}
        {...props}
        pagination={false}
        locale={{
          emptyText: () => <NoData />,
        }}
        onRow={(record) => {
          return {
            onClick: (event) => {
              event.preventDefault();
              onClickRow?.(record);
            }, // click row
          };
        }}
        className={clsx(classes.table, props.className)}
      />
      {!dataSource?.length || !pagination ? (
        <></>
      ) : (
        <PaginationCustom
          current={pagination.current}
          total={pagination.total}
          pageSize={pagination.pageSize}
          onChangePage={handleChangePagination}
        />
      )}
    </div>
  );
};

export default CTable;
