type Props = {
  children: React.ReactNode
}

export const Content = (props: Props) => {
  return (
    <main id="content">
      {props.children}
    </main>
  )
}