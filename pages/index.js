import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <h1>Receive positive and supportive human written messages</h1>
      <p>we all need a little support</p>
      <iframe src="https://wecandoit.substack.com/embed" width="480" height="320" style={{border: '1px solid #EEE', background:'white'}} frameBorder="0" scrolling="no"></iframe>
      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          margin: 0;
        }
        p {
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}
