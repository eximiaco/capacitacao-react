import { Content } from "./Content"
import { Header } from "./Header"
import "./style.css";

type Props = {
  children : React.ReactNode
}
export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Content>
        {props.children}
      </Content>
    </>
  )
}