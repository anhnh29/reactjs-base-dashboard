import clsx from 'clsx';
import { useState } from 'react';

interface IProps {
  pageSize: number;
  current: number;
  total: number;
  onChangePage: (page: number) => void;
}

export const PaginationCustom = (props: IProps) => {
  const { pageSize, current, total, onChangePage } = props;
  const [currentGroup, setCurrentGroup] = useState<number>(0);

  const totalPages = Math.ceil(total / pageSize);
  const visiblePageCount = 5; //total page
  const totalGroups = Math.ceil(totalPages / visiblePageCount); //total group

  const getVisiblePages = () => {
    const startPage = currentGroup * visiblePageCount + 1;
    const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup < totalGroups - 1) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onChangePage(page);
  };

  // current page
  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div></div>
      <div className="flex items-center justify-between gap-10">
        <div
          onClick={handlePrevGroup}
          className={`${currentGroup > 0 ? '' : 'invisible'}`}
        >
          <img
            src="/public/images/svg/pag-prev.svg"
            alt="prev"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2 w-44">
          {visiblePages.map((page) => (
            <div
              className={clsx(
                'w-7 h-7 flex items-center justify-center rounded-full cursor-pointer hover:bg-color-primary hover:text-white',
                {
                  'bg-color-primary text-white': current === page,
                }
              )}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </div>
          ))}
        </div>

        <div
          onClick={handleNextGroup}
          className={`${currentGroup < totalGroups - 1 ? '' : 'invisible'}`}
        >
          <img
            src="/public/images/svg/pag-next.svg"
            alt="next"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="font-semibold text-xs text-color-primary">
        Total Record(s): {total}
      </div>
    </div>
  );
};
