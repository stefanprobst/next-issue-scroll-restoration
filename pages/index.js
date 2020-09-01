export default function HomePage() {
  return (
    <main>
      <h1>Scroll restoration</h1>
      <div id="top">
        <strong>Top</strong>
        <div>
          <a href="#middle">Go to middle</a>
        </div>
        <div>
          <a href="#bottom">Go to bottom</a>
        </div>
      </div>
      <div id="middle">
        <strong>Middle</strong>
        <div>
          <a href="#top">Go to top</a>
        </div>
        <div>
          <a href="#bottom">Go to bottom</a>
        </div>
      </div>
      <div id="bottom">
        <strong>Bottom</strong>
        <div>
          <a href="#top">Go to top</a>
        </div>
        <div>
          <a href="#middle">Go to middle</a>
        </div>
      </div>
      <style jsx global>
        {`
          main {
            min-height: 300vh;
            display: grid;
            grid-template-rows: 1fr repeat(3, 3fr);
          }
          div:not([id=""]) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </main>
  );
}
