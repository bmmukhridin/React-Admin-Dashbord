import React from "react";
import "./widggets.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

function Widgets({ type }) {
  let data;
const amaount = 100

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        icon: <PersonOutlineOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See All Orders",
        icon: <ShoppingCartOutlinedIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View Net Erarnings",
        icon: <MonetizationOnOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCES",
        isMoney: true,
        link: "See All Balance",
        icon: <AccountBalanceOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{"$" && data.isMoney} {amaount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positiv">
          <ArrowUpwardOutlinedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;
