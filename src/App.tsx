import "./App.css";
import description_color from "./assets/description_color.webp";

function App() {
  return (
    <>
      {/* hero pic */}
      <div className="relative">
        <div className="-z-10 flex h-screen w-screen bg-[url('/hero_banner_mobile.webp')] bg-cover bg-center brightness-[0.8] sm:bg-[url('/hero_banner.webp')]" />
        <div className="absolute left-0 top-0 z-10 flex size-full flex-col items-center justify-end sm:justify-center">
          <div className="text-shadow mb-16 flex w-full flex-col gap-6 text-center  text-primary  sm:mb-0">
            <div className="text-[4rem]">書動</div>
            <div className="text-[2rem]">Trajectory of Handwriting</div>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="page-content mx-16 mt-24">
        <p>
          本作品は、視覚、聴覚、触覚を通じて、書道の本質である「過程表現」の価値を体感できる体験型作品です。
        </p>
        <p>
          色で筆の進むスピードを視覚的に捉え、音でリズムを聴き、手で動きに触れることで、
          {"\n"}
          鑑賞者は完成形としての書作品を受動的に眺める「観察者」から、
          {"\n"}
          書き手の意図や感覚を能動的に探る「参与者」へと変化し、対話的な鑑賞体験を得ることができます。
        </p>
        <p>
          現代のソーシャルメディアは「映える」ことを最優先し、一瞬の注意（アテンション）を引きつける視覚的デザインが重視されています。書もまたその影響を受け、「上手いか下手か」で評価されがちです。しかし、書道の真価はそのプロセスにあり、筆が紙と触れ合う中で生まれる書き手の内面的な表現にこそ本質があります。本作品はその「過程表現」に焦点を当て、鑑賞者が書き手の動きを追体験し、身体感覚を通じてその表現の奥行きに触れる機会を創出します。
        </p>
        <p>
          完成形の美しさを超えた「過程の美」に光を当てた本作品は、書道が持つ本来の価値
          ―筆意や書き手の感情の流れ―
          の再発見を促し、現代の書道へのイメージに挑戦する革新的な試みとなるでしょう。
        </p>
      </div>
      {/* description video */}
      <iframe
        className="mx-16 my-24 aspect-video w-[stretch]"
        src="https://www.youtube.com/embed/_RrR8aV4kN4"
        title="YouTube video player"
        allow="picture-in-picture"
        allowFullScreen
      />
      {/* visual */}
      <div className="mx-16 my-14 text-center text-4xl">視覚</div>
      <div className="mx-16 flex flex-col gap-8 md:flex-row">
        <div className="w-full md:flex md:flex-[45%] md:flex-col md:items-center md:justify-center">
          <img src={description_color} alt="description_color" />
        </div>
        <div className="page-content md:flex-[55%]">
          <p>
            こちらは筆のスピードを色で表現したものです。
            <br />
            スピードが遅い部分は青、速くなるにつれて緑、黄、オレンジ、赤へとグラデーションで描かれています。
          </p>
          <p>
            色が速度を示していることを理解すると、視覚的な楽しさに加え、起筆から終筆までの流れを目で追うことで、書のリズムを感じ取ることができます。
          </p>
          <p>
            たとえば、書の二筆目は「トン、スー、トン」の三折法で構成されていますが、動の二筆目は「トン、スー」の二折法が用いられています。
          </p>
          <p>
            このように色から全体の動きを詳細に把握することで、書き手の表現へのこだわりや、書による表現の奥深さへの洞察が深まるでしょう。
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
