import { Button, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../LandingPage/Section/MainImage';
import ImageList from './ImageList';
import MovieInfo from './MovieInfo';


const Detail = () => {
  const navigate = useNavigate()
  const { movieId } = useParams()
  // console.log('movieId >>', movieId)

  //// [state] ============================================
  const [Movie, setMovie] = useState({})
  const [Casts, setCasts] = useState([])
  const [ActorToggle, setActorToggle] = useState(false)
  const [Crews, setCrews] = useState([])
  const [CrewsToggle, setCrewsToggle] = useState(false)


  useEffect(() => {
    console.log('페이지가 로드되면, 실행됩니다!')

    //// [특정 영화 정보] URL
    // https://api.themoviedb.org/3/movie/11?api_key=API_KEY
    let endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`
    //console.log(endpointInfo)

    //// [출연진] URL
    // https://api.themoviedb.org/3/movie/movie_id/credits?api_key=API_KEY
    let endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`
    //console.log(endpointCrew)

    //// [특정 영화 정보] 영화 아이디로 정보 요청
    fetch(endpointInfo)
      .then(response => response.json())
      .then(obj => {
        //console.log(obj)
        setMovie(obj)
      })

    //// [출연진] 영화 배우 정보 요청
    fetch(endpointCrew)
      .then(response => response.json())
      .then(obj => {
        // console.log(obj)
        setCasts(obj.cast)
        setCrews(obj.crew)
        // console.log(obj.crew)
      })

  }, []);

  //// 버튼 핸들러 ========================================
  function toggleActorView() {
    // console.log('버튼 클릭!!!')
    setActorToggle(!ActorToggle)
    // console.log('ActorToggle >>', ActorToggle)
  }

  function toggleCrewsView() {
    console.log('버튼 클릭!!!')
    setCrewsToggle(!CrewsToggle)
    console.log('CrewsToggle >>', CrewsToggle)
  }

  return (
    <>
      {/* Header */}
      {Movie &&
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
          title={Movie.title}
          overview={Movie.overview}
        />
      }

      {/* 영화 목록 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Button onClick={() => navigate(-1)}>영화 목록</Button>
      </div>

      {/* Body */}
      <div style={{ width: '85%', margin: '20px auto' }}>
        {/* Movie Info */}
        <MovieInfo movie={Movie} />

        <br />

        {/* Actors Grid */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <Button
            onClick={toggleActorView}
            style={{ marginRight: '20px' }}
            type={ActorToggle ? 'primary' : 'dashed'}
          >배우 목록</Button>
          <Button
            onClick={toggleCrewsView}
            type={CrewsToggle ? 'primary' : 'dashed'}
          >제작진 목록</Button>
        </div>

        {ActorToggle &&
          <>
            <Divider
            // dashed
            // orientation='left'
            // orientationMargin={250}
            // style={{ borderColor: '#f00' }}
            >
              배우 목록</Divider>
            <ImageList targets={Casts} />
          </>
        }
        {CrewsToggle &&
          <>
            <Divider>제작진 목록</Divider>
            <ImageList targets={Crews} />
          </>
        }

      </div>

    </>
  )
}

export default Detail