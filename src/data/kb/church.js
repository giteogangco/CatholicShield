/** Knowledge base — The Pope, the Church & authority. Entry shape: see scripture.js */

const LG = 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html'

export default [
  {
    id: 'peter-rock',
    cat: 'pope',
    q: 'Peter is not the rock. Jesus is the rock, and the papacy is not in the Bible.',
    kw: ['peter the rock', 'peter is not the rock', 'upon this rock', 'matthew 16:18', 'petros petra', 'keys of the kingdom', 'papacy', 'pope not in the bible', 'first pope', 'peter primacy', 'si pedro ang bato', 'bato', 'primacy of peter'],
    a: `Jesus spoke Aramaic. He renamed Simon "Kepha," which means "rock" (John 1:42). Paul calls him "Cephas" (1 Corinthians 1:12; Galatians 2:9). So Jesus' words were "You are Kepha, and on this kepha I will build my Church." In Greek, "petra" (rock) is feminine, so Matthew wrote the masculine form "Petros" for a man's name. The meaning is the same. Many Protestant scholars, such as Oscar Cullmann, agree that Peter is the rock.

Jesus also gives Peter the "keys of the kingdom." This echoes Isaiah 22:22, where the king's chief steward receives the key to the house. That office had authority, and it passed to successors.

Jesus is the foundation and cornerstone in other senses. Scripture uses images flexibly: the apostles are also called foundations (Ephesians 2:20).

Peter is always named first among the apostles. He is called "first" (Matthew 10:2). He is charged to strengthen his brothers (Luke 22:32) and to feed Christ's sheep (John 21:15-17). He leads the Church in Acts 1, 2, 10 and 15.`,
    bible: [
      ['Matthew 16:18-19', '"You are Peter (Rock), and on this rock I will build my Church… I will give you the keys."'],
      ['John 1:42', '"You shall be called Cephas" (which means Peter/Rock).'],
      ['Isaiah 22:20-22', 'The key of the house of David given to the royal steward — an office with succession.'],
      ['Luke 22:31-32', '"I have prayed for you that your faith may not fail… strengthen your brothers."'],
      ['John 21:15-17', '"Feed my lambs… tend my sheep."'],
      ['Matthew 10:2', '"The names of the twelve apostles: first, Simon, who is called Peter…"'],
    ],
    ccc: [552, 553, 881, 882],
    fathers: [
      ['St. Cyprian of Carthage', 'On the Unity of the Church 4 (c. 251 AD)', 'Summary: the Lord built his Church on Peter, and gave primacy to Peter so that the Church may be shown to be one.'],
      ['Tertullian', 'On Modesty 21 (c. 220 AD)', 'Summary: Tertullian, though critical of the bishop of Rome, records that the keys were given to Peter personally.'],
    ],
    docs: [
      ['First Vatican Council, Pastor Aeternus (1870)', 'Chapter 1: the institution of apostolic primacy in Peter.', 'https://www.papalencyclicals.net/councils/ecum20.htm'],
      ['Lumen Gentium (Vatican II, 1964)', 'Sections 18–22.', LG],
    ],
    say: '"Jesus spoke Aramaic. He called Simon \'Kepha\' (rock) and said \'on this kepha I will build my Church.\' Then he gave him the keys, the sign of an office with successors (Isaiah 22:22)."',
    rel: ['papal-infallibility', 'peter-in-rome', 'apostolic-succession'],
  },
  {
    id: 'papal-infallibility',
    cat: 'pope',
    legacy: 'pope infallible',
    q: 'The Pope is not infallible. He is just a man who sins and makes mistakes.',
    kw: ['infallible', 'infallibility', 'pope infallible', 'pope is just a man', 'pope sins', 'pope makes mistakes', 'pope is sinner', 'bad popes', 'evil popes', 'borgia', 'ex cathedra', 'dili masayop', 'hindi nagkakamali'],
    a: `Infallibility does NOT mean the pope is sinless (that would be "impeccability"). It does not mean everything he says is correct either. It is a narrow gift. The Holy Spirit protects the pope from error only when he solemnly defines a doctrine of faith or morals for the whole Church, as successor of Peter. This is called speaking "ex cathedra." It has been clearly used only a handful of times, for example in 1854 and 1950. Bishops teaching together with the pope, as in an ecumenical council, also share in this gift.

Bad popes actually prove the point. Some popes lived scandalous lives, yet none of them ever defined a heresy as dogma. God has protected the teaching despite the man. Scripture shows the same pattern: Peter denied Christ, yet he wrote inspired letters. Even the wicked high priest Caiaphas prophesied truly "because he was high priest that year" (John 11:51).

If God could make sinful men write the infallible Bible, he can keep a sinful man from leading the Church into error.`,
    bible: [
      ['Matthew 16:18-19', 'The gates of hell shall not prevail; what you bind on earth is bound in heaven.'],
      ['Luke 22:32', '"I have prayed for you that your faith may not fail."'],
      ['John 11:49-52', 'Caiaphas prophesies truly by virtue of his office, despite his sin.'],
      ['John 16:13', 'The Spirit will guide you into all truth.'],
      ['Matthew 28:20', '"I am with you always, to the end of the age."'],
    ],
    ccc: [888, 889, 890, 891, 892],
    fathers: [
      ['St. Irenaeus of Lyons', 'Against Heresies 3.3.2 (c. 180 AD)', 'Summary: every church must agree with Rome because of its preeminent authority, where the apostolic tradition has been preserved.'],
    ],
    docs: [
      ['First Vatican Council, Pastor Aeternus (1870)', 'Chapter 4: the infallible teaching authority of the Roman Pontiff, and its limits.', 'https://www.papalencyclicals.net/councils/ecum20.htm'],
      ['Lumen Gentium (Vatican II, 1964)', 'Section 25.', LG],
    ],
    say: '"Infallible doesn\'t mean sinless. Peter sinned, yet God used him to write Scripture without error. God protects the Church\'s solemn teaching, not the pope\'s personal life."',
    rel: ['peter-rock', 'clergy-scandal'],
  },
  {
    id: 'peter-in-rome',
    cat: 'pope',
    q: 'Peter was never in Rome and was never a bishop of Rome.',
    kw: ['peter never in rome', 'peter in rome', 'was peter in rome', 'peter bishop of rome', 'peter tomb', 'bones of peter', 'babylon 1 peter'],
    a: `The evidence that Peter lived, led and died in Rome is early and comes from many places:
• Peter sends greetings from "Babylon" (1 Peter 5:13). This was a common early Christian code name for Rome (compare Revelation 17-18).
• Around 96 AD, Clement of Rome writes about Peter's and Paul's martyrdoms as recent examples.
• Around 107 AD, Ignatius writes to the Romans: "I do not command you as Peter and Paul did."
• Around 180 AD, Irenaeus lists the bishops of Rome in order, starting from the Church "founded by Peter and Paul."
• Around 200 AD, the Roman presbyter Gaius points to the "trophies" (tombs) of the apostles on the Vatican Hill and the Ostian Way.

Excavations under St. Peter's Basilica in the 1940s found a 1st- and 2nd-century shrine over a grave, with ancient graffiti invoking Peter. No other city in history ever claimed Peter's tomb.`,
    bible: [
      ['1 Peter 5:13', '"She who is at Babylon, chosen together with you, sends you greetings."'],
      ['John 21:18-19', 'Jesus foretells the death by which Peter would glorify God.'],
    ],
    ccc: [834, 882],
    fathers: [
      ['St. Clement of Rome', 'Letter to the Corinthians 5 (c. 96 AD)', 'Summary: holds up Peter and Paul, who suffered martyrdom, as examples from "our own generation."'],
      ['St. Ignatius of Antioch', 'Letter to the Romans 4 (c. 107 AD)', '"I do not command you, as Peter and Paul did."'],
      ['St. Irenaeus of Lyons', 'Against Heresies 3.3.2–3 (c. 180 AD)', 'Summary: the Church at Rome was founded by Peter and Paul, who handed the office of bishop to Linus; he then lists the succession.'],
      ['Eusebius', 'Church History 2.25 (c. 325 AD)', 'Summary: quotes Gaius (c. 200 AD), who could show the trophies of the apostles on the Vatican and the Ostian Way.'],
    ],
    docs: [],
    say: '"Every early witness, from Clement in 96 AD to Irenaeus, puts Peter\'s martyrdom in Rome. No other city has ever claimed his tomb."',
    rel: ['peter-rock', 'apostolic-succession'],
  },
  {
    id: 'apostolic-succession',
    cat: 'pope',
    legacy: 'apostolic succession',
    q: 'Apostolic succession is not in the Bible. The apostles had no successors.',
    kw: ['apostolic succession', 'successors of the apostles', 'bishops', 'bishop', 'apostles had no successors', 'ordination', 'laying on of hands', 'sunod sa apostoles'],
    a: `The first thing the apostles did after the Ascension was replace Judas. Peter quotes Psalm 109: "Let another take his office" ("episkopen," which means overseership, or bishopric). After that, the apostles laid hands on men like Timothy and Titus. They ordained elders "in every town" and told them in turn to pass on what they received to faithful men.

Around 96 AD, St. Clement wrote that the apostles appointed bishops and deacons. He said they also "gave instructions that, if they should fall asleep, other approved men should succeed them in their ministry." Around 180 AD, St. Irenaeus said you could find the true faith by tracing any church's list of bishops back to the apostles.

Today's Catholic bishops, and the Orthodox bishops, stand in that unbroken line.`,
    bible: [
      ['Acts 1:20-26', '"Let another take his office (episkopen)" — Matthias replaces Judas.'],
      ['2 Timothy 2:2', 'Entrust what you heard from me to faithful men who will teach others.'],
      ['Titus 1:5', 'Appoint elders in every town as I directed you.'],
      ['1 Timothy 4:14; 5:22', 'The gift given by the laying on of hands; do not be hasty in laying on hands.'],
      ['Acts 14:23', 'They appointed elders for them in every church.'],
    ],
    ccc: [77, 861, 862, 1087, 1576],
    fathers: [
      ['St. Clement of Rome', 'Letter to the Corinthians 42–44 (c. 96 AD)', 'Summary: the apostles appointed bishops and deacons and gave instructions that other approved men should succeed them in their ministry.'],
      ['St. Irenaeus of Lyons', 'Against Heresies 3.3.1 (c. 180 AD)', 'Summary: we can list those whom the apostles appointed bishops, and their successors down to our own day.'],
    ],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Section 20: bishops as successors of the apostles.', LG],
    ],
    say: '"The apostles\' first act after the Ascension was to fill Judas\' \'office\' (Acts 1:20). Then Paul told Timothy to pass the faith on to others who would teach others (2 Tim 2:2)."',
    rel: ['peter-rock', 'ministerial-priesthood', 'church-fathers'],
  },
  {
    id: 'constantine-founded',
    cat: 'history',
    q: 'The Catholic Church was founded by Constantine in 313 or 325 AD, not by Jesus.',
    kw: ['constantine', 'founded by constantine', 'church started 325', 'nicaea created', 'roman empire church', 'catholic church founded', 'when was the catholic church founded', 'who founded the catholic church', 'gitukod ni constantino', 'itinatag ni constantino'],
    a: `Constantine's Edict of Milan (313) only made Christianity LEGAL. It ended the persecutions. He founded no Church, defined no doctrine, and did not become pope. The Council of Nicaea (325) was called to settle the Arian heresy about Christ's divinity. The bishops who came were already leading a Church with sacraments, bishops and a creed. Some of them bore scars from persecution.

The term "Catholic Church" appears around 107 AD in St. Ignatius of Antioch, more than 200 years before Constantine. Around 96 AD, the bishop of Rome (Clement) was already correcting the church in Corinth. Irenaeus could list Rome's bishops back to Peter by 180 AD.

The Church Jesus founded on Peter (Matthew 16:18) is the same Church that has existed continuously ever since.`,
    bible: [
      ['Matthew 16:18', '"I will build my Church, and the gates of hell shall not prevail against it."'],
      ['Matthew 28:20', '"I am with you always, to the close of the age."'],
    ],
    ccc: [763, 765, 830, 831],
    fathers: [
      ['St. Ignatius of Antioch', 'Letter to the Smyrnaeans 8 (c. 107 AD)', '"Wherever Jesus Christ is, there is the Catholic Church."'],
      ['Martyrdom of Polycarp', 'Greeting (c. 156 AD)', 'Summary: addressed to all the communities "of the holy and catholic Church" in every place.'],
    ],
    docs: [],
    say: '"Ignatius of Antioch used the name \'Catholic Church\' around 107 AD, two centuries before Constantine. Constantine only stopped the persecution."',
    rel: ['church-fathers', 'one-true-church', 'inc-claims'],
  },
  {
    id: 'one-true-church',
    cat: 'pope',
    q: 'It does not matter which church you belong to. All denominations are equal.',
    kw: ['which church is true', 'true church', 'one true church', 'all churches are the same', 'denomination', 'denominations', 'any church', 'non-denominational', 'why be catholic', 'why catholic', 'tinuod nga simbahan', 'tunay na simbahan'],
    a: `Jesus founded ONE Church and prayed that his followers would be one, "so that the world may believe." Paul says there is "one body… one Lord, one faith, one baptism." Division among Christians is a wound, not God's plan.

The Catholic Church teaches that the one Church of Christ "subsists in" the Catholic Church. It is governed by Peter's successor and the bishops in communion with him. It has the fullness of the means of salvation: all seven sacraments, apostolic succession and the complete deposit of faith.

The Church also recognizes that many true elements exist outside her visible boundaries. Baptized Protestants are truly brothers and sisters in Christ, "separated brethren," and the Holy Spirit works through their faith and Scripture. The invitation is to the fullness of the faith, not a rejection of what is good.`,
    bible: [
      ['John 17:20-23', '"That they may all be one… so that the world may believe."'],
      ['Ephesians 4:4-5', 'One body and one Spirit… one Lord, one faith, one baptism.'],
      ['Matthew 16:18', '"I will build my Church" — singular.'],
      ['1 Corinthians 1:10-13', '"Is Christ divided?"'],
    ],
    ccc: [811, 816, 817, 818, 819, 820, 838],
    fathers: [
      ['St. Cyprian of Carthage', 'On the Unity of the Church 6 (c. 251 AD)', '"He can no longer have God for his Father, who has not the Church for his mother."'],
    ],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Section 8: the Church of Christ subsists in the Catholic Church.', LG],
      ['Unitatis Redintegratio (Vatican II, 1964)', 'Section 3: separated brethren and the elements of sanctification outside the Church\'s visible boundaries.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19641121_unitatis-redintegratio_en.html'],
      ['Dominus Iesus (CDF, 2000)', 'Sections 16–17.', 'https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_20000806_dominus-iesus_en.html'],
    ],
    say: '"Jesus prayed that we would be one (John 17:21). I see real faith in you. The Catholic Church just offers the full inheritance: the Eucharist, the apostles\' successors, and the whole faith."',
    rel: ['outside-church-no-salvation', 'constantine-founded', 'private-interpretation'],
  },
  {
    id: 'outside-church-no-salvation',
    cat: 'salvation',
    q: '"Outside the Church there is no salvation" — so Catholics think all non-Catholics go to hell.',
    kw: ['outside the church no salvation', 'extra ecclesiam', 'non catholics go to hell', 'can protestants be saved', 'can non catholics be saved', 'muslims saved', 'other religions saved', 'invincible ignorance'],
    a: `The phrase is ancient (St. Cyprian, 3rd century). It means that all salvation comes from Christ through his Body, the Church. It does not mean that everyone who is not a visible, card-carrying Catholic is lost.

The Catechism teaches two things together. First, those who KNOW the Catholic Church was founded by Christ as necessary, and still refuse to enter or remain in it, cannot be saved. Second, those who, through no fault of their own, do not know Christ or his Church, but sincerely seek God and try to do his will as their conscience shows it, "may achieve eternal salvation." Any such person is saved by Christ's grace, not apart from it.

Only God judges hearts. The Church's job is to proclaim Christ to everyone, not to declare any individual lost.`,
    bible: [
      ['Acts 4:12', 'There is salvation in no one else, for there is no other name.'],
      ['1 Timothy 2:4', 'God desires all men to be saved and to come to the knowledge of the truth.'],
      ['Romans 2:14-16', 'Gentiles who do by nature what the law requires… conscience bears witness.'],
      ['Luke 12:47-48', 'The servant who did not know will receive a light beating — responsibility depends on knowledge.'],
    ],
    ccc: [846, 847, 848, 1260],
    fathers: [
      ['St. Cyprian of Carthage', 'Letter 73.21 (c. 256 AD)', '"Outside the Church there is no salvation."'],
    ],
    docs: [
      ['Lumen Gentium (Vatican II, 1964)', 'Sections 14–16.', LG],
    ],
    say: '"It means salvation always comes through Christ and his Church. The Church also teaches that people who, through no fault of their own, don\'t know this, but sincerely seek God, can be saved."',
    rel: ['one-true-church', 'catholics-not-christian'],
  },
  {
    id: 'pope-antichrist',
    cat: 'pope',
    q: 'The Pope is the Antichrist, "Vicarius Filii Dei" equals 666, and Rome is the Whore of Babylon.',
    kw: ['antichrist', 'pope antichrist', '666', 'mark of the beast', 'vicarius filii dei', 'whore of babylon', 'harlot', 'babylon the great', 'beast', 'revelation 17', 'anticristo'],
    a: `The Bible defines "antichrist": anyone who denies that Jesus is the Christ, denies the Father and the Son, or denies that Jesus Christ has come in the flesh (1 John 2:22; 4:2-3). Every pope has professed exactly these truths.

"Vicarius Filii Dei" ("Vicar of the Son of God") is not an official papal title, and it is not written on the papal tiara. That claim spread through anti-Catholic tracts. The pope's actual title is "Vicar of Christ." Many scholars think 666 points to "Nero Caesar." In Hebrew letters, that name adds up to 666. Some ancient manuscripts even read 616, which matches the Latin spelling.

The "Babylon" of Revelation 17 is "drunk with the blood of the saints and the martyrs of Jesus." It is a city seated on seven hills and ruling the kings of the earth. That describes pagan imperial Rome, which killed Peter, Paul and thousands of Christians. It does not describe the Church those martyrs belonged to.`,
    bible: [
      ['1 John 2:22', 'Who is the liar but he who denies that Jesus is the Christ? This is the antichrist.'],
      ['1 John 4:2-3', 'Every spirit that does not confess Jesus is not of God; this is the spirit of the antichrist.'],
      ['Revelation 13:18', 'The number of the beast is the number of a man: 666.'],
      ['Revelation 17:6, 18', 'The woman drunk with the blood of the martyrs; the great city ruling over the kings of the earth.'],
    ],
    ccc: [675, 676, 677],
    fathers: [
      ['St. Irenaeus of Lyons', 'Against Heresies 5.30.1 (c. 180 AD)', 'Summary: notes that some copies read 616 instead of 666 and warns against confident speculation about the name.'],
    ],
    docs: [],
    say: '"John defines antichrist as one who denies that Jesus came in the flesh (1 John 4:3). Every pope confesses that. And \'Babylon\' killed the martyrs. It wasn\'t the Church the martyrs died for."',
    rel: ['peter-rock', 'sabbath-sunday'],
  },
  {
    id: 'clergy-scandal',
    cat: 'pope',
    q: 'The sex abuse scandals prove the Catholic Church is corrupt and false.',
    kw: ['abuse', 'sex abuse', 'abuse scandal', 'pedophile priests', 'priests abuse', 'cover up', 'corrupt church', 'sinful priests', 'hypocrite priests', 'pari makasala'],
    a: `Begin with honesty and compassion. The abuse of children by clergy, and the cover-ups by some bishops, are grave crimes and sins. Jesus' sternest warning is for those who harm little ones. Victims deserve justice, support and our prayers.

But the sins of members do not disprove the truth of the faith. One of the Twelve chosen by Jesus himself was Judas. Jesus said the weeds would grow among the wheat until the harvest. The Church is holy because Christ, her Head, is holy and her teaching and sacraments are holy. She is also made of sinners and "always in need of purification."

The Church has made serious reforms. They include the U.S. bishops' Charter for the Protection of Children (2002), mandatory reporting under Pope Francis' Vos Estis Lux Mundi (2019, updated 2023), background checks and safe-environment training. The right response is to fight for holiness and justice, not to leave Jesus.`,
    bible: [
      ['Matthew 18:6', 'Whoever causes one of these little ones to sin, better a millstone around his neck.'],
      ['John 6:70', '"Did I not choose you, the Twelve, and one of you is a devil?"'],
      ['Matthew 13:24-30', 'The wheat and the weeds grow together until the harvest.'],
      ['John 6:68', '"Lord, to whom shall we go? You have the words of eternal life."'],
    ],
    ccc: [823, 825, 827],
    fathers: [],
    docs: [
      ['Vos Estis Lux Mundi (Pope Francis, 2019)', 'Mandatory procedures for reporting abuse and cover-ups.', 'https://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190507_vos-estis-lux-mundi.html'],
      ['Lumen Gentium (Vatican II, 1964)', 'Section 8: the Church, holy and always in need of purification.', LG],
    ],
    say: '"These crimes are horrifying, and victims deserve justice. But Judas betrayed Jesus, and the apostles didn\'t abandon Christ because of him. I don\'t follow priests. I follow Jesus in his Church."',
    rel: ['papal-infallibility', 'ministerial-priesthood'],
  },
  {
    id: 'church-wealth',
    cat: 'pope',
    q: 'The Vatican is extremely rich. If the Church loved the poor, it would sell everything.',
    kw: ['vatican rich', 'church is rich', 'church wealth', 'gold vatican', 'sell the vatican', 'church money', 'collection money', 'rich church', 'adunahan ang simbahan', 'mayaman ang simbahan'],
    a: `The Catholic Church runs one of the largest charitable networks in the world. It includes hospitals, schools, orphanages, leprosariums and relief agencies such as Caritas. Much of this work happens in the poorest places on earth.

Most "Vatican wealth" is art, historic buildings and libraries. These belong to the whole world's heritage, are expensive to maintain, and cannot really be sold. If they were sold, they would end up in private collections, and the money would feed the poor only once. Beauty offered to God and open to everyone is itself a gift to the poor.

When Mary anointed Jesus with costly perfume, Judas objected that it could have been sold for the poor. John notes that Judas did not actually care about the poor (John 12:4-6). This does not excuse any financial misconduct, which the Church must correct.`,
    bible: [
      ['John 12:3-8', 'Judas complains that the costly perfume poured on Jesus should have been sold for the poor.'],
      ['Matthew 25:35-40', '"I was hungry and you gave me food."'],
      ['1 Chronicles 29:1-5', 'David gives gold and silver for the beauty of God\'s house.'],
    ],
    ccc: [2443, 2444, 2447, 2449],
    fathers: [],
    docs: [],
    say: '"The Church runs countless hospitals and schools for the poor worldwide. Selling the Sistine Chapel would put it in a rich man\'s house and feed the poor for one day."',
    rel: ['clergy-scandal'],
  },
]
