import { useState } from 'react';
import styled from 'styled-components';
import Header from '../../component/Header';
import NameBox from '../../component/NameBox';
import SmallBox from '../../component/SmallBox';

const Team = [
  {
    name: 'Finble',
    desc: '주식 관리 포트폴리오 서비스',
  },
  {
    name: 'Pre:folio',
    desc: '대학생 포트폴리오 공유 서비스',
  },
  {
    name: 'diaMEtes',
    desc: '당뇨병 환자를 위한 식단 관리 서비스',
  },
  {
    name: 'Reciepigy',
    desc: '음식 레시피 추천 서비스',
  },
  {
    name: 'Teample',
    desc: '팀플 활동을 위한 협업 플랫폼',
  },
];

const DemoVote = () => {
  const [currIndex, setCurrIndex] = useState(20);

  //link="/demo/vote"
  const clickVote = () => {};

  return (
    <>
      <Header />
      <Container>
        <Title>데모데이 투표</Title>
        <BoxContainer>
          {Team.map((i, index) => (
            <div onClick={() => setCurrIndex(index)}>
              <NameBox
                text="demo"
                teamName={i.name}
                teamDesc={i.desc}
                color={index === currIndex ? '#fff' : 'black'}
                bgColor={index === currIndex ? '#384084' : '#fff'}
              />
            </div>
          ))}
        </BoxContainer>
        <SmallBoxContainer>
          {currIndex == 20 ? (
            <Box style={{ opacity: 0.5 }} onClick={clickVote}>
              <Text> 투표하기 </Text>
            </Box>
          ) : (
            <Box style={{ opacity: 1 }} onClick={clickVote}>
              <Text>투표하기</Text>
            </Box>
          )}
        </SmallBoxContainer>
      </Container>
    </>
  );
};

export default DemoVote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Title = styled.div`
  color: #242957;
  height: 150px;
  font-size: 2.3rem;
  margin-top: -2rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  gap: 2rem;
  justify-content: center;
  padding: 0 0 6rem 0;
`;

const SmallBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px #384084 solid;
  border-radius: 1rem;
  padding: 0.5rem 2.5rem;
  background-color: #384084;
  opacity: 0.5;
  cursor: pointer;
`;
const Text = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
`;