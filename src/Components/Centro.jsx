import './Centro.css'
import Header from "./Header";
import VideoCarousel from "./card2/VideoCarousel";
import Footer from "./footer";
import Home from "./home";

const netflixVideos = [
  {
    id: 1,
    title: "Netflix Video 1",
    url: "https://www.youtube.com/watch?v=-xKJYmebCUw"
  },
  {
    id: 2,
    title: "Netflix Video 2",
    url: "https://www.youtube.com/watch?v=ZFf68rbEvWM"
  },
  {
    id: 3,
    title: "Netflix Video 3",
    url: "https://www.youtube.com/watch?v=3k3btpA0j8I"
  },
  // Más videos...
];

const trendingNowVideos = [
  {
    id: 1,
    title: "Trending Video 1",
    url: "https://www.youtube.com/watch?v=f3Kz-fLBp54"
  },
  {
    id: 2,
    title: "Trending Video 2",
    url: "https://www.youtube.com/watch?v=SO_W-2vb7yg"
  },
  // Más videos...
];

const topRatedVideos = [
  {
    id: 1,
    title: "Top Rated Video 1",
    url: "https://www.youtube.com/watch?v=u_23qtOCVgY"
  },
  // Más videos...
];

function Center() {
  return (
    <div className="app">
      <Header />
      <Home />
      <div className="content">
        <VideoCarousel title="Popular en Netflix" videosData={netflixVideos} />
        <VideoCarousel title="Trending Now" videosData={trendingNowVideos} />
        <VideoCarousel title="Top Rated" videosData={topRatedVideos} />
      </div>
      <Footer />
    </div>
  );
}

export default Center;
