/**
 * Knowledge base — Bible & Scripture, Sacred Tradition.
 *
 * Entry shape (shared by every file in src/data/kb):
 *   id      unique slug
 *   cat     category id (see src/data/topics.js)
 *   q       the challenge, phrased the way people actually say it
 *   kw      search phrases (any language)
 *   a       the answer (paragraphs separated by a blank line)
 *   bible   [reference, short note]
 *   ccc     Catechism of the Catholic Church paragraph numbers
 *   fathers [who, work & date, quote or summary]
 *   docs    [document, section / detail, optional url]
 *   say     a short, charitable thing to say in the conversation
 *   rel     ids of related entries
 *   legacy  first keyword of the matching multilingual entry in offlineAnswers.js
 */

export default [
  {
    id: 'sola-scriptura',
    cat: 'tradition',
    legacy: 'sola scriptura',
    q: 'The Bible alone is our only authority (Sola Scriptura). Catholic Tradition is not needed.',
    kw: ['sola scriptura', 'bible alone', 'only the bible', 'bible only', 'scripture alone', 'only scripture', 'not in the bible', 'where in the bible', 'show me in the bible', 'biblia lamang', 'bibliya lang', 'sa bibliya lang'],
    a: `Catholics hold Scripture to be inspired and without error. The question is not whether the Bible is God's word, but whether the Bible teaches that it is the ONLY rule of faith. It never does.

Jesus did not write a book. He founded a Church and sent apostles to preach. The apostles handed on the faith both in writing and by word of mouth, and they told Christians to hold to both. For decades, before the New Testament was finished and gathered, Christians lived by the apostles' oral teaching.

The Bible also does not include its own table of contents. Knowing which books are inspired depends on the Church's witness, which is Tradition. Scripture, Tradition and the Church's teaching office work together like a three-legged stool. Remove one, and the others cannot stand.

2 Timothy 3:16-17 says Scripture is "profitable" for teaching. It does not say Scripture ALONE is sufficient. When Paul wrote it, "Scripture" meant mainly the Old Testament.`,
    bible: [
      ['2 Thessalonians 2:15', 'Hold fast to the traditions you were taught, either by word of mouth or by letter.'],
      ['1 Timothy 3:15', 'The Church of the living God is the pillar and foundation of the truth.'],
      ['2 Timothy 2:2', 'What you heard from me, entrust to faithful men who will teach others also.'],
      ['John 21:25', 'Not everything Jesus did was written down.'],
      ['Acts 8:30-31', '"How can I understand unless someone guides me?" — the Ethiopian eunuch.'],
      ['2 Peter 3:16', 'Some things in Scripture are hard to understand, and the unstable twist them.'],
      ['2 Timothy 3:16-17', 'Scripture is profitable for teaching. It does not say "Scripture alone."'],
    ],
    ccc: [80, 81, 82, 85, 95, 113],
    fathers: [
      ['St. Irenaeus of Lyons', 'Against Heresies 3.4.1 (c. 180 AD)', 'Summary: even if the apostles had left no writings, we would follow the order of tradition they handed down to the churches they founded.'],
      ['St. Basil the Great', 'On the Holy Spirit 27.66 (c. 375 AD)', 'Summary: some Church teachings we have from written teaching, others from apostolic tradition handed down to us; both have the same force for true religion.'],
      ['St. Augustine', 'Against the Epistle of Manichaeus 5 (397 AD)', '"I would not believe in the Gospel, unless moved by the authority of the Catholic Church."'],
    ],
    docs: [
      ['Dei Verbum (Vatican II, 1965)', 'Sections 9–10: Scripture and Tradition flow from the same divine wellspring.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'],
    ],
    say: '"I love the Bible too. But where does the Bible say that only the Bible is our authority? Paul told Christians to keep traditions handed on by word of mouth AND by letter (2 Thess 2:15)."',
    rel: ['tradition-manmade', 'canon-who-decided', 'private-interpretation'],
  },
  {
    id: 'tradition-manmade',
    cat: 'tradition',
    q: 'Jesus condemned the traditions of men (Mark 7). Catholic tradition is man-made.',
    kw: ['traditions of men', 'tradition of men', 'man made tradition', 'man-made', 'mark 7', 'human tradition', 'tradisyon sa tawo', 'tradisyon ng tao', 'gawa ng tao', 'binuhat sa tawo'],
    a: `In Mark 7, Jesus condemns human traditions that CANCEL God's commandments. His example is the "Corban" practice, which let people avoid supporting their parents. He is not condemning tradition as such. The same New Testament commands Christians to keep the apostolic traditions.

Catholics distinguish two things:
• Sacred Tradition (capital "T"): the faith the apostles handed on, such as the canon of Scripture, the Trinity, and infant baptism. It never contradicts Scripture.
• Church traditions and disciplines (small "t"): customs like the rules on Friday abstinence or priestly celibacy in the Latin Church. The Church can change these.

Every Christian body has traditions, including how it reads the Bible, when it worships, and what its services look like. The real question is whose tradition goes back to the apostles.`,
    bible: [
      ['Mark 7:8-13', 'Jesus condemns traditions that nullify the commandment to honor parents.'],
      ['2 Thessalonians 2:15', 'Stand firm and hold to the traditions you were taught.'],
      ['2 Thessalonians 3:6', 'Keep away from anyone not living according to the tradition received from us.'],
      ['1 Corinthians 11:2', 'I praise you because you maintain the traditions just as I delivered them to you.'],
    ],
    ccc: [75, 76, 77, 78, 83],
    fathers: [
      ['St. Vincent of Lérins', 'Commonitory 2.6 (434 AD)', 'We hold "that which has been believed everywhere, always, and by all."'],
    ],
    docs: [
      ['Dei Verbum (Vatican II, 1965)', 'Section 8: Apostolic Tradition develops in the Church with the help of the Holy Spirit.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'],
    ],
    say: '"Jesus condemned traditions that break God\'s law. But Paul praised Christians for keeping apostolic tradition (1 Cor 11:2). Which Catholic teaching do you think breaks a commandment?"',
    rel: ['sola-scriptura', 'church-fathers'],
  },
  {
    id: 'deuterocanon',
    cat: 'bible',
    legacy: 'added books',
    q: 'Catholics added extra books (the Apocrypha) to the Bible.',
    kw: ['added books', 'apocrypha', 'deuterocanon', 'deuterocanonical', 'extra books', 'catholic bible different', 'catholic bible more books', '73 books', '66 books', 'maccabees', 'tobit', 'sirach', 'wisdom of solomon', 'king james only', 'kjv only', 'dagdag na aklat', 'dugang nga libro'],
    a: `Catholics did not add books. Protestants removed them. The seven books in question are Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach and Baruch, plus parts of Esther and Daniel. They were part of the Septuagint, the Greek Old Testament that most early Christians used. Most Old Testament quotations in the New Testament follow the Septuagint.

The early Church read these books in worship. The councils of Hippo (393) and Carthage (397) listed them in the canon. Florence (1442) confirmed the list, and Trent (1546) defined it solemnly. In 1534, Luther moved them to an appendix, partly because 2 Maccabees supports prayer for the dead. Even the original 1611 King James Bible printed them.

The claim that Jews "closed" their canon at a "Council of Jamnia" (c. 90 AD) is now widely doubted by scholars. Even if it were true, a Jewish decision made after Christ would not bind the Church.`,
    bible: [
      ['Hebrews 11:35', 'Women received back their dead… others were tortured, refusing release — an allusion to 2 Maccabees 7.'],
      ['2 Maccabees 12:43-46', 'Judas Maccabeus offers sacrifice for the dead.'],
      ['Wisdom 2:12-20', 'The persecuted righteous man, echoed in the mocking at the Cross (Matthew 27:43).'],
    ],
    ccc: [120, 138],
    fathers: [
      ['Council of Carthage', 'Canon on Scripture (397 AD)', 'Summary: its list of canonical books includes Tobit, Judith, and two books of Maccabees.'],
      ['St. Augustine', 'On Christian Doctrine 2.8.13 (c. 397 AD)', 'Summary: lists the Old Testament books, including Tobit, Judith, the two Maccabees, Wisdom and Ecclesiasticus (Sirach).'],
    ],
    docs: [
      ['Council of Trent, Session IV (1546)', 'Decree on the Canonical Scriptures: the full list of 73 books.'],
    ],
    say: '"These books were in the Bible Christians used for 1,500 years, and even in the first King James Bible. They were removed at the Reformation, not added by Catholics."',
    rel: ['canon-who-decided', 'sola-scriptura', 'purgatory'],
  },
  {
    id: 'canon-who-decided',
    cat: 'bible',
    q: 'The Church did not decide what is in the Bible. The books are self-evident.',
    kw: ['who decided the bible', 'who wrote the bible', 'canon of scripture', 'canon', 'who chose the books', 'how do we know which books', 'table of contents', 'new testament canon', 'sino ang nagpili', 'kinsa nagpili'],
    a: `No book of the Bible contains an inspired list of which books belong in it. For about three centuries, Christians disputed some books, including Hebrews, James, 2 Peter, Jude and Revelation. Popular writings such as the Shepherd of Hermas, the Didache and the Epistle of Barnabas were read in some churches but left out in the end.

The Church did not "create" the Bible's authority. God inspired the books. But the Church, guided by the Holy Spirit and by apostolic Tradition, recognized which books were inspired. St. Athanasius gave the 27-book New Testament list in 367. Regional councils at Rome, Hippo and Carthage in the late 300s confirmed the canon.

So anyone who accepts the 27 New Testament books is trusting the discernment of the early Catholic Church.`,
    bible: [
      ['John 16:13', 'The Spirit of truth will guide you into all truth.'],
      ['1 Timothy 3:15', 'The Church is the pillar and foundation of the truth.'],
    ],
    ccc: [105, 120, 138],
    fathers: [
      ['St. Athanasius', '39th Festal Letter (367 AD)', 'Summary: the first known list naming exactly the 27 books of the New Testament.'],
      ['St. Augustine', 'Against the Epistle of Manichaeus 5 (397 AD)', '"I would not believe in the Gospel, unless moved by the authority of the Catholic Church."'],
    ],
    docs: [
      ['Council of Trent, Session IV (1546)', 'Solemnly defined the canon already received in the Church.'],
      ['Dei Verbum (Vatican II, 1965)', 'Section 8: through Tradition, the Church knows the full canon of the sacred books.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'],
    ],
    say: '"Which verse tells us the Gospel of Mark belongs in the Bible? None does. We know because of the Church\'s witness. That is why Tradition matters."',
    rel: ['deuterocanon', 'sola-scriptura'],
  },
  {
    id: 'private-interpretation',
    cat: 'tradition',
    q: 'Anyone can read and interpret the Bible for himself with the Holy Spirit. We do not need the Church.',
    kw: ['interpret the bible myself', 'private interpretation', 'personal interpretation', 'holy spirit guides me', 'need the church to interpret', 'magisterium', 'teaching authority', 'denominations', 'thousands of denominations'],
    a: `Catholics are encouraged to read the Bible personally and pray with it. But the Bible itself warns that it can be twisted, and it shows the Church settling disputes with authority. The Council of Jerusalem in Acts 15 is the clearest example.

If the Holy Spirit gave every sincere reader the right interpretation, sincere, Spirit-filled Christians would not disagree about baptism, the Eucharist, or whether salvation can be lost. They do disagree, and that has produced thousands of separate denominations. Christ prayed that his followers would be one (John 17:21). He gave the apostles and their successors the task of guarding and explaining the faith.

The Church's teaching office (the Magisterium) is not above God's word. It serves God's word, teaching only what has been handed on.`,
    bible: [
      ['2 Peter 1:20', 'No prophecy of Scripture is a matter of one\'s own interpretation.'],
      ['2 Peter 3:16', 'The ignorant and unstable twist the Scriptures to their own destruction.'],
      ['Acts 8:30-31', '"How can I, unless someone guides me?"'],
      ['Acts 15:1-29', 'The apostles and elders meet in council and decide: "It seemed good to the Holy Spirit and to us."'],
      ['Luke 10:16', 'Whoever hears you hears me.'],
    ],
    ccc: [85, 86, 100, 111, 112, 113, 114],
    fathers: [
      ['St. Irenaeus of Lyons', 'Against Heresies 3.3.1 (c. 180 AD)', 'Summary: the true tradition of the apostles can be found in every church through the bishops the apostles appointed and their successors.'],
    ],
    docs: [
      ['Dei Verbum (Vatican II, 1965)', 'Section 10: the teaching office is not above the word of God but serves it.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'],
    ],
    say: '"If the Spirit gives every reader the right meaning, why do sincere Bible Christians disagree on baptism and salvation? Acts 15 shows Christ\'s Church settling questions together."',
    rel: ['sola-scriptura', 'one-true-church'],
  },
  {
    id: 'catholics-dont-read-bible',
    cat: 'bible',
    q: 'Catholics do not read the Bible. The Church hid the Bible and chained it so people could not read it.',
    kw: ['hid the bible', 'chained bible', 'chained the bible', 'forbid bible', 'forbade the bible', 'catholics dont read the bible', 'catholics do not read bible', 'banned the bible', 'burned bibles', 'latin bible', 'tinago ang bibliya', 'wala nagbasa bibliya'],
    a: `The Catholic Church preserved the Bible. For centuries, monks copied it by hand. St. Jerome translated it into Latin, the common language of the West, around 400 AD. That is the Vulgate, whose name means "common."

Bibles were chained in churches the way phone books or reference books were once chained in public places. Each copy was enormously expensive, and the chain kept it available to everyone and protected it from theft. Printed vernacular Bibles existed before Luther. For example, the Mentelin Bible in German was printed in 1466. The Church restricted certain unauthorized or erroneous translations at certain times and places. It never restricted the Bible itself.

Today, every Catholic Mass includes readings from the Old Testament, a Psalm, the New Testament and the Gospel. Over its three-year Sunday cycle and two-year weekday cycle, the Lectionary covers a large part of the Bible. The Catechism quotes St. Jerome: "Ignorance of the Scriptures is ignorance of Christ."`,
    bible: [
      ['Luke 4:16-21', 'Jesus reads Scripture aloud in the liturgy of the synagogue, as the Mass does.'],
      ['Colossians 4:16', 'Have this letter read aloud in the church.'],
    ],
    ccc: [131, 132, 133, 1154],
    fathers: [
      ['St. Jerome', 'Commentary on Isaiah, Prologue (c. 408 AD)', '"Ignorance of Scripture is ignorance of Christ."'],
    ],
    docs: [
      ['Dei Verbum (Vatican II, 1965)', 'Sections 22 and 25: easy access to Scripture should be provided for all the faithful.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'],
    ],
    say: '"Every Mass has four Bible readings! And Bibles were chained the way valuable books were chained in public libraries: to keep them available to everyone."',
    rel: ['canon-who-decided', 'sola-scriptura'],
  },
  {
    id: 'bible-contradictions',
    cat: 'bible',
    q: 'The Bible is full of errors and contradictions, so it cannot be trusted.',
    kw: ['bible contradictions', 'contradiction in the bible', 'bible errors', 'bible has mistakes', 'bible is fake', 'bible written by men', 'bible changed', 'inerrancy'],
    a: `The Church teaches that God is the author of Scripture and that the human writers were true authors too. They used their own languages, styles and literary forms. That is why Scripture teaches "firmly, faithfully and without error" the truth God wanted written for our salvation.

Most apparent contradictions disappear when we ask:
• Literary form: Is this poetry, parable, history, or apocalyptic writing?
• Perspective: The four Gospels are like four witnesses. Their details differ, but the story is the same.
• Approximation: Ancient writers rounded numbers and summarized speeches.
• Copying: A few minor copyist errors exist in manuscripts. They are not in the inspired originals.

St. Augustine's rule still works. If something seems wrong, the manuscript is faulty, the translator erred, or we have not understood it.`,
    bible: [
      ['2 Timothy 3:16', 'All Scripture is inspired by God.'],
      ['2 Peter 1:21', 'Men moved by the Holy Spirit spoke from God.'],
    ],
    ccc: [105, 106, 107, 109, 110, 116],
    fathers: [
      ['St. Augustine', 'Letter 82 to St. Jerome (c. 405 AD)', 'Summary: if I find anything that seems contrary to truth, I conclude that the manuscript is faulty, the translator erred, or I have failed to understand it.'],
    ],
    docs: [
      ['Dei Verbum (Vatican II, 1965)', 'Sections 11–12: inspiration, truth, and how to interpret Scripture.', 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'],
    ],
    say: '"Which contradiction do you have in mind? Let\'s look at the context together. Most of them are about literary style or perspective."',
    rel: ['canon-who-decided', 'existence-of-god'],
  },
  {
    id: 'call-no-man-father',
    cat: 'bible',
    q: 'Jesus said "call no man father" (Matthew 23:9), so calling priests "Father" is unbiblical.',
    kw: ['call no man father', 'call no one father', 'matthew 23:9', 'calling priests father', 'why call priest father', 'holy father title', 'ayaw tawga og amahan', 'huwag tawaging ama', 'padre'],
    a: `Read literally, Matthew 23:9 would also forbid calling your own dad "father." The next verses would forbid calling anyone "teacher" (Matthew 23:8, 10). Yet the New Testament uses both words freely.

Jesus is warning against pride. The Pharisees loved titles and used them to claim authority that belonged to God alone. He is not banning the word.

St. Paul calls himself a spiritual father: "I became your father in Christ Jesus through the gospel." St. Stephen addresses the Jewish leaders as "brothers and fathers." Jesus himself speaks of "Father Abraham." Catholics call priests "Father" because they serve as spiritual fathers, just as Paul did.

"Holy Father" is an honorific title. All its holiness comes from God, and Jesus uses the same words for God the Father in John 17:11.`,
    bible: [
      ['1 Corinthians 4:15', 'I became your father in Christ Jesus through the gospel.'],
      ['Acts 7:2', 'Stephen: "Brothers and fathers, listen to me."'],
      ['Luke 16:24', 'Jesus\' parable: "Father Abraham, have mercy on me."'],
      ['1 John 2:13', 'I am writing to you, fathers.'],
      ['Matthew 23:8-10', 'The same passage also says "call no one teacher," which shows the point is humility.'],
    ],
    ccc: [1548],
    fathers: [],
    docs: [],
    say: '"Do you call your dad \'father\'? Paul called himself a father to the Corinthians (1 Cor 4:15). Jesus was condemning pride, not a word."',
    rel: ['ministerial-priesthood'],
  },
  {
    id: 'church-fathers',
    cat: 'tradition',
    legacy: 'church fathers',
    q: 'The early Church Fathers were not Catholic. The early Church was "Bible-only."',
    kw: ['church fathers', 'early church', 'early christians', 'early church was not catholic', 'first christians', 'apostolic fathers', 'unang simbahan', 'sinaunang simbahan'],
    a: `The earliest Christian writers after the apostles describe a recognizably Catholic Church. They describe bishops, priests and deacons. They describe the Eucharist as Christ's real flesh and the Mass as a sacrifice. They describe baptismal regeneration, Rome's special authority, prayers for the dead, and honor for Mary and the martyrs.

St. Ignatius of Antioch was a disciple of the Apostle John and was martyred around 107 AD. He is the first known writer to use the phrase "the Catholic Church." In the same letters, he insists on obeying the bishop and calls the Eucharist "the flesh of our Savior."

St. John Henry Newman, a former Anglican, studied the Fathers to defend Protestantism and became Catholic instead. He wrote: "To be deep in history is to cease to be a Protestant."`,
    bible: [
      ['2 Timothy 2:2', 'Teaching passed on to faithful men, who teach others.'],
      ['Acts 2:42', 'They devoted themselves to the apostles\' teaching, the breaking of bread and the prayers.'],
    ],
    ccc: [8, 78, 688],
    fathers: [
      ['St. Ignatius of Antioch', 'Letter to the Smyrnaeans 8 (c. 107 AD)', '"Wherever the bishop appears, there let the people be; just as wherever Jesus Christ is, there is the Catholic Church."'],
      ['St. Irenaeus of Lyons', 'Against Heresies 3.3.2 (c. 180 AD)', 'Summary: every church should agree with the Church of Rome, founded by Peter and Paul, because of its preeminent authority.'],
      ['St. Justin Martyr', 'First Apology 66–67 (c. 155 AD)', 'Summary: describes Sunday worship with Scripture readings, a homily, prayers and the Eucharist, which is "the flesh and blood of that Jesus who was made flesh."'],
    ],
    docs: [
      ['St. John Henry Newman', 'An Essay on the Development of Christian Doctrine (1845), Introduction', 'https://www.newmanreader.org/works/development/'],
    ],
    say: '"Read St. Ignatius of Antioch, a disciple of John. Around 107 AD he already called it \'the Catholic Church\' and said the Eucharist is Christ\'s flesh."',
    rel: ['constantine-founded', 'real-presence', 'apostolic-succession'],
  },
]
