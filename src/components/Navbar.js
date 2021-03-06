import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';

const StyledNav = styled.div`
  display: flex !important;
  padding: 29px 3rem;
  background-color: white !important;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledBrand = styled.a`
  color: #0290ff !important;
  width: 240px;
  height: 37px;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const StyledLink = styled.a`
  font-weight: bold;
  color: #121212;
  margin-left: 4em;
  width: 59px;
  height: 16px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.9px;
`;

const StyledOval = styled.i`
  display: inline-block;
  border-radius: 16px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.7em 0.7em;
  position: relative;
  right: -700px;
  color: #0290ff !important;
`;

const NavBar = ({ filterCategory }) => {
  const handleFilterChange = event => {
    event.preventDefault();
    filterCategory(event.target.value);
  };
  return (
    <StyledNav>
      <StyledBrand>Bookstore CMS</StyledBrand>
      <StyledLink>BOOKS</StyledLink>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <i>
        <StyledOval
          className="fa fa-user"
          StyledLink="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </i>
    </StyledNav>
  );
};

NavBar.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filterCategory: option => dispatch(changeFilter(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
