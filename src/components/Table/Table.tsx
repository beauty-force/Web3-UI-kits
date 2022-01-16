import React, { useState, useEffect } from 'react';
import { TableProps } from '.';
import { paginate } from './Helper';
import {
    Divider,
    PaginationTag,
    TableGrid,
    TableParent,
    Pagination,
    PaginationText,
    NoData,
} from './Table.styles';

const Table: React.FC<TableProps> = ({
    columnsConfig,
    header,
    data,
    pageSize,
    maxPages,
    noPagination,
    customPageNumber,
    onPageNumberChanged,
}) => {
    const [pageNum, setPageNum] = useState<number>(
        customPageNumber ? customPageNumber : 0,
    );

    useEffect(() => {
        if (typeof onPageNumberChanged != 'undefined') {
            onPageNumberChanged(pageNum);
        }
    }, [pageNum]);

    useEffect(() => {
        handleSetPageNumber(customPageNumber ? customPageNumber : 0);
    }, [customPageNumber]);

    const handleSetPageNumber = (state: number): void => {
        if (typeof customPageNumber == 'number') {
            setPageNum(customPageNumber);
        } else {
            setPageNum(state);
        }
    };

    const computeCurrentData = (): string[] | React.ReactNode[] => {
        if (noPagination) {
            return data;
        }
        const from = pageNum * pageSize;
        const to = from + pageSize;
        return data?.slice(from, to);
    };

    const handlePrev = (): void => {
        if (pageNum != 0) {
            handleSetPageNumber(pageNum - 1);
        }
    };

    const handleNext = (): void => {
        if (pageNum + 1 < Math.ceil(data?.length / pageSize)) {
            handleSetPageNumber(pageNum + 1);
        }
    };

    const RenderTableHeader = (): JSX.Element => {
        return (
            <>
                {header.map((col, key) => (
                    <div key={`header_${key}`} role="table-header">
                        {col}
                    </div>
                ))}
                <Divider />
            </>
        );
    };

    const RenderTable = (): JSX.Element => {
        if (computeCurrentData().length == 0) {
            return <NoData>No Data</NoData>;
        }
        return (
            <>
                {computeCurrentData().map((row, rowKey) => (
                    <React.Fragment key={`fragment_${rowKey}`}>
                        {row.map((item, colKey) => (
                            <div
                                key={`tr_${rowKey}_${colKey}`}
                                role="table-item"
                            >
                                {item}
                            </div>
                        ))}
                        <Divider key={`divider_${rowKey}`} />
                    </React.Fragment>
                ))}
            </>
        );
    };

    const RenderPagination = (): JSX.Element => {
        if (noPagination || data?.length == 0) {
            return <></>;
        }
        return (
            <Pagination>
                <div>
                    <PaginationText
                        isActive={pageNum != 0}
                        onClick={handlePrev}
                        data-testid="pagination-prev"
                    >
                        Prev
                    </PaginationText>
                    {paginate(data?.length, pageNum, pageSize, maxPages).map(
                        (key) => (
                            <PaginationTag
                                key={`pagination_${key}`}
                                pageNumber={key - 1}
                                currentPageNumber={pageNum}
                                onClick={() => handleSetPageNumber(key - 1)}
                                role="pagination-item"
                                data-testid={`pagination_${key - 1 == pageNum}`}
                            >
                                <span>{key}</span>
                            </PaginationTag>
                        ),
                    )}
                    <PaginationText
                        isActive={
                            pageNum + 1 < Math.ceil(data?.length / pageSize)
                        }
                        onClick={handleNext}
                        data-testid="pagination-next"
                    >
                        Next
                    </PaginationText>
                </div>
            </Pagination>
        );
    };

    return (
        <TableParent data-testid="test-table-parent">
            <TableGrid columns={columnsConfig}>
                <RenderTableHeader />
                <RenderTable />
            </TableGrid>
            <RenderPagination />
        </TableParent>
    );
};

export default Table;
