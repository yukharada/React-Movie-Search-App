import './App.css'

function App() {

  const defaultMovieList = [
    {
      id: 1,
      name: "君の名は",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg",
      overview: "1,000年に1度のすい星来訪が、1か月後に迫る日本。山々に囲まれた田舎町に住む女子高生の三葉は、町長である父の選挙運動や、家系の神社の風習などに鬱屈（うっくつ）していた。それゆえに都会への憧れを強く持っていたが、ある日彼女は自分が都会に暮らしている少年になった夢を見る。夢では東京での生活を楽しみながらも、その不思議な感覚に困惑する三葉。一方、東京在住の男子高校生・瀧も自分が田舎町に生活する少女になった夢を見る。やがて、その奇妙な夢を通じて彼らは引き合うようになっていくが……。"
    },
    {
      id: 2,
      name: "劇場版「鬼滅の刃」無限列車編 ",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8OGrD5t6swQFmoZ1pGL2YJa277P.jpg",
      overview: "蝶屋敷での修業を終えた炭治郎たちは、次なる任務の地、《無限列車》に到着する。 そこでは、短期間のうちに四十人以上もの人が行方不明になっているという。 禰豆子を連れた炭治郎と善逸、伊之助の一行は、 鬼殺隊最強の剣士である《柱》のひとり、炎柱の煉獄杏寿郎と合流し、 闇を往く《無限列車》の中で、鬼と立ち向かうのだった。",
    },
    {
      id: 3,
      name: "国宝",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/bPuH9nB995PE3P9j4sTanWsxfUW.jpg",
      overview: "後に国の宝となる男は、任侠の一門に生まれた。抗争で父を亡くした喜久雄（吉沢亮）は、上方歌舞伎の名門の当主・花井半二郎（渡辺謙）に引き取られ、歌舞伎の世界へ飛び込む。そこで、半二郎の実の息子として、生まれながらに将来を約束された御曹司・俊介（横浜流星）と出会う。正反対の血筋を受け継ぎ、生い立ちも才能も異なる2人は、ライバルとして互いに高め合い、芸に青春を捧げるが、多くの出会いと別れが運命の歯車を狂わせていく……。",
    },
    {
      id: 4,
      name: "クレヨンしんちゃん 嵐を呼ぶモーレツ！オトナ帝国の逆襲",
      image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dUBxeDBAtr8kSIDDPD86aWqmHFr.jpg",
      overview: "埼玉県春日部に突如出現したテーマパーク“20世紀博”。そこでは、しんのすけの父ひろしや母みさえが育った1970年代の暮らしが再現されていて、いつしか大人たちは、子どもそっちのけでノスタルジックな世界に魅了されていく。やがて、ついに大人たちが20世紀博の会場から戻ってこない異常事態に発展、しんちゃんと仲間たち“カスカベ防衛隊”は、パークを仕切る秘密結社“イエスタデイ・ワンスモア”に立ち向かう。",
    },
  ]

  return (
    <div>
      {defaultMovieList.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <img src={movie.image} />
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default App
