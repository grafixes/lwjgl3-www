export default {
  videoContainer: {
    position: 'relative',
    backgroundColor: '#1b2426',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  videoOverlay: {
    position: 'absolute',
    background: 'rgba(0,0,0,.5) url(//d2g0ezo1t7nqa0.cloudfront.net/img/pattern.png)',
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0
  },
  video: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 0,
    objectFit: 'cover'
  },
  logo: {
    position: 'absolute',
    width: '50%',
    left: '50%',
    marginLeft: '-25%',
    top: '50%',
    transform: 'translateY(-50%)',
    '@media (max-width: 600px)': {
      marginLeft: '-40%',
      width: '80%'
    },
  },
  intro: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '0 2rem',
    color: 'white',
    lineHeight: '1rem',
    fontWeight: 300
  },
  introTitle: {
    '@media (max-width: 600px)': {
      fontSize: '1.4rem'
    },
    '@media (max-width: 400px)': {
      fontSize: '1.1rem'
    }
  },
  introText: {
    '@media (max-width: 600px)': {
      fontSize: '.9rem'
    }
  }
};