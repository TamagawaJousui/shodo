import "./App.css";
import description_color from "./assets/description_color.webp";
import description_touch from "./assets/description_touch.webp";
import exhibition_1 from "./assets/exhibition_1.webp";
import exhibition_2 from "./assets/exhibition_2.webp";
import exhibition_3 from "./assets/exhibition_3.webp";
import making_1 from "./assets/making_1.webp";
import making_2 from "./assets/making_2.webp";
import making_3 from "./assets/making_3.webp";
import making_4 from "./assets/making_4.webp";

function App() {
  return (
    <>
      {/* hero pic */}
      <div className="relative">
        <div className="-z-10 flex h-screen w-full bg-[url('/hero_banner_mobile.webp')] bg-cover bg-center brightness-[0.8] sm:bg-[url('/hero_banner.webp')]" />
        <div className="absolute left-0 top-0 z-10 flex size-full flex-col items-center justify-end sm:justify-center">
          <div className="text-shadow mb-16 flex w-full flex-col gap-6 text-center  text-primary  sm:mb-0">
            <div className="text-[4rem]">書動</div>
            <div className="text-[2rem]">Trajectory of Handwriting</div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mx-10 max-w-screen-2xl sm:mx-14">
          {/* description */}
          <div className="page-content  mt-24">
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
            className=" mt-24 aspect-video w-[stretch] rounded-xl"
            src="https://www.youtube.com/embed/_RrR8aV4kN4"
            title="YouTube video player"
            allow="picture-in-picture"
            allowFullScreen
          />
          {/* visual */}
          <div className=" mt-24 text-center text-4xl">視覚</div>
          <div className=" mt-14 flex flex-col gap-8 md:flex-row">
            <div className="w-full md:flex md:flex-[45%] md:flex-col md:items-center md:justify-center">
              <img
                src={description_color}
                alt="description_color"
                className="fade-edges  rounded-xl"
              />
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
          {/* auditory */}
          <div className=" mt-24 text-center text-4xl">聴覚</div>
          <div className=" mt-14 flex flex-col gap-8 md:flex-row">
            <div className="w-full md:flex md:flex-[45%] md:flex-col md:items-center md:justify-center">
              <iframe
                className="aspect-video w-[stretch] rounded-xl"
                src="https://www.youtube.com/embed/zN-Z_V6UUe0"
                title="YouTube video player"
                allow="picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="page-content md:flex-[55%]">
              <p>続いて、書き手の筆運びを音で表現したものです。</p>
              <p>
                書き手自身が筆を運ぶ過程の感覚を、力強い起筆や終筆は和太鼓の音で、流れるような運筆は波の音で再現しました。
              </p>
              <p>
                筆の動きが生む強弱や間の取り方が音で表現されることで、書き手の呼吸に寄り添うような没入感が生まれます。
              </p>
              <p>
                音を通じて、視覚では捉えきれない微妙なリズムや筆の躍動感を感じ取ることができ、書き手の動きをより立体的に捉えられます。
              </p>
            </div>
          </div>
          {/* tactile */}
          <div className=" mt-24 text-center text-4xl">触覚</div>
          <div className=" mt-14 flex flex-col gap-16">
            <div className="page-content">
              <p>
                そして、こちらは筆が進む方向と速度を触覚で表現したものです。
              </p>
              <p>
                筆の進む方向に応じて天板が傾き、その傾きの大きさで速度を体感できる仕組みになっています。鑑賞者はこれを触ることで、筆運びの感覚を直接味わうことができます。
              </p>
              <p>
                書き手の筆運びを、時間と空間を超えて「今ここ」で共有することで、書き手の存在が生き生きと想起され、まるで同じ空間で創作の瞬間を分かち合っているかのような体験を得ることができます。
              </p>
            </div>
            <div className="w-full">
              <img
                src={description_touch}
                alt="description_touch"
                className="rounded-xl"
              />
            </div>
          </div>
          {/* summary */}
          <div className="page-content  mt-24">
            <p>
              本作品は、書道を長年学び続けてきたメンバーが、書道の鑑賞体験を変えたいという思いから制作したものです。
            </p>
            <p>
              書き手の身体的コンテクストは筆意として作品に残されているにもかかわらず、私たちはしばしばそれを見落とし、表面的な字形に注目してしまいます。しかし、書き手が辿った軌跡を同じリズムで追体験することで、その動きに驚きや共感を覚えることができます。
            </p>
            <p>
              現代社会では、多様なコンテンツに溢れ、一目で理解できる結果を求めがちですが、過程の価値を知るためには、時間をかけてその過程を読み解く姿勢が大切なのではないでしょうか。
            </p>
          </div>
          {/* exhibition */}
          <div className=" mt-24 text-center text-4xl">展示</div>
          <div className=" mt-4 flex flex-col items-center whitespace-pre-wrap text-xl">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
              <span>東京大学制作展 2024</span>
              <span> 付いて離れて</span>
            </div>
            <span className="mt-2 w-fit sm:mt-0">11.7 - 11.11</span>
          </div>
          <div className=" mt-14 flex flex-col gap-12 drop-shadow-2xl">
            <img src={exhibition_1} alt="exhibition_1" className="rounded-xl" />
            <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
              <img
                src={exhibition_2}
                alt="exhibition_2"
                className="rounded-xl object-contain md:w-1/4"
              />
              <img
                src={exhibition_3}
                alt="exhibition_3"
                className="rounded-xl object-contain md:w-[68%]"
              />
            </div>
          </div>
          {/* making */}
          <div className=" mt-24 text-center text-4xl">制作</div>
          <div className=" mt-14 flex flex-col gap-12 drop-shadow-2xl">
            <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
              <img
                src={making_1}
                alt="making_1"
                className="rounded-xl object-contain md:w-[73%]"
              />
              <img
                src={making_2}
                alt="making_2"
                className="rounded-xl object-contain  md:w-[23%]"
              />
            </div>
            <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
              <img
                src={making_3}
                alt="making_3"
                className="rounded-3xl object-contain md:w-[26%]"
              />
              <img
                src={making_4}
                alt="making_4"
                className="rounded-xl object-contain md:w-[69.5%]"
              />
            </div>
          </div>
          {/* members */}
          <div className=" mt-24 text-center text-4xl">メンバー</div>
          <div className=" mt-8 flex flex-col items-center justify-center gap-2 text-xl">
            <div className="member">
              <span>小西優多郎</span>
              <span>
                東京大学大学院学際情報学府
                <br className="block md:hidden" /> 修士課程1年
              </span>
            </div>
            <div className="member">
              <span>田中祐玖</span>
              <span>
                東京大学大学院学際情報学府
                <br className="block md:hidden" /> 修士課程1年
              </span>
            </div>
            <div className="member">
              <span>都築あい</span>
              <span>
                東京大学大学院情報理工学系
                <br className="block md:hidden" /> 修士課程1年
              </span>
            </div>
            <div className="member">
              <span>Xi Jingfan</span>
              <span>
                東京大学大学院情報理工学系
                <br className="block md:hidden" /> 修士課程1年
              </span>
            </div>
          </div>
          {/* spacer */}
          <div className=" mt-20 text-center text-4xl" />
          {/* footer */}
          <div className=" border-t border-black pb-16 pt-10 text-center font-copyright text-sm">
            Copyright ©︎ 2024 Trajectory of Handwriting.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
