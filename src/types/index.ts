import { TablePaginationConfig } from 'antd';

export interface TablePagination extends TablePaginationConfig {
  pageSize: number;
  current: number;
  total: number;
  pageSizeOptions?: number[] | string[];
}
