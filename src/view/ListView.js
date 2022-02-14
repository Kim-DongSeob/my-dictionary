import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {loadDictionaryFB} from "../redux/modules/dictionary";


const ListView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dictionaries = useSelector(state => state.dictionary.dictionaries);
  useEffect(()=> {
    dispatch(loadDictionaryFB())
  }, [])
  return (
    <>
      <p>MY DICTIONARY</p>

      { dictionaries && dictionaries.length > 0 ? dictionaries.map((dictionary, idx) => (
        <ItemBox key={idx}>
          <ItemInnerBox>
            <Word>{ dictionary.word }</Word>
            <Content>: { dictionary.desc }</Content>
          </ItemInnerBox>
          <hr/>
          <ItemInnerBox>
            <Title>예시</Title>
            <Content>{ dictionary.example }</Content>
          </ItemInnerBox>
        </ItemBox>
      )) : <p>없어요~</p>}
      <button onClick={ () => navigate("/register") }>+</button>
    </>
  );
};

export default ListView;

const ItemBox = styled.div`
  background-color: #eee;
  margin: 10px 0;
`;
const ItemInnerBox = styled.div`
  padding: 16px;
`;
const Word = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Title = styled.div`
  font-size: 0.875px;
`;
const Content = styled.div`
  font-size: 1.25rem;
`;