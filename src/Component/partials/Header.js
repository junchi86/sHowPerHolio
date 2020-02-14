import React, { useEffect, useState, useRef } from "react";
import { Menu, Icon } from "antd";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import "antd/dist/antd.css";

const DDiv = styled.div`
  position: fixed;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0);
  transition: 0.7s all;
  .back {
    width: 100%;
    font-family: "Romanesco";
    height: 50px;
    font-size: 24px;
    display: flex;
    line-height: 50px;
    max-width: 1460px;
    margin: auto;
    color: white;
    text-align: center;
    ul {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
    .ulone {
      li {
        padding: 0 15px;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .logo {
      justify-content: center;
      width: 100%;
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 0.1em;
      cursor: default;
    }
    .ultwo {
      justify-content: flex-end;
      li {
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    .back {
      color: black;
      transition: 0.5s;
    }
    .logo {
      color: black;
      transition: 0.5s;
    }
  }
`;

function Header() {
  const prevScrollY = useRef(70);
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState]);

  return (
    <>
      <DDiv style={scrollState ? { background: "white" } : {}}>
        <div className="back">
          <ul className="ulone" style={scrollState ? { color: "black" } : {}}>
            <li>NEW</li>
            <li>SHOP</li>
            <li>JOURNAL</li>
            <li>COLLECTIONS</li>
            <li>EVENTS</li>
          </ul>
          <div className="logo" style={scrollState ? { color: "black" } : {}}>
            Cherry Coke
          </div>
          <ul className="ultwo" style={scrollState ? { color: "black" } : {}}>
            <li>HELP</li>
            <li>
              <Icon type="search" />
            </li>
            <li>
              <Icon type="shopping-cart" />
            </li>
            <li>
              <Icon type="smile" />
            </li>
          </ul>
        </div>
      </DDiv>
    </>
  );
}

export default Header;
