/**
 * offlineAnswers.js
 * Local Catholic apologetics knowledge base.
 * No API key required — works fully offline.
 *
 * findOfflineAnswer(query, langCode) returns a formatted string
 * using the same emoji markers (⚡ ✅ 📖 📜 💬) as the online mode,
 * or null if no match is found.
 */

// ── Knowledge base ──────────────────────────────────────────────
// Keywords include multiple languages so localised chip text still matches.
const KB = [
  {
    keywords: [
      'worship mary', 'worshipping mary', 'worship the virgin', 'mary worship',
      'sinasamba', 'sumamba kay maria', 'nagdarasal kay maria',
      'adoran a mar', 'veneran a mar', 'adoram maria', 'adorent marie',
      'adorano maria', 'menyembah maria', 'gisimba si maria',
    ],
    answer: `⚡ Challenge: Catholics worship Mary just like they worship God.

  ✅ Answer: Catholics do NOT worship Mary. We honor (venerate) her as the greatest of all saints and the Mother of God, but worship (latria) is given to God alone. Honoring Mary is no different from honoring a great hero — it does not replace God. Mary always points us to her Son, Jesus.

  📖 Scripture: Luke 1:48 — "All generations will call me blessed." John 2:5 — Mary says, "Do whatever he tells you," directing all attention to Jesus.

  📜 Tradition: The Council of Ephesus (431 AD) declared Mary Theotokos (God-bearer) to honor Christ's divine nature, not to elevate Mary above God. St. Augustine and all early Fathers distinguished latria (worship of God) from dulia/hyperdulia (honor of saints).

  💬 Respond: "We honor Mary the way we honor a great mother — with love and respect. She is not a goddess; she is our intercessor who leads us closer to Jesus."`,
  },
  {
    keywords: [
      'pray to saints', 'praying to saints', 'saints intercession', 'dead saints', 'saints are dead',
      'rezar a los santos', 'orar a los santos', 'manalangin sa mga santo',
      'rezar aos santos', 'prier les saints', 'pregare i santi', 'berdoa kepada orang kudus',
    ],
    answer: `⚡ Challenge: Praying to saints is wrong because they are dead and only God hears prayers.

  ✅ Answer: Catholics ask saints to intercede for us — just as we ask a living friend to pray for us. Saints are not dead; they are alive in Christ (Luke 20:38). Asking a saint to pray is no different from asking a brother or sister in church to pray for you, except saints are even closer to God.

  📖 Scripture: Revelation 5:8 — the elders in heaven offer "golden bowls full of incense, which are the prayers of God's people." Revelation 8:3-4 — an angel offers the prayers of the saints before God. James 5:16 — "The prayer of a righteous person is powerful and effective."

  📜 Tradition: Origen (3rd century) and all early Christians prayed for the intercession of martyrs. The Catacomb inscriptions show Christians asking Peter, Paul, and Mary to intercede.

  💬 Respond: "We don't pray TO saints the way we pray TO God. We ask them to pray FOR us, trusting they are alive with Christ and hear our requests through Him."`,
  },
  {
    keywords: [
      'pope infallible', 'pope not infallible', 'papal infallibility', 'pope wrong',
      'papa infalible', 'papa no es infalible', 'papa infalível', 'pape infaillible',
      'papa infallibile', 'infallible ang papa', 'paus tidak infallible',
    ],
    answer: `⚡ Challenge: The Pope is not infallible — he is just a man and can make mistakes.

  ✅ Answer: Papal infallibility is very limited. It applies ONLY when the Pope speaks ex cathedra (from the chair) on matters of faith and morals for the whole Church. It has been formally invoked only twice in modern history (1854 and 1950). It does not mean every word the Pope says is perfect — only specific, solemn, official definitions are covered.

  📖 Scripture: Matthew 16:18-19 — "You are Peter, and on this rock I will build my church… I will give you the keys of the kingdom of heaven." Luke 22:32 — Jesus prays that Peter's faith "may not fail" so he can strengthen his brothers.

  📜 Tradition: Vatican I (1870) formally defined papal infallibility with very strict conditions. The early Church consistently looked to Rome for final resolution of doctrinal disputes (Irenaeus, Cyprian, Augustine).

  💬 Respond: "Infallibility is much narrower than most people think. It's about protecting the Church from official error in doctrine — not claiming the Pope is sinless or always wise in every area."`,
  },
  {
    keywords: [
      'purgatory bible', 'purgatory not in bible', 'purgatory scripture', 'purgatory unbiblical',
      'purgatorio', 'purgatório', 'purgatoire', 'purgatoryo wala sa bibliya',
      'api penyucian',
    ],
    answer: `⚡ Challenge: Purgatory is not in the Bible — it was invented by the Catholic Church.

  ✅ Answer: While the word "purgatory" isn't in the Bible, the concept clearly is. Scripture teaches a purification after death for those who are not perfectly holy, and prayers for the dead have been part of God's people from ancient times.

  📖 Scripture: 2 Maccabees 12:46 — "It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins." 1 Corinthians 3:15 — "He himself will be saved, but only as through fire." Matthew 12:32 — sins forgiven "neither in this age nor in the age to come" implies some process beyond death.

  📜 Tradition: The early Church prayed for the dead as far back as the 2nd century (Tertullian, Origen). Inscriptions in the Roman catacombs from the 1st–3rd centuries ask for mercy on the souls of the departed.

  💬 Respond: "Purgatory is simply the teaching that God's love purifies us completely before we see Him. Even many Protestants believe in a purification process — they just may call it something different."`,
  },
  {
    keywords: [
      'added books', 'deuterocanon', 'apocrypha', 'extra books bible', 'catholic bible books', 'removed books',
      'nagdagdag ng libro', 'añadieron libros', 'acrescentaram livros', 'ajouté des livres',
    ],
    answer: `⚡ Challenge: Catholics added books to the Bible (the Apocrypha/Deuterocanon).

  ✅ Answer: Catholics did not ADD books — Protestants REMOVED them during the Reformation. The 7 deuterocanonical books (Tobit, Judith, 1 & 2 Maccabees, Sirach, Wisdom, Baruch) were in the Septuagint (Greek OT) used by Jesus and the Apostles, and in the Christian Bible for 1,500 years before Luther removed them in the 1500s.

  📖 Scripture: The New Testament quotes the Septuagint (which includes these books) hundreds of times. Hebrews 11:35 alludes to 2 Maccabees 7.

  📜 Tradition: The Council of Hippo (393 AD) and Council of Carthage (397 AD) canonized the 46-book Old Testament used by Catholics. This was the universal Christian canon for over a millennium before the Reformation.

  💬 Respond: "The question isn't whether Catholics added books, but why Luther removed books that the Church had used for 1,500 years. The historical evidence is on the Catholic side."`,
  },
  {
    keywords: [
      'confession priest', 'confess priest', 'confession unbiblical', 'why confess priest', 'priest forgive sins',
      'confesarse con un sacerdote', 'kumumpsal sa pari', 'kumpisal sa pari',
      'confissão ao padre', 'confession au prêtre', 'pengakuan dosa kepada imam',
    ],
    answer: `⚡ Challenge: Confessing to a priest is unbiblical — we should confess only to God.

  ✅ Answer: Jesus gave the Apostles — and through them, their successors — the authority to forgive sins. Confession to a priest is not instead of God forgiving; it IS God forgiving, through the ministry He established. The priest acts in persona Christi (in the person of Christ).

  📖 Scripture: John 20:22-23 — Jesus breathes on the Apostles and says, "Receive the Holy Spirit. If you forgive anyone's sins, their sins are forgiven; if you do not forgive them, they are not forgiven." James 5:16 — "Confess your sins to each other." 2 Corinthians 5:18 — God gave us the "ministry of reconciliation."

  📜 Tradition: Confession to a bishop or priest is documented from the earliest Christian writings (Didache, St. Ignatius of Antioch, Tertullian). It has never been a Catholic invention — it was the universal practice of the early Church.

  💬 Respond: "Jesus clearly gave the Apostles the power to forgive or retain sins — that power had to go somewhere! Catholics believe it was passed on through apostolic succession to priests today."`,
  },
  {
    keywords: [
      'catholics not saved', 'catholics unsaved', 'are catholics christian', 'catholics going to hell',
      'católicos no están salvados', 'hindi naliligtas ang mga katoliko',
      'católicos não estão salvos', 'catholiques ne sont pas sauvés', 'umat katolik tidak diselamatkan',
    ],
    answer: `⚡ Challenge: Catholics are not saved because they add works to faith.

  ✅ Answer: Catholics believe salvation is entirely a gift of God's grace — we cannot earn it. However, Scripture teaches that genuine faith naturally produces works, and that we must cooperate with God's grace. The Catholic view is not "faith + works = salvation" but rather "saving faith is a living faith that works through love."

  📖 Scripture: Ephesians 2:8-10 — "By grace you have been saved through faith… not of works… For we are God's handiwork, created in Christ Jesus to do good works." James 2:24 — "A person is justified by works and not by faith alone." Matthew 25:31-46 — Final judgment involves how we treated the hungry, sick, and stranger.

  📜 Tradition: The Council of Trent (1547) affirmed that justification is by grace alone, received through faith, and that it bears fruit in good works — not that works earn salvation.

  💬 Respond: "Catholics and many Protestants actually agree that true saving faith transforms a person's life. The difference is often more about terminology than substance — we all agree that grace, not human effort, is the source of salvation."`,
  },
  {
    keywords: [
      'statues idolatry', 'images idolatry', 'graven images', 'catholic idols', 'worship statues',
      'estatuas idolat', 'rebulto ay idolatriya', 'mga imahen at rebulto',
      'estátuas idolat', 'statues idolât', 'patung penyembahan berhala',
    ],
    answer: `⚡ Challenge: Catholic statues and images are idolatry, forbidden by God.

  ✅ Answer: God forbids worshipping idols — making a statue or image of something and treating it as a god. He does NOT forbid all images; in fact, He commanded images in the Temple (bronze serpent, cherubim on the Ark). Catholics do not worship statues; they use them as visual reminders of holy people, just like a photo of a loved one.

  📖 Scripture: Numbers 21:8-9 — God commands Moses to make a bronze serpent as a means of healing. Exodus 25:18 — God commands golden cherubim on the Ark of the Covenant. The commandment (Exodus 20:4-5) forbids making idols TO WORSHIP, not all artistic representations.

  📜 Tradition: The Second Council of Nicaea (787 AD) defined the distinction between latria (worship, due to God alone) and proskynesis/veneration (honor shown to images). Icons and sacred art have been part of Christian worship since the earliest centuries.

  💬 Respond: "The issue isn't the statue — it's what you do with it. Catholics venerate (honor) what the image represents; they don't worship the material object. Every Protestant church has a cross — that's also an image."`,
  },
  {
    keywords: [
      'mass sacrifice', 'mass not sacrifice', 'eucharist sacrifice', 'once for all sacrifice', 'mass re-sacrifice',
      'misa no es sacrificio', 'misa ay hindi sakripisyo', 'misa hindi sakripisyo',
      'missa não é sacrifício', 'messe sacrifice', 'misa bukan pengorbanan',
    ],
    answer: `⚡ Challenge: The Mass is not a sacrifice — Christ died once for all.

  ✅ Answer: Catholics agree Christ died ONCE for all (Hebrews 10:10). The Mass does not re-crucify Christ; it makes the ONE sacrifice of Calvary sacramentally present. It is the same sacrifice, offered once in history but applied to each generation through the Eucharist — like a window into the eternal offering before God's throne.

  📖 Scripture: Hebrews 7:24-25 — Christ "always lives to intercede" as our eternal High Priest. Revelation 5:6 — in heaven, Christ appears as "a Lamb, looking as if it had been slain." Malachi 1:11 — prophecy of a "pure offering" in every place. 1 Corinthians 10:16 — "The cup of blessing… is it not a participation in the blood of Christ?"

  📜 Tradition: Justin Martyr (2nd century) explicitly called the Eucharist a "sacrifice" and connected it to Malachi's prophecy. All early Church Fathers — Ignatius, Cyprian, Irenaeus — spoke of the Eucharist as the Church's sacrifice.

  💬 Respond: "The Mass isn't adding a new sacrifice — it's the same one, made present. Think of it like how Passover wasn't a new exodus but a re-living of the original one for each generation of Israel."`,
  },
  {
    keywords: [
      'once saved always saved', 'eternal security', 'lose salvation', 'can you lose salvation', 'assurance of salvation',
      'una vez salvo siempre salvo', 'minsan na naliligtas laging naliligtas',
      'uma vez salvo sempre salvo', 'une fois sauvé toujours sauvé', 'sekali diselamatkan selalu diselamatkan',
    ],
    answer: `⚡ Challenge: Once saved, always saved — a true Christian cannot lose their salvation.

  ✅ Answer: Catholics believe God's grace is sufficient to keep us, but Scripture clearly warns that we can fall away. Salvation is a process (justification → sanctification → glorification), not a one-time event. God's faithfulness is certain; our free response is not automatically guaranteed.

  📖 Scripture: Hebrews 6:4-6 — it is possible for those "who have once been enlightened… who have tasted the heavenly gift" to fall away. 1 Corinthians 10:12 — "Let anyone who thinks he stands take heed lest he fall." Romans 11:22 — "Consider the kindness and sternness of God… provided you continue in his kindness, otherwise you also will be cut off." Philippians 2:12 — "Work out your salvation with fear and trembling."

  📜 Tradition: The early Church never taught "once saved always saved." The Council of Trent (and later Vatican II) reaffirmed that while God's grace is utterly reliable, human free will can reject that grace.

  💬 Respond: "We can have great confidence in God's love and faithfulness. But Scripture warns us to persevere — not because God is unreliable, but because we must keep choosing to remain in Him."`,
  },
  {
    keywords: [
      'sola fide', 'faith alone', 'faith alone saves', 'justified by faith alone',
      'solo la fe salva', 'pananampalataya lamang ang nagliligtas',
      'somente a fé salva', 'la foi seule sauve', 'iman saja yang menyelamatkan',
    ],
    answer: `⚡ Challenge: Faith alone saves (Sola Fide) — the Catholic view of works is unbiblical.

  ✅ Answer: The phrase "faith alone" appears only ONCE in the New Testament — in James 2:24, where it says we are justified "NOT by faith alone." Catholics do not teach that works earn salvation; we teach that saving faith is never alone — it always produces love and good works. Paul and James agree: Paul addresses initial justification, James addresses the ongoing proof of faith.

  📖 Scripture: James 2:24 — "A person is justified by works and not by faith alone." James 2:17 — "Faith without works is dead." Galatians 5:6 — "The only thing that counts is faith expressing itself through love." Matthew 7:21 — "Not everyone who says to me 'Lord, Lord' will enter the kingdom."

  📜 Tradition: Augustine, Chrysostom, Aquinas — all taught that grace produces both faith and works as inseparable aspects of salvation. The Reformation-era division over this phrase obscures significant common ground.

  💬 Respond: "Catholics and Lutherans actually signed a Joint Declaration on Justification (1999) affirming agreement on the essentials. The real question is whether faith that saves is a living faith — and everyone agrees it is."`,
  },
  {
    keywords: [
      'sola scriptura', 'bible alone', 'scripture alone', 'bible only', 'tradition not in bible',
      'solo la biblia es suficiente', 'bibliya lamang ang sapat',
      'somente a bíblia', 'la bible seule suffit', 'alkitab saja sudah cukup',
    ],
    answer: `⚡ Challenge: The Bible alone is sufficient (Sola Scriptura) — Catholic Tradition is man-made addition.

  ✅ Answer: Sola Scriptura is itself not found in Scripture and was unknown before the 16th century. The Bible itself points to the Church and Tradition as authoritative (1 Tim 3:15 calls the Church the "pillar of truth"). Without Sacred Tradition, we wouldn't even know which books belong in the Bible — the canon was defined by the Church, not Scripture itself.

  📖 Scripture: 2 Thessalonians 2:15 — "Stand firm and hold to the traditions… whether by word or by letter." 1 Timothy 3:15 — "The church of the living God [is] the pillar and foundation of the truth." John 21:25 — "Jesus did many other things… which are not written in this book." 2 Peter 3:16 — Scripture is "hard to understand" and can be "distorted by the ignorant."

  📜 Tradition: The very canon of Scripture was defined by Catholic councils (Hippo 393, Carthage 397). The early Church operated for decades before any NT books were written — and centuries before the canon was complete. Origen, Basil, and all Fathers treated Tradition and Scripture as complementary authorities.

  💬 Respond: "The irony of Sola Scriptura is that you can't find it in Scripture. The Bible itself assumes a living Church and living Tradition to interpret and transmit the faith faithfully."`,
  },
]

// ── Simple keyword-matching search ──────────────────────────
/**
 * Find the best offline answer for a user query.
 * @param {string} query - the user's message
 * @param {string} langCode - language code
 * @returns {string|null} formatted answer string, or null if no match
 */
export function findOfflineAnswer(query, langCode) {
  if (!query) return null
  const q = query.toLowerCase()

  for (const entry of KB) {
    for (const kw of entry.keywords) {
      if (q.includes(kw)) {
        return entry.answer
      }
    }
  }

  // Fallback: partial word match (any keyword word appears in query)
  for (const entry of KB) {
    for (const kw of entry.keywords) {
      const words = kw.split(' ')
      if (words.some((w) => w.length > 4 && q.includes(w))) {
        return entry.answer
      }
    }
  }

  return null
}
