import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPaginationArray } from './utils';

interface PaginationControlProps {
    currentPageIndex: number;
    totalPages: number;
    onChangePage: (newPage: number) => void;
}

const Ellipses = () => (
    <div className="pagination-divider">
        <span>...</span>
    </div>
);

const PageNumber = ({ page, onPageClick, active }: { page: number; onPageClick: (page: number) => void; active: boolean }) => (
    <div className={`pagination-button${active ? '_active' : ''}`} onClick={() => onPageClick(page - 1)}>
        <span>{page}</span>
    </div>
);

const PaginationControl = ({ currentPageIndex, totalPages, onChangePage }: PaginationControlProps): JSX.Element => {
    const pages = createPaginationArray(currentPageIndex + 1, totalPages);

    return (
        <div className="pagination">
            {currentPageIndex > 0 && (
                <FontAwesomeIcon icon="long-arrow-alt-left" className="pagination-icon" onClick={() => onChangePage(currentPageIndex - 1)} />
            )}

            {pages.map((page, index) => (
                <Fragment key={index}>
                    {!page ? <Ellipses /> : <PageNumber page={page} onPageClick={onChangePage} active={currentPageIndex + 1 === page} />}
                </Fragment>
            ))}

            {currentPageIndex < totalPages - 1 && (
                <FontAwesomeIcon icon="long-arrow-alt-right" className="pagination-icon" onClick={() => onChangePage(currentPageIndex + 1)} />
            )}
        </div>
    );
};

export default PaginationControl;
