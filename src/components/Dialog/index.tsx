import './style.css';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  colored?: boolean
}
export const Dialog = (props: Props) => {

  if(!props.isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="content dialog-content">
        {props.children}
      </div>
    </div>
  )
}