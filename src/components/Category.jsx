import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../styles/category.css";
import React from "react";

function Category() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice className="choose" />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <FaHamburger className="choose" />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles className="choose" />
        <h4 className="thai">Thai</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 2rem;
  a {
    text-decoration: none;
  }

  h4 {
    color: #ffffe0;
  }
  .thai {
    margin-left: 30px;
  }
`;

export default Category;
