import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlinedIcon />
            Home
        </div>
        <iframe className="video" src="https://www.youtube.com/embed/FzWG8jiw4XM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
    );
}
