import React from 'react'
import { useParams } from 'react-router'

const FullDetail = () => {
  const { detail } = useParams();
  console.log(detail === 'mirage');
  return (
    <div className='bg-black'>

      {detail !== 'mirage' ? <div className='max-w-5xl p-2 mx-auto'>
        <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}><iframe src="https://cdn.jwplayer.com/players/NF5bTwAb-NE1adRJ5.html" width="100%" height="100%" frameBorder="0" title="Nightcrawler.2014.1080p.bluray.x264.yify" style={{ position: 'absolute' }} allowFullScreen></iframe></div>

      </div> : <div className='max-w-5xl p-2 mx-auto'>
        <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '56.25%' }}><iframe src="https://cdn.jwplayer.com/players/6OySPS4x-NE1adRJ5.html" width="100%" height="100%" frameBorder="0" title="Nightcrawler.2014.1080p.bluray.x264.yify" style={{ position: 'absolute' }} allowFullScreen></iframe></div>

      </div>}

    </div>
  )
}

export default FullDetail