import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import { articleSelectors, articleThunks } from '../../../features/article';

import Main from "./Main";
import Bookmark from "../bookmark/Bookmark";

const Home = () => {
  const dispatch = useDispatch();

  const [dataBookmark, setDataBookmark] = useState([]);
  const getArray = JSON.parse(localStorage.getItem('dataBookmark') || '0');

  const updateDataBookmark = () => {
    if (getArray !== 0) {
      setDataBookmark([...getArray])
    }
  }

  const handleBookmark = (article, id) => {
    let array = dataBookmark;
    let addArray = true;
    array.map((item, key) => {
      if (item === id) {
        array.splice(key, 1);
        addArray = false;
      }
      return true
    });
    if (addArray) {
      array.push(id);
    }
    setDataBookmark([...array]);
    localStorage.setItem("dataBookmark", JSON.stringify(dataBookmark));


    const storage = localStorage.getItem(`bookmarkItem${id}`)
    if (storage == null) {
      localStorage.setItem(`bookmarkItem${id}`, JSON.stringify(article))
    } else {
      localStorage.removeItem(`bookmarkItem${id}`)
    }
  }

  useEffect(() => {
    dispatch(articleThunks.fetchArticleData());
    updateDataBookmark();
  }, [dispatch])

  const categories = useSelector(articleSelectors.selectCategories);
  const articleFetchStatus = useSelector(articleSelectors.selectArticleFetchStatus);
  const articleViralDiMedsos = articleFetchStatus === 'fulfilled' && categories[0].templates[6].sections[0].articles
  const articleWhatsHot = articleFetchStatus === 'fulfilled' && categories[1].templates[3].sections[0].articles

  return (
    <>
      <Route exact path={"/"}>
        <Main articles={articleViralDiMedsos} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/top"}>
        <Main articles={articleViralDiMedsos} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/showbiz"}>
        <Main articles={articleWhatsHot} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path="/bookmark">
        <Bookmark dataBookmark={dataBookmark} addBookmark={handleBookmark} />
      </Route>
    </>
  )
}

export default Home
