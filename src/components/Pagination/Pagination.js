import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class Pagination extends Component {
  isInFirstPage () {
    return this.props.currentPage === 1
  }
  isInLastPage () {
    if (this.props.totalPages === 0) {
      return true
    }
    return this.props.currentPage === this.props.totalPages
  }
  startPage () {
    // When on the first page
    if (this.props.currentPage === 1) {
      return 1
    }
    // When on the last page
    if (this.props.totalPages < this.props.maxVisibleButtons) {
      return 1
    }
    if (this.props.currentPage === this.props.totalPages) {
      return this.props.totalPages - this.props.maxVisibleButtons + 1
    }
    // When in between
    return this.props.currentPage - 1
  }
  endPage () {
    if (this.props.totalPages === 0) {
      return 1
    }
    if (this.props.totalPages < this.props.maxVisibleButtons) {
      return this.props.totalPages
    }
    return Math.min(this.startPage() + this.props.maxVisibleButtons - 1, this.props.totalPages)
  }

  onClickFirstPage = () => {
    if (this.isInFirstPage()) {
      return false
    }
    this.props.onPageChanged(1)
  }
  onClickPreviousPage = () => {
    if (this.isInFirstPage()) {
      return false
    }
    this.props.onPageChanged(this.props.currentPage - 1)
  }
  onClickPage = (page) => {
    this.props.onPageChanged(page)
  }
  onClickNextPage = () => {
    if (this.isInLastPage()) {
      return false
    }
    this.props.onPageChanged(this.props.currentPage + 1)
  }
  onClickLastPage = () => {
    if (this.isInLastPage()) {
      return false
    }
    this.props.onPageChanged(this.props.totalPages)
  }
  isPageActive (page) {
    return this.props.currentPage === page
  }
  render() {
    var pages = []
    for (let i = this.startPage(); i <= this.endPage(); i++) {
      pages.push(
        <li key={i} className="pagination-item">
          <button onClick={ () => { this.onClickPage(i) } } className={ this.isPageActive(i) ? 'active': '' }>{ i }</button>
        </li>
      )
    }
    return (
      <ul className="pagination">
        <li className="pagination-item">
          <button onClick={ () => this.onClickFirstPage() } className={ this.isInFirstPage() ? 'disabled': '' } disabled={ this.isInFirstPage() }>First</button>
        </li>
        <li className="pagination-item">
          <button onClick={ () => this.onClickPreviousPage() } className={ this.isInFirstPage() ? 'disabled': '' } disabled={ this.isInFirstPage() }>«</button>
        </li>
        { pages }
        <li className="pagination-item">
          <button onClick={ () => this.onClickNextPage() } className={ this.isInLastPage() ? 'disabled':'' } disabled={ this.isInLastPage() }>»</button>
        </li>
        <li className="pagination-item">
          <button onClick={ () => this.onClickLastPage() } className={ this.isInLastPage() ? 'disabled':'' } disabled={ this.isInLastPage() }>Last</button>
        </li>
      </ul>
    )
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  maxVisibleButtons: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
