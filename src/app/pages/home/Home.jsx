import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import { articleSelectors, articleThunks } from '../../../features/article';

import Main from "./Main";
import Bookmark from "../bookmark/Bookmark";
import TopCarousel from "../../../common/components/carousel/TopCarousel";

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
  const articleCarousel = articleFetchStatus === 'fulfilled' && categories[0].templates[20].sections[0].articles;
  const articleHome = articleFetchStatus === 'fulfilled' && categories[0].templates[19].sections[0].articles;
  const articleViralDiMedsos = articleFetchStatus === 'fulfilled' && categories[0].templates[6].sections[0].articles;
  const articleWhatsHot = articleFetchStatus === 'fulfilled' && categories[1].templates[3].sections[0].articles;
  const articleHighlightToday = articleFetchStatus === 'fulfilled' && categories[2].templates[3].sections[0].articles;
  const articleLife = articleFetchStatus === 'fulfilled' && categories[3].templates[3].sections[0].articles;
  const articleRegional = articleFetchStatus === 'fulfilled' && categories[4].templates[4].sections[0].articles;
  const articleIntermezzo = articleFetchStatus === 'fulfilled' && categories[5].templates[4].sections[0].articles;
  const articleTrending = articleFetchStatus === 'fulfilled' && categories[6].templates[4].sections[0].articles;
  const articleVideos = articleFetchStatus === 'fulfilled' && categories[7].templates[4].sections[0].articles;
  const articleSciTech = articleFetchStatus === 'fulfilled' && categories[8].templates[3].sections[0].articles;
  const articleSports = articleFetchStatus === 'fulfilled' && categories[9].templates[3].sections[0].articles;
  const articleBiz = articleFetchStatus === 'fulfilled' && categories[10].templates[3].sections[0].articles;
  const articleMovie = articleFetchStatus === 'fulfilled' && categories[11].templates[4].sections[0].articles;
  const articleStory = articleFetchStatus === 'fulfilled' && categories[12].templates[11].sections[0].articles;
  const articleHobbies = articleFetchStatus === 'fulfilled' && categories[13].templates[6].sections[0].articles;
  const articleOtomotif = articleFetchStatus === 'fulfilled' && categories[14].templates[3].sections[0].articles;
  const articleParenting = articleFetchStatus === 'fulfilled' && categories[15].templates[4].sections[0].articles;
  const articleCoronaDiRi = articleFetchStatus === 'fulfilled' && categories[16].templates[2].sections[0].articles;
  const articleGames = articleFetchStatus === 'fulfilled' && categories[17].templates[4].sections[0].articles;
  const articleKataGaul = articleFetchStatus === 'fulfilled' && categories[18].templates[15].sections[0].articles;
  const articleEnglish = articleFetchStatus === 'fulfilled' && categories[19].templates[3].sections[0].articles;
  const articleMusic = articleFetchStatus === 'fulfilled' && categories[20].templates[3].sections[0].articles;
  const articleCampus = articleFetchStatus === 'fulfilled' && categories[21].templates[1].sections[0].articles;

  return (
    <>
      <Route exact path={"/"}>
        <TopCarousel articleCarousel={articleCarousel} />
        <Main articles={articleHome} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/top"}>
        <Main articles={articleViralDiMedsos} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/showbiz"}>
        <Main articles={articleWhatsHot} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/news"}>
        <Main articles={articleHighlightToday} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/life"}>
        <Main articles={articleLife} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/regional"}>
        <Main articles={articleRegional} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/intermezzo"}>
        <Main articles={articleIntermezzo} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/trending"}>
        <Main articles={articleTrending} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/videos"}>
        <Main articles={articleVideos} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/sci-tech"}>
        <Main articles={articleSciTech} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/sports"}>
        <Main articles={articleSports} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/biz"}>
        <Main articles={articleBiz} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/movie"}>
        <Main articles={articleMovie} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/story"}>
        <Main articles={articleStory} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/hobbies"}>
        <Main articles={articleHobbies} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/otomotif"}>
        <Main articles={articleOtomotif} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/parenting"}>
        <Main articles={articleParenting} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/corona-di-ri"}>
        <Main articles={articleCoronaDiRi} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/games"}>
        <Main articles={articleGames} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/kata-gaul"}>
        <Main articles={articleKataGaul} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/english"}>
        <Main articles={articleEnglish} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/music"}>
        <Main articles={articleMusic} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path={"/campus"}>
        <Main articles={articleCampus} dataBookmark={dataBookmark} addBookmark={handleBookmark}/>
      </Route>
      <Route exact path="/bookmark">
        <Bookmark dataBookmark={dataBookmark} addBookmark={handleBookmark} />
      </Route>
    </>
  )
}

export default Home
