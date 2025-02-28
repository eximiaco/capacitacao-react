import * as S from './styles';

type Props = {
  children: React.ReactNode
}

export const Content = (props: Props) => {
  return (
    <S.Content>
      {props.children}
    </S.Content>
  )
}