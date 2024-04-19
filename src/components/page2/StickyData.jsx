import { useNavigate } from 'react-router-dom'

const StickyData = ({ images, headings, links }) => {
  const navigate = useNavigate();
  return (
    <div className="stickyData">
      <div className="dataHeading" style={{ borderBottom: '1px solid #ccc' }}>You Might Be Interested</div>

      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="articleCard" onClick={() => { navigate(links[index]); }} style={{ textDecoration: 'none', cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
          <img src={images[index]} alt={headings[index]}/>
          <span style={{ marginLeft: '10px', color: 'black' }}>{headings[index]}</span>
        </div>
      ))}
    </div>
  );
}

export default StickyData