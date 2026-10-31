/** Knowledge base — Church history; Catholic practices & devotions. Entry shape: see scripture.js */

const MEMORY = 'https://www.vatican.va/roman_curia/congregations/cfaith/cti_documents/rc_con_cfaith_doc_20000307_memory-reconc-itc_en.html'

export default [
  {
    id: 'inquisition',
    cat: 'history',
    legacy: 'inquisition',
    q: 'The Inquisition killed millions. That proves the Catholic Church is evil.',
    kw: ['inquisition', 'spanish inquisition', 'church killed millions', 'torture', 'burned at the stake', 'heretics burned', 'inkisisyon'],
    a: `Be honest: real injustices and cruelty happened in the inquisitions. The Church has repented of them publicly. On the "Day of Pardon" (March 12, 2000), Pope John Paul II asked forgiveness for the use of "methods of intolerance and even of violence in the service of truth."

But the popular picture is a myth. Modern historians, including non-Catholics, have studied the actual trial records. They estimate the Spanish Inquisition executed a few thousand people over roughly 350 years, not "millions." That is still each one a grave wrong. The Spanish Inquisition was largely under the control of the Spanish Crown. In an age when civil courts everywhere used torture and execution freely, its procedures were often more regulated than those of secular courts.

Most importantly, the sins of Catholics contradict Catholic teaching. They do not express it. Jesus said, "Love your enemies," and the Church today firmly teaches religious freedom (Dignitatis Humanae, 1965).`,
    bible: [
      ['Matthew 5:44', 'Love your enemies and pray for those who persecute you.'],
      ['Matthew 13:24-30', 'The weeds and the wheat in the same field.'],
      ['1 John 1:8-9', 'If we say we have no sin we deceive ourselves; if we confess, he is faithful to forgive.'],
    ],
    ccc: [827, 1782, 2104, 2106],
    fathers: [],
    docs: [
      ['Memory and Reconciliation (International Theological Commission, 2000)', 'The Church and the faults of the past.', MEMORY],
      ['Dignitatis Humanae (Vatican II, 1965)', 'Declaration on Religious Freedom.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decl_19651207_dignitatis-humanae_en.html'],
    ],
    say: '"Real wrongs were done, and the Church has publicly asked forgiveness. But historians count a few thousand deaths over centuries, not millions. And those sins went against what Jesus taught."',
    rel: ['crusades', 'science-faith', 'clergy-scandal'],
  },
  {
    id: 'crusades',
    cat: 'history',
    q: 'The Crusades were an unprovoked Catholic war of aggression against peaceful Muslims.',
    kw: ['crusades', 'crusade', 'holy war', 'church wars', 'krusada', 'religious wars'],
    a: `The Crusades must be understood in their context. From the 7th century, Muslim armies had conquered the Christian lands of the Holy Land, Syria, Egypt, North Africa and Spain. In 1071, the Seljuk Turks crushed the Byzantine army at Manzikert. Pilgrims faced violence. In 1095, the Byzantine emperor Alexios I asked the West for help, and Pope Urban II called the First Crusade in response.

That said, crusaders committed real atrocities. Examples are the massacre at Jerusalem in 1099, attacks on Jews in Europe, and the sack of Christian Constantinople in 1204, which Pope Innocent III condemned. Pope John Paul II expressed sorrow for the 1204 sack to the Orthodox in 2001.

The fair summary is this: the Crusades were mostly defensive in their origin. They were carried out by sinful men, sometimes terribly. Judge them by their context, and judge their crimes as crimes.`,
    bible: [
      ['John 18:36', '"My kingship is not of this world."'],
      ['Romans 12:21', 'Do not be overcome by evil, but overcome evil with good.'],
    ],
    ccc: [2307, 2308, 2309, 2313],
    fathers: [],
    docs: [
      ['Memory and Reconciliation (International Theological Commission, 2000)', 'On the Church\'s acknowledgment of past faults.', MEMORY],
    ],
    say: '"The Crusades began as a response to centuries of conquest and a plea for help from Eastern Christians. Real atrocities happened, and the Church has acknowledged them."',
    rel: ['inquisition'],
  },
  {
    id: 'pope-joan',
    cat: 'history',
    q: 'There was once a female pope, Pope Joan, and the Church covered it up.',
    kw: ['pope joan', 'female pope', 'woman pope', 'papess'],
    a: `Pope Joan is a medieval legend, not history. The story first appears in the 13th century, about 400 years after she supposedly reigned in the 850s. No contemporary source mentions her. The papal succession of that period is well documented, and there is no gap to fit her in.

Ironically, the legend was carefully debunked in the 17th century by the Protestant historian David Blondel, a Calvinist with every motive to believe it.`,
    bible: [
      ['1 Timothy 4:7', 'Have nothing to do with godless and silly myths.'],
    ],
    ccc: [],
    fathers: [],
    docs: [],
    say: '"The story first appears 400 years later, and a Protestant historian, David Blondel, disproved it in the 1600s."',
    rel: ['papal-infallibility', 'peter-in-rome'],
  },
  {
    id: 'pagan-origins',
    cat: 'history',
    q: 'Catholicism is just paganism with Christian names, from Babylon and the "Two Babylons."',
    kw: ['pagan', 'paganism', 'pagan origins', 'two babylons', 'hislop', 'babylon mystery religion', 'pagan practices', 'christianized paganism', 'pagano'],
    a: `Most of this claim traces back to Alexander Hislop's book "The Two Babylons" (1858). Historians consider its "evidence" fabricated or badly misused. Ralph Woodrow, a Protestant author who had popularized Hislop's ideas in "Babylon Mystery Religion," later investigated them. He withdrew his book and wrote a correction, "The Babylon Connection?" (1997).

Similar outward forms do not prove a shared origin. Pagans also prayed, sang, built temples, used water and offered sacrifice. So did Israel, at God's command. Incense, candles, vestments and altars come from the Old Testament worship God himself designed, and they appear in Revelation's picture of heaven.

Paul himself used the Athenians' altar "to an unknown God" as a starting point for preaching Christ (Acts 17:22-28). Taking something good from a culture and directing it to the true God is not compromise. It is evangelization.`,
    bible: [
      ['Exodus 30:1-8', 'God commands an altar of incense in the tabernacle.'],
      ['Revelation 8:3-4', 'Incense and the prayers of the saints rise before God.'],
      ['Acts 17:22-28', 'Paul at the Areopagus starts from the Athenians\' own altar and poets.'],
    ],
    ccc: [843, 1149, 1150],
    fathers: [],
    docs: [],
    say: '"That theory comes mostly from one 1858 book whose evidence historians reject. Even a Protestant writer who spread it later retracted it. Incense, altars and candles come from the Bible."',
    rel: ['christmas-pagan', 'statues-idolatry'],
  },
  {
    id: 'christmas-pagan',
    cat: 'practices',
    q: 'Christmas and Easter are pagan holidays (Saturnalia, Sol Invictus, Ishtar).',
    kw: ['christmas pagan', 'easter pagan', 'saturnalia', 'sol invictus', 'december 25', 'ishtar', 'easter bunny', 'christmas tree', 'pasko', 'pasko ng pagkabuhay'],
    a: `Easter is Christian "Pascha," the Passover of Christ. In most languages its name comes from the Hebrew word "Pesach" (Passover), as in "Pasko" or "Pascua." Only English and German use a name possibly linked to an old spring festival, according to St. Bede. The Ishtar connection is a modern internet myth. The date is tied to the Jewish Passover, when Jesus died and rose.

For Christmas, Christians were proposing December 25 as early as the 3rd century. One view held that Jesus was conceived on the same date he later died (March 25), which puts his birth nine months later. The "Sol Invictus" festival on December 25 was established by Emperor Aurelian in 274. It may even have been a pagan reaction to the Christian date. Scholars still debate the details.

Either way, the feast celebrates the real birth of Christ. If Christians "baptized" a winter season by celebrating the true Light of the world, that is a triumph of the Gospel, not paganism.`,
    bible: [
      ['1 Corinthians 5:7', 'Christ, our Paschal Lamb, has been sacrificed.'],
      ['John 1:9', 'The true light that enlightens every man was coming into the world.'],
      ['Romans 14:5-6', 'He who observes the day, observes it in honor of the Lord.'],
      ['Luke 2:10-11', 'I bring you good news of great joy… to you is born this day a Savior.'],
    ],
    ccc: [525, 526, 638, 1169, 1171],
    fathers: [],
    docs: [],
    say: '"In Filipino it\'s \'Pasko\', from Pascha, the Passover. We\'re celebrating Christ\'s birth and resurrection. Whatever the calendar history, that\'s the opposite of paganism."',
    rel: ['pagan-origins', 'sabbath-sunday'],
  },
  {
    id: 'catholics-not-christian',
    cat: 'other',
    q: 'Catholics are not Christians.',
    kw: ['catholics not christian', 'catholics are not christians', 'is catholic christian', 'catholic vs christian', 'christian or catholic', 'are catholics christian', 'dili kristiyano ang katoliko', 'hindi kristiyano ang katoliko'],
    a: `"Christian" means a follower of Christ. The disciples were first called Christians at Antioch (Acts 11:26). Within a few decades, St. Ignatius, the bishop of that same city of Antioch, became the first writer known to use the name "the Catholic Church."

Catholics profess every core truth of Christianity in the Nicene Creed. We believe in the Trinity; Jesus' divinity, death and Resurrection; salvation through Christ alone; and his Second Coming. In fact, the Catholic Church is the Church that preserved the Bible, defined the Trinity, and compiled the New Testament canon that all Christians use. Catholicism is not a branch off Christianity. It is the trunk.`,
    bible: [
      ['Acts 11:26', 'In Antioch the disciples were for the first time called Christians.'],
      ['1 John 4:2', 'Every spirit which confesses that Jesus Christ has come in the flesh is of God.'],
      ['Romans 10:9', 'If you confess with your lips that Jesus is Lord and believe God raised him, you will be saved.'],
    ],
    ccc: [185, 186, 194, 195, 830],
    fathers: [
      ['St. Ignatius of Antioch', 'Letter to the Smyrnaeans 8 (c. 107 AD)', '"Wherever Jesus Christ is, there is the Catholic Church."'],
    ],
    docs: [],
    say: '"I believe everything in the Creed: Jesus is Lord, God, Savior, crucified and risen. The disciples were first called Christians in Antioch, and Antioch\'s bishop first called it the Catholic Church."',
    rel: ['constantine-founded', 'earn-salvation', 'one-true-church'],
  },
  {
    id: 'rosary',
    cat: 'practices',
    q: 'The Rosary is "vain repetition" (Matthew 6:7), and the Hail Mary is unbiblical.',
    kw: ['rosary', 'vain repetition', 'vain repetitions', 'matthew 6:7', 'hail mary', 'repetitive prayer', 'babbling', 'rosaryo', 'santo rosaryo', 'aba ginoong maria'],
    a: `Jesus condemned "babbling" like the pagans. That meant heaping up empty words to manipulate the gods, thinking they would be heard for their many words. He did not condemn repetition itself. In Gethsemane, Jesus prayed "the same words" three times (Matthew 26:44). Psalm 136 repeats "for his steadfast love endures forever" 26 times. In heaven, the angels "never cease to say, 'Holy, holy, holy'" (Revelation 4:8).

The first half of the Hail Mary comes straight from Scripture. It joins the angel's greeting (Luke 1:28) with Elizabeth's words (Luke 1:42). The second half asks Mary to pray for us.

The Rosary is a meditation on the Gospel. While the lips pray, the heart contemplates 20 mysteries of Jesus' life, from the Annunciation to the Resurrection. It has been called "the Gospel on beads."`,
    bible: [
      ['Matthew 6:7', 'Do not heap up empty phrases as the Gentiles do.'],
      ['Matthew 26:44', 'He prayed for the third time, saying the same words.'],
      ['Psalm 136', '"His steadfast love endures forever," repeated 26 times.'],
      ['Revelation 4:8', 'Day and night they never cease to sing, "Holy, holy, holy."'],
      ['Luke 1:28, 42', 'The Scriptural words of the Hail Mary.'],
    ],
    ccc: [2667, 2668, 2676, 2677, 2678, 2708],
    fathers: [],
    docs: [
      ['Rosarium Virginis Mariae (John Paul II, 2002)', 'Apostolic letter on the Rosary; introduced the Luminous Mysteries.', 'https://www.vatican.va/content/john-paul-ii/en/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html'],
    ],
    say: '"Jesus himself prayed \'the same words\' three times in Gethsemane (Matt 26:44). The Rosary is meditating on his life, and half the Hail Mary is straight from Luke 1."',
    rel: ['worship-mary', 'one-mediator'],
  },
  {
    id: 'sacramentals',
    cat: 'practices',
    q: 'Holy water, the sign of the cross, medals and scapulars are superstition and magic.',
    kw: ['holy water', 'sign of the cross', 'medals', 'medal', 'scapular', 'blessed objects', 'sacramentals', 'amulet', 'anting-anting', 'agua bendita', 'krus sa noo', 'ashes on forehead', 'ash wednesday'],
    a: `These are "sacramentals": signs blessed by the Church that prepare us to receive grace and remind us of God. They are NOT magic. They work only through prayer and faith in God, never automatically. The Catechism condemns superstition, including treating religious objects as charms ("anting-anting").

The Bible is full of physical signs used by God:
• The sign on the forehead: In Ezekiel 9:4, God's faithful are marked with a "tav," which in ancient script was shaped like a cross. In Revelation, God's servants are sealed on their foreheads.
• Water: Naaman was healed by washing in the Jordan. Jesus healed a blind man with mud and the pool of Siloam.
• Ashes: Sackcloth and ashes were a sign of repentance (Jonah 3:6; Daniel 9:3; Matthew 11:21).

Christians have traced the sign of the cross on their foreheads since at least the 2nd century.`,
    bible: [
      ['Ezekiel 9:4', 'Put a mark (tav) on the foreheads of those who sigh over the abominations.'],
      ['Revelation 7:3', 'Until we have sealed the servants of our God on their foreheads.'],
      ['2 Kings 5:10-14', 'Naaman washes in the Jordan and is healed.'],
      ['John 9:6-7', 'Jesus anoints the blind man\'s eyes with mud: "Wash in the pool of Siloam."'],
      ['Jonah 3:6; Matthew 11:21', 'Repentance in sackcloth and ashes.'],
    ],
    ccc: [1667, 1668, 1670, 1677, 2111, 2157],
    fathers: [
      ['Tertullian', 'The Crown 3 (c. 211 AD)', 'Summary: at every step and movement, coming in and going out, Christians trace the sign of the cross on their foreheads.'],
    ],
    docs: [
      ['Directory on Popular Piety and the Liturgy (Vatican, 2001)', 'On the proper use of sacramentals.', 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-directorio_en.html'],
    ],
    say: '"They\'re reminders and prayers, not magic. Treating them like charms is condemned as superstition. God used water, mud and a mark on the forehead in the Bible too."',
    rel: ['nazareno-devotion', 'relics', 'fasting'],
  },
  {
    id: 'fasting',
    cat: 'practices',
    q: 'Lent, fasting and no meat on Fridays are man-made rules. 1 Timothy 4:3 condemns abstaining from foods.',
    kw: ['lent', 'fasting', 'fast', 'no meat on friday', 'abstinence', 'abstain from meat', 'meat on fridays', '1 timothy 4:3', 'kwaresma', 'kuwaresma', 'pag-ayuno', 'ayuno'],
    a: `Jesus said "WHEN you fast," not "if." He fasted forty days in the desert and said his disciples would fast once the Bridegroom was taken away. The early Church fasted before major decisions (Acts 13:2-3; 14:23). Lent's forty days unite us with Jesus' forty days.

1 Timothy 4:3 condemns false teachers who forbade certain foods because they considered them EVIL in themselves. Catholics teach that meat is good. Giving up something good as an offering to God is exactly why it is a sacrifice. Friday is chosen because Jesus died on a Friday.

Fasting rules are Church disciplines, so the Church can adjust them. For example, they apply to adults within certain ages, and a sick person is excused. Their purpose is freedom: mastering our appetites so we can pray more and give to the poor (almsgiving).`,
    bible: [
      ['Matthew 6:16-18', '"When you fast…"'],
      ['Matthew 9:15', 'The days will come when the bridegroom is taken away, and then they will fast.'],
      ['Matthew 4:1-2', 'Jesus fasts forty days and forty nights.'],
      ['Acts 13:2-3', 'While they were worshiping the Lord and fasting…'],
      ['Joel 2:12', 'Return to me with all your heart, with fasting, with weeping.'],
    ],
    ccc: [538, 540, 1434, 1438, 2043],
    fathers: [
      ['Didache 8', '(c. 70–100 AD)', 'Summary: Christians are to fast on Wednesdays and Fridays.'],
    ],
    docs: [
      ['Code of Canon Law (1983)', 'Canons 1249–1253: penitential days, fasting and abstinence.', 'https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html'],
      ['Paenitemini (Paul VI, 1966)', 'Apostolic constitution on penance.'],
    ],
    say: '"Jesus said \'WHEN you fast\' (Matt 6:16). We don\'t think meat is evil. We give up something good on the day Jesus gave up his life."',
    rel: ['sacramentals', 'tradition-manmade'],
  },
  {
    id: 'incense-candles',
    cat: 'practices',
    q: 'Incense, candles, vestments and rituals are empty show. Worship should be simple, "in spirit and truth."',
    kw: ['incense', 'candles', 'candle', 'vestments', 'rituals', 'ritual', 'liturgy', 'smells and bells', 'why so many rituals', 'spirit and truth', 'john 4:24', 'kandila', 'insenso', 'kamanyang'],
    a: `Worship "in spirit and truth" (John 4:24) means worship given through the Holy Spirit and centered on Jesus, who is the Truth. Jesus said this in answer to the question of WHERE to worship (Jerusalem or Mount Gerizim). He was not banning visible signs. We are body and soul, and God made us to worship with both.

God himself designed rich liturgy in the Old Testament. He commanded the altar of incense, the golden lampstand with its lamps, and the priestly vestments, made "for glory and for beauty" (Exodus 28:2). Revelation, the Bible's picture of HEAVEN's worship, has the same features. It shows an altar, lampstands, incense rising with the prayers of the saints, elders in white robes, and repeated sung prayers.

Every Catholic sign has a meaning. Candles show Christ the Light of the world. Incense is our prayer rising to God (Psalm 141:2). Vestments hide the man and show the office of Christ. Ritual is not empty when the heart is in it. It is love with a shape.`,
    bible: [
      ['Exodus 28:2', 'Make holy garments for Aaron, for glory and for beauty.'],
      ['Exodus 30:7-8', 'Aaron shall burn fragrant incense every morning.'],
      ['Psalm 141:2', 'Let my prayer be counted as incense before you.'],
      ['Revelation 8:3-4', 'The smoke of the incense rose with the prayers of the saints.'],
      ['Revelation 1:12-13', 'Seven golden lampstands, and one like a son of man clothed in a long robe.'],
      ['Malachi 1:11', 'In every place incense is offered to my name, and a pure offering.'],
    ],
    ccc: [1145, 1146, 1148, 1149, 1150, 1154, 1161],
    fathers: [],
    docs: [
      ['Sacrosanctum Concilium (Vatican II, 1963)', 'Sections 7, 8 and 122–124: the liturgy as a foretaste of the heavenly liturgy; sacred art.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html'],
    ],
    say: '"God himself designed incense, lamps and vestments for worship (Exodus 28-30), and Revelation shows them in heaven. We worship with our whole selves, body and soul."',
    rel: ['pagan-origins', 'mass-sacrifice', 'sacramentals'],
  },
  {
    id: 'crucifix',
    cat: 'practices',
    q: 'Why do Catholics keep Jesus on the cross? He is risen. Protestants use an empty cross.',
    kw: ['crucifix', 'jesus still on the cross', 'empty cross', 'why crucifix', 'krusipiho', 'jesus on the cross'],
    a: `Catholics rejoice in the Resurrection. Easter is the greatest feast of the year. But we also follow Paul, who "decided to know nothing among you except Jesus Christ and him crucified." He preached "Christ crucified" and boasted only "in the cross of our Lord Jesus Christ." He even reminded the Galatians that Christ had been "publicly portrayed as crucified" before their eyes.

The crucifix shows the price of our salvation and the depth of God's love. It is not a claim that Jesus is still dying. A crucifix and the joy of Easter belong together: no Resurrection without the Cross.`,
    bible: [
      ['1 Corinthians 1:23', 'We preach Christ crucified.'],
      ['1 Corinthians 2:2', 'I decided to know nothing among you except Jesus Christ and him crucified.'],
      ['Galatians 3:1', 'Jesus Christ was publicly portrayed as crucified before your eyes.'],
      ['Galatians 6:14', 'Far be it from me to boast except in the cross of our Lord Jesus Christ.'],
    ],
    ccc: [601, 616, 618],
    fathers: [],
    docs: [],
    say: '"We know he\'s risen! But like Paul, we preach \'Christ crucified\' (1 Cor 1:23). The crucifix shows how much he loved us."',
    rel: ['mass-sacrifice', 'statues-idolatry'],
  },
]
