import { db } from "../../firebase";
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const LOAD = "dictionary/LOAD"
const CREATE = "dictionary/CREATE"
// const REMOVE = "bucket/REMOVE"
// const UPDATE = "bucket/UPDATE"

// const initialState = {
//   dictionaries: [
//     { word: "test1", desc: "desc1", example: "example1" },
//     { word: "test2", desc: "desc2", example: "example2" },
//   ]
// };

export const loadDictionary = (dictionary) => {
  return { type: LOAD, dictionary: dictionary }
}

export const createDictionary = (dictionary) => {
  return { type: CREATE, dictionary: dictionary }
}
// export const removeBucket = (bucketIndex) => {
//   return {type: REMOVE, bucketIndex: bucketIndex}
// }
// export const updateBucket = (bucketIndex) => {
//   return {type: UPDATE, bucketIndex: bucketIndex}
// }

// middleware
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionaryData = await getDocs(collection(db, "dictionary"));
    // console.log('dictionaryData : ', dictionaryData)

    let dictionaryList = [];
    dictionaryData.forEach((dic) => {
      const dicData = dic.data();
      dictionaryList.push({ id: dic.id, ...dicData })
    });

    dispatch(loadDictionary(dictionaryList))
  };
};

export const createDictionaryFB = (dic) => {
  return async function (dispatch) {
    // await addDoc(collection(db, "dictionary"), dic);
    const docRef = await addDoc(collection(db, "dictionary"), dic);
    // console.log((await getDoc(docRef)).data())
    const dicData = { id: docRef.id, ...dic };
    console.log('dicData: ',dicData)

    dispatch(createDictionary(dicData))
  }
}

// Reducer
export default function reducer(state = [], action = {}) {
  switch ( action.type ) {
    case "dictionary/LOAD":
      return { dictionaries: action.dictionary };
    case "dictionary/CREATE":
      const newDictionaryList = [ ...state.dictionaries, action.dictionary ];
      return { dictionaries: newDictionaryList };
    // case "bucket/UPDATE":
    //   const updateBucketList = state.list.map((val, idx) => {
    //     if(parseInt(action.bucketIndex) === idx) {
    //       return {...val, completed:true};
    //     } else {
    //       return val;
    //     }
    //   });
    //   return {list : updateBucketList}
    // case "bucket/REMOVE":
    //   const newList = state.list.filter((val, idx) => {
    //     return parseInt(action.bucketIndex) !== idx;
    //   });
    //   return {list: newList};
    default:
      return state;
  }
}

