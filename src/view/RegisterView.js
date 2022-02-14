import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDictionary, createDictionaryFB } from "../redux/modules/dictionary";

const RegisterView = () => {
  const navigate = useNavigate();
  const wordRef = useRef();
  const descRef = useRef();
  const exampleRef = useRef();
  const dispatch = useDispatch();

  const dictionaries = useSelector(state => state.dictionary.dictionaries)

  console.log(dictionaries)

  const addDic = () => {
    dispatch(createDictionaryFB({
      word: wordRef.current.value,
      desc: descRef.current.value,
      example: exampleRef.current.value,
    }));
    navigate(-1);
  }
  return (
    <>
      <p>단어 추가하기</p>

      <div>
        <div>단어</div>
        <input ref={wordRef}/>
      </div>
      <div>
        <div>설명</div>
        <input ref={descRef}/>
      </div>
      <div>
        <div>예시</div>
        <input ref={exampleRef}/>
      </div>

      <button onClick={addDic}>추가하기</button>
    </>
  );
};

export default RegisterView;