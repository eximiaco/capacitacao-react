import { styled } from "@mui/material";
import { NavLink } from "react-router";

export const Header = styled('header')({
  backgroundColor: '#fff',
  borderBottom: 'solid 2px #e9e9e9', 
  padding: 20
})

export const Logo = styled('h2')({
  fontSize: 22,
  borderRight: 'solid 1px #f1f1f1',
  paddingRight: 16
})

export const Content = styled('main')({
  padding: 32,
  maxEidth: 1280, 
  width: '100%',
  margin: 'auto',
});

export const Link = styled(NavLink)({
  backgroundColor: '#fff', 
  border: 'solid 1px #e9e9e9',
  borderRadius: 4,
  fontWeight: 600,
  fontSize: '0.9rem',
  cursor: 'pointer',
  padding: '0.5rem 1rem',

  '&:hover, &.active': {
    backgroundColor: '#3566c1',
    color: '#fff',
  }
})
