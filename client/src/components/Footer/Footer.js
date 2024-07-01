import { SmileOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      height: '80px',
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      backgroundColor: '#001529',
      color: '#fff'
    }}>
      <p> HIMEDIA <SmileOutlined /> </p>
    </div>
  );
}

export default Footer;